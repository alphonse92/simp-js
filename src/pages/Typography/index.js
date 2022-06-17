import React from "react";

import Container from "../../lib/platform/web/components/Container";

import Center from "../../lib/platform/web/components/Center";
import Vertical from "../../lib/platform/web/components/Vertical";

import H1 from "../../lib/platform/web/components/typography/H1";
import H2 from "../../lib/platform/web/components/typography/H2";
import H3 from "../../lib/platform/web/components/typography/H3";
import H4 from "../../lib/platform/web/components/typography/H4";
import H5 from "../../lib/platform/web/components/typography/H5";
import H6 from "../../lib/platform/web/components/typography/H6";
import Subtitle from "../../lib/platform/web/components/typography/Subtitle";
import Subtitle2 from "../../lib/platform/web/components/typography/Subtitle2";
import Text from "../../lib/platform/web/components/typography/Text";
import Small from "../../lib/platform/web/components/typography/Small";
import Span from "../../lib/platform/web/components/typography/Span";

export default function TypographyPage(props) {
  return (
    <Container flex center bgColor="var(--sleepycloud)" margin="var(--m)">
      <Center>
        <Vertical>
          <H1>Title 1</H1>
          <H2>Title 2</H2>
          <H3>Title 3</H3>
          <H4>Title 4</H4>
          <H5>Title 5</H5>
          <H6>Title 6</H6>

          <Subtitle>Subtitle 1</Subtitle>
          <Subtitle2>Subtitle 2 </Subtitle2>
          <Text>
            This is a paragraph <Span>and this is a span</Span>
            <Small>This is small</Small>
          </Text>
        </Vertical>
      </Center>
    </Container>
  );
}
