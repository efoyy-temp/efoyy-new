"use client";

import { Toaster } from "@/components/ui/toaster";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { MapProvider } from "@vis.gl/react-maplibre";

const client = new ApolloClient({
  uri: "https://api.efoyyta.com/graphql",
  cache: new InMemoryCache(),
});

const Providers = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <>
      <MapProvider>
        <ApolloProvider client={client}>{props.children}</ApolloProvider>
      </MapProvider>
      <Toaster />
    </>
  );
};

export default Providers;
