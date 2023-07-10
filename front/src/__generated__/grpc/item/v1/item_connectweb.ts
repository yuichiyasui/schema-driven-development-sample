// @generated by protoc-gen-connect-web v0.11.0 with parameter "target=ts,import_extension=.ts"
// @generated from file item/v1/item.proto (package item.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListItemsRequest, ListItemsResponse } from "./item_pb.ts";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service item.v1.ItemService
 */
export const ItemService = {
  typeName: "item.v1.ItemService",
  methods: {
    /**
     * @generated from rpc item.v1.ItemService.ListItems
     */
    listItems: {
      name: "ListItems",
      I: ListItemsRequest,
      O: ListItemsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

