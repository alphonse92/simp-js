import React from "react";
import Image from "../../../../components/Image/Img";
import Container from "../../../../lib/platform/web/components/Container";

import me from "./me.jpeg";
export default function MePhoto(props) {
  return (
    <Container {...props} flexWrap="wrap" center vertical>
      <Image src={me} alt="Me in Guatape, Colombia" />
    </Container>
  );
}
