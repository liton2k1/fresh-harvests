import Image from "next/image";
import loader from "@/assets/loader.svg";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src={loader} alt="Loading..." className="w-28" />
    </div>
  );
};

export default Loader;
