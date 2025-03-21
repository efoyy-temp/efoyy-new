"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { MapProvider } from "@vis.gl/react-maplibre";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

const Providers = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <MapProvider>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </MapProvider>
  );
};

export default Providers;
