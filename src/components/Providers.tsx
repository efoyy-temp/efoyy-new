"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { MapProvider } from "@vis.gl/react-maplibre";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const client = new ApolloClient({
  uri: "https://api.efoyyta.com/graphql",
  cache: new InMemoryCache(),
});

const Providers = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MapProvider>
        <ApolloProvider client={client}>{props.children}</ApolloProvider>
      </MapProvider>
    </NextThemesProvider>
  );
};

export default Providers;
