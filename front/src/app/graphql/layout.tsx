"use client";

import { ApolloWrapper } from "./_apollo/apollo-wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
