import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = (props: { height: number; theme?: "dark" | "light" }) => {
  const themeContext = useTheme();
  const theme = props.theme ?? themeContext.theme;

  console.log({ theme });
  return (
    <Image
      src={theme == "light" ? "/Logo-light.png" : "/Logo.png"}
      alt="logo"
      height={props.height}
      width={(props.height * 87) / 28}
    />
  );
};

export default Logo;
