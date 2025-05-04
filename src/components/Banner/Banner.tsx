import Image from "next/image";
import bg from "@/assets/Bg.png";
import Container from "../shared/Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="md:h-[600px]">
        <Image src={bg} alt="" className="w-full h-full" />
      </div>
    </Container>
  );
};

export default Banner;
