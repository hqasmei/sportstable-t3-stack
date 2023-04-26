"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const URL = process.env.GRAPHQL_URI;

console.log(URL);
const client = new ApolloClient({
  // uri: "https://sportstable.io/api/graphql",
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>{children}</SessionProvider>;
    </ApolloProvider>
  );
};

export default Providers;
