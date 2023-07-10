package main

import (
	"context"
	"encoding/json"
	"fmt"
	itemv1 "grpc/gen/item/v1"
	"grpc/gen/item/v1/itemv1connect"
	"log"
	"net/http"
	"os"

	"github.com/bufbuild/connect-go"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

type ItemServer struct{}

func (s *ItemServer) ListItems(
	ctx context.Context,
	req *connect.Request[itemv1.ListItemsRequest],
) (*connect.Response[itemv1.ListItemsResponse], error) {
	file, err := os.ReadFile("../db.json")
	if err != nil {
		log.Fatal("Read db.json failed.")
	}
	var items []*itemv1.Item
	err = json.Unmarshal(file, &items)
	if err != nil {
		log.Fatal("Marshal is failed")
	}

	res := connect.NewResponse(&itemv1.ListItemsResponse{
		Items: items,
	})

	return res, nil
}

func main() {
	itemServer := &ItemServer{}
	mux := http.NewServeMux()
	path, handler := itemv1connect.NewItemServiceHandler(itemServer)
	mux.Handle(path, handler)
	// Use h2c so we can serve HTTP/2 without TLS.
	corsHandler := cors.Default().Handler(h2c.NewHandler(mux, &http2.Server{}))

	fmt.Println("gRPC server is running: http://localhost:4003")
	http.ListenAndServe(
		"localhost:4003",
		corsHandler,
	)
}
