"use client";

import { operations } from "@/__generated__/open-api/schema";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ItemCard } from "../_components/ItemCard";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

// type ListItemRequest = operations["listItems"]["parameters"]["query"];
type ListItemResponse =
  operations["listItems"]["responses"][keyof operations["listItems"]["responses"]]["content"]["application/json"];

const ItemList = () => {
  const { data } = useQuery<ListItemResponse>({
    queryKey: ["items"],
    queryFn: () =>
      fetch("http://localhost:4001/items").then((data) => data.json()),
  });

  if (!data || !Array.isArray(data)) {
    throw new Error("Fetch Error!");
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
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl mb-10">Open API</h1>

      <ErrorBoundary fallback={<p>Fetch Error!</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <ItemList />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
