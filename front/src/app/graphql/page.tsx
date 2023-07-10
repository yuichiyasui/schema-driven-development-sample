"use client";

import { graphql } from "@/__generated__/graphql";
import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
          <li key={item.id} className="flex gap-x-4">
            <Image
              width={100}
              height={100}
              src={item.imageUrl}
              alt=""
              unoptimized
            />
            <div>
              <p>{"ID: " + item.id}</p>
              <p>{item.name}</p>
              <p>{"¥" + item.price}</p>
            </div>
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
