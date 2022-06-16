import React from "react";

import Container from "../../lib/platform/web/components/Container";
import Span from "../../lib/platform/web/components/typography/Span";
import Text from "../../lib/platform/web/components/typography/Text";
import Subtitle from "../../lib/platform/web/components/typography/Subtitle";
import Subtitle2 from "../../lib/platform/web/components/typography/Subtitle2";
import Center from "../../lib/platform/web/components/Center";
import Vertical from "../../lib/platform/web/components/Vertical";
import H1 from "../../lib/platform/web/components/typography/H1";
import Horizontal from "../../lib/platform/web/components/Horizontal";
import MePhoto from "./me";
import MediaQuery from "../../lib/platform/web/components/MediaQuery";

export default function HomePage(props) {
  return (
    <Container flex center bgColor="var(--sleepycloud)" margin="var(--m)">
      <Container margin="var(--m)">
        <Horizontal
          queries={[
            <MediaQuery
              query="@media only screen and (max-width: 1024px)"
              flexDirection="column"
            />,
          ]}
        >
          <Vertical
            center
            queries={[
              <MediaQuery
                query="@media only screen and (max-width: 1024px)"
                fontAlign="center"
              />,
            ]}
          >
            <H1>Hi, my</H1>

            <H1 marginBottom="var(--xl)">
              name is{" "}
              <Span
                highEmphasis
                padding="var(--m)"
                border="3px solid var(--sleepycloudEmphasis)"
              >
                Alejandro
              </Span>
            </H1>

            <Subtitle>
              I'm a <Span emphasis>software developer</Span> from Medellin,
              Colombia.
            </Subtitle>
          </Vertical>

          <Center>
            <Container margin="var(--xl)">
              <MePhoto
                size="420px"
                // margin="calc(var(--xl) * 2)"
                borderRadius="100%"
                overflow="hidden"
                border="13px solid var(--background)"
              />
            </Container>
          </Center>
        </Horizontal>
      </Container>
    </Container>
  );
}
