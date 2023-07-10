"use client";

import { ItemService } from "@/__generated__/grpc/item/v1/item_connectweb";
import { useClient } from "./client";
import { QueryClientProvider } from "@/libs/tanstack-query/client";
import { useQuery } from "@tanstack/react-query";
import { ItemCard } from "../_components/ItemCard";

const ItemList = () => {
  const grpcClient = useClient(ItemService);
  const { data, isFetching } = useQuery({
    queryFn: async () => {
      const res = await grpcClient.listItems({ limit: 10 });
      return res;
    },
    queryKey: ["grpc-items"],
  });

  if (!data && isFetching) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Fetching Error!</p>;
  }

  return (
    <ul className="flex flex-col gap-y-4">
      {data.items.map((item) => {
        return (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default function Page() {
  return (
    <QueryClientProvider>
      <h1 className="text-3xl mb-10">Connect Web</h1>

      <ItemList />
    </QueryClientProvider>
  );
}
