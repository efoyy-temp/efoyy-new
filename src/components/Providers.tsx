"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { APIProvider } from "@vis.gl/react-google-maps";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

const Providers = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <ApolloProvider client={client}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        {props.children}
      </APIProvider>
    </ApolloProvider>
  );
};

export default Providers;
