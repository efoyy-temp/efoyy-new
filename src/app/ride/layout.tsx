"use client";
import { MapProvider } from "@vis.gl/react-maplibre";

const layout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <MapProvider>{children}</MapProvider>;
};

export default layout;
