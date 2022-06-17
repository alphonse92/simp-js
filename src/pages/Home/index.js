import React, { useState, startTransition } from "react";

import Container from "../../lib/platform/web/components/Container";
import Vertical from "../../lib/platform/web/components/Vertical";
import PresentationSlide from "./Slides/Presentation";

export default function HomePage() {
  const { innerWidth: width, innerHeight: height } = window;

  const [mouseMovement, setMouseMovement] = useState();

  const handleMouseMovement = (event) => {
    const { clientX, clientY, ...rest } = event;
    const centerX = width / 2;
    const centerY = height / 2;

    const amountX = clientX - centerX;
    const amountY = clientY - centerY;

    const x = amountX / centerX;
    const y = amountY / centerY;

    startTransition(() => {
      setMouseMovement(() => ({ x, y }));
    });
  };

  return (
    <Container flex center margin="var(--m)" onMouseMove={handleMouseMovement}>
      <Vertical flexGrow={1}>
        <PresentationSlide mouseMovement={mouseMovement} />
      </Vertical>
    </Container>
  );
}
