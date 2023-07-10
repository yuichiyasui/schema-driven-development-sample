## About

gRPC(connect-go)のサンプル

## To run

```bash
go run main.go
```

リクエスト

```bash
curl \
    --header "Content-Type: application/json" \
    --data '{"limit": 10}' \
    http://localhost:4003/item.v1.ItemService/ListItems
```

## スキーマの更新手順

1. proto ファイルに定義を追加
2. `buf generate`
3. main.go に実装
