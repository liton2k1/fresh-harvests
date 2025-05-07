import Container from "@/components/shared/Container/Container";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h1>This is about page !</h1>
      </Container>
    </div>
  );
};

export default page;
