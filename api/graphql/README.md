## About
GraphQL APIのサンプル

## To Run
```bash
go run main.go
```

## スキーマの更新手順
1. `api/graphql/graph/schema.graphqls`にスキーマを定義する
2. スキーマをベースにgoファイルを生成する
```bash
go generate ./...
```