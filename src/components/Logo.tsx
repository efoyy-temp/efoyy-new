import Image from "next/image";

const Logo = (props: { height: number }) => {
  return (
    <Image
      src="/Logo.png"
      alt="logo"
      height={props.height}
      width={(props.height * 87) / 28}
    />
  );
};

export default Logo;
