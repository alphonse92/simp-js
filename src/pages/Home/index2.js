import React, { useState } from "react";

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
import Pseudo from "../../lib/platform/web/components/Pseudo";
import MediaQuery from "../../lib/platform/web/components/MediaQuery";
import css from "./styles.module.css";

export default function HomePage(props) {
  const colors = ["red", "white", "yellow", "blue", "green"];
  const [colorIdx, setColorIdx] = useState(0);
  const onChangeColor = () => setColorIdx((current) => current + 1);

  const selectedColor = colors[colorIdx % colors.length];
  const selectedBgColor = colors[(colorIdx + 1) % colors.length];
  const selectedHoverBgColor = colors[(colorIdx + 2) % colors.length];

  return (
    <Container
      flex
      center
      bgColor="var(--sleepycloud)"
      margin="var(--m)"
      className={css.blueBorder}
    >
      <Center>
        <Horizontal
          justifyContent="space-between"
          queries={[
            <MediaQuery
              query="@media only screen and (max-width: 1200px)"
              flexDirection="column"
            />,
          ]}
        >
          <Vertical
            center
            queries={[
              <MediaQuery
                query="@media only screen and (max-width: 1200px)"
                border="1px solid red"
                color="green"
              />,
            ]}
            pseudo={[<Pseudo name=":hover" border="1px solid black" />]}
          >
            <H1>Hi, my</H1>

            <H1 pseudo={[<Pseudo name=":hover" color="blue" />]}>
              name is{" "}
              <Span
                highEmphasis
                pseudo={[<Pseudo name=":hover" color="red" />]}
              >
                Alejandro
              </Span>
            </H1>

            <Subtitle>I'm a software developer from Colombia. </Subtitle>
            <Subtitle2>I'm a software developer from Colombia. </Subtitle2>
            <Text
              color={selectedColor}
              bgColor={selectedBgColor}
              pseudo={[<Pseudo name=":hover" bgColor={selectedHoverBgColor} />]}
            >
              I'm a software developer from Colombia.{" "}
            </Text>
            <button onClick={onChangeColor}>change color</button>
          </Vertical>

          <Vertical center>
            <MePhoto
              size="420px"
              margin="calc(var(--xl) * 2)"
              borderRadius="100%"
              overflow="hidden"
              border="13px solid var(--background)"
            />
          </Vertical>
        </Horizontal>
      </Center>
    </Container>
  );
}
