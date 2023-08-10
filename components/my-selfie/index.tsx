import myPhoto from "../../public/alex-selfie.png";
import Image from "next/image";
export default function MySelfie() {
  return (
    <Image
      src={myPhoto}
      alt=""
      width={120}
      height={120}
      quality={100}
      priority
      style={{
        borderRadius: "125px",
        border: "solid 1px white",
        boxShadow: "0px 0px 2px 0px white inset, 0 0 2px 0px white",
      }}
    />
  );
}
