import React from "react";
import Image from "../../components/Image/Img";
import Container from "../../lib/platform/web/components/Container";
import me from "./me.png";
export default function MePhoto(props) {
  return (
    <Container {...props}>
      <Image src={me} alt="Me in Guatape, Colombia" />
    </Container>
  );
}
