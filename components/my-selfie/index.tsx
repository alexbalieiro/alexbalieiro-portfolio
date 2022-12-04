import myPhoto from "../../public/alex-selfie.png";
import Image from "next/image";
export default function MySelfie() {
  return (
    <Image
      src={myPhoto}
      alt=""
      width={125}
      height={125}
      quality={100}
      priority
      style={{
        borderRadius: "125px",
        border: "solid 1px white",
        boxShadow: " 0 0 0 1px ",
      }}
    />
  );
}
