# 更新前のファイルを削除
rm -f ./schema.gen.go

# スキーマファイルを生成
oapi-codegen -package main schema.yaml > schema.gen.go