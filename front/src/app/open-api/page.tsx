"use client";

import { operations } from "@/__generated__/open-api/schema";
import { useQuery } from "@tanstack/react-query";
import { ItemCard } from "../_components/ItemCard";
import { QueryClientProvider } from "@/libs/tanstack-query/client";

// type ListItemRequest = operations["listItems"]["parameters"]["query"];
type ListItemResponse =
  operations["listItems"]["responses"][keyof operations["listItems"]["responses"]]["content"]["application/json"];

const ItemList = () => {
  const { data, isFetching } = useQuery<ListItemResponse>({
    queryKey: ["items"],
    queryFn: () =>
      fetch("http://localhost:4001/items").then((data) => data.json()),
  });

  if (!data && isFetching) {
    return <p>Loading...</p>;
  }

  if (!data || !Array.isArray(data)) {
    return <p>Fetching Error!</p>;
  }

  return (
    <ul className="flex flex-col gap-y-4">
      {data.map((item) => {
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
      <h1 className="text-3xl mb-10">Open API</h1>
      <ItemList />
    </QueryClientProvider>
  );
}
