# 更新前のファイルを削除
rm -f -R ./api/*.gen.go

# スキーマファイルを生成
oapi-codegen -config types.config.yaml schema.yaml
oapi-codegen -config server.config.yaml schema.yaml