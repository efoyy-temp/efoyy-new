"use client";

import { Toaster } from "@/components/ui/toaster";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.efoyyta.com/graphql",
  cache: new InMemoryCache(),
});

const Providers = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
      <Toaster />
    </>
  );
};

export default Providers;
