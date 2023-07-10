"use client";

import {
  QueryClientProvider as Provider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from "react";

export const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};
