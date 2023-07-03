package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"open-api/api"
	"os"

	middleware "github.com/deepmap/oapi-codegen/pkg/gin-middleware"
	"github.com/gin-gonic/gin"
)

func NewGinServer(apiInstance *api.Api, port int) *http.Server {
	swagger, err := api.GetSwagger()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error loading swagger spec\n: %s", err)
		os.Exit(1)
	}

	// Clear out the servers array in the swagger spec, that skips validating
	// that server names match. We don't know how this thing will be run.
	swagger.Servers = nil

	// This is how you set up a basic gin router
	r := gin.Default()

	// Use our validation middleware to check all requests against the
	// OpenAPI schema.
	r.Use(middleware.OapiRequestValidator(swagger))

	// We now register our petStore above as the handler for the interface
	api.RegisterHandlers(r, apiInstance)

	s := &http.Server{
		Handler: r,
		Addr:    fmt.Sprintf("0.0.0.0:%d", port),
	}
	return s
}

func main() {
	port := flag.Int("port", 4001, "Port for test HTTP server")
	flag.Parse()

	// Create an instance of our handler which satisfies the generated interface
	a := api.NewApi()
	s := NewGinServer(a, *port)

	// And we serve HTTP until the world ends.
	log.Fatal(s.ListenAndServe())
}
