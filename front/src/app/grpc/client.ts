import { useMemo } from "react";
import { ServiceType } from "@bufbuild/protobuf";
import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";

const transport = createConnectTransport({
  baseUrl: "http://localhost:4003",
});

export function useClient<T extends ServiceType>(service: T) {
  return useMemo(() => createPromiseClient(service, transport), [service]);
}
