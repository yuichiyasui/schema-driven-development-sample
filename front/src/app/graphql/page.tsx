"use client";

import { graphql } from "@/__generated__/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ItemCard } from "../_components/ItemCard";

export const dynamic = "force-dynamic";

const ItemsQuery = graphql(`
  query Items {
    items {
      id
      name
      price
      imageUrl
    }
  }
`);

const ItemList = () => {
  const { data } = useSuspenseQuery(ItemsQuery);

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
    <>
      <h1 className="text-3xl mb-10">GraphQL Example</h1>

      <ErrorBoundary fallback={<p>Fetch Error!</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <ItemList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
