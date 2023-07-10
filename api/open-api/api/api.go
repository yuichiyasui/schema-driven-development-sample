package api

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

type Api struct{}

func NewApi() *Api {
	return &Api{}
}

func (api *Api) ListItems(ctx *gin.Context, params ListItemsParams) {
	file, err := os.ReadFile("../../db.json")
	if err != nil {
		log.Fatal("Read db.json failed.")
	}
	var items []Item
	err = json.Unmarshal(file, &items)
	if err != nil {
		log.Fatal("Marshal is failed")
	}

	ctx.JSON(http.StatusOK, items)
}
