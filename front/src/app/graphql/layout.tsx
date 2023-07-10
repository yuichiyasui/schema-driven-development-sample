"use client";

import { Provider } from "urql";
import { client } from "./_urql/client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Provider value={client}>{children}</Provider>;
}
