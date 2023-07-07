package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.34

import (
	"context"
	"encoding/json"
	"graphql/graph/model"
	"log"
	"os"
)

// Items is the resolver for the items field.
func (r *queryResolver) Items(ctx context.Context, limit *int) ([]*model.Item, error) {
	file, err := os.ReadFile("db.json")
	if err != nil {
		log.Fatal("Read db.json failed.")
	}
	var items []*model.Item
	err = json.Unmarshal(file, &items)
	if err != nil {
		log.Fatal("Marshal is failed")
	}

	return items, nil
}

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
