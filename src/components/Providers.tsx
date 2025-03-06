"use client";
import { APIProvider } from "@vis.gl/react-google-maps";

const Providers = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      {props.children}
    </APIProvider>
  );
};

export default Providers;
