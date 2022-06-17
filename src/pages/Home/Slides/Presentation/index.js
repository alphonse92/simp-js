import React from "react";

import Container from "../../../../lib/platform/web/components/Container";
import Span from "../../../../lib/platform/web/components/typography/Span";
import Subtitle from "../../../../lib/platform/web/components/typography/Subtitle";
import Vertical from "../../../../lib/platform/web/components/Vertical";
import H1 from "../../../../lib/platform/web/components/typography/H1";
import Horizontal from "../../../../lib/platform/web/components/Horizontal";
import MePhoto from "./me";
import MediaQuery from "../../../../lib/platform/web/components/MediaQuery";
import Pseudo from "../../../../lib/platform/web/components/Pseudo";

import Moonlight from "./moonlight.svg";
import BusStop from "./together.svg";
import Image from "../../../../components/Image/Img";

export default function PresentationSlide({ mouseMovement, ...props }) {
  const offset = 2;
  const mouseMovementOffsetX = mouseMovement ? mouseMovement.x * offset : 0;
  const mouseMovementOffsetY = mouseMovement ? mouseMovement.y * offset : 0;
  const elevationTop = -17 + mouseMovementOffsetY;
  const elevationLeft = -17 + mouseMovementOffsetX;

  return (
    <Container flex bgColor="var(--sleepycloud)" width="100%">
      <Horizontal
        width="100%"
        justifyContent="center"
        queries={[
          <MediaQuery
            query="@media only screen and (max-width: 1024px)"
            flexDirection="column-reverse"
          />,
        ]}
      >
        <Horizontal
          center
          position="relative"
          width="45%"
          queries={[
            <MediaQuery
              query="@media only screen and (max-width: 1024px)"
              textAlign="center"
              width="100%"
            />,
          ]}
        >
          <Vertical center width="75%" zIndex={2}>
            <Vertical>
              <Horizontal>
                <H1
                  marginBottom="var(--xl)"
                  lineHeight="200%"
                  queries={[
                    <MediaQuery
                      query="@media only screen and (max-width: 768px)"
                      lineHeight="150%"
                    />,
                  ]}
                >
                  Hi, my name is{" "}
                  <Span
                    lineHeight="initial"
                    highEmphasis
                    position="relative"
                    display="inline-block"
                    marginLeft={`${elevationLeft * -1}px`}
                    pseudo={[<Pseudo name="::after" content="'Alejandro'" />]}
                    queries={[
                      <MediaQuery
                        query="@media only screen and (max-width: 768px)"
                        top="0px"
                        left="0px"
                        padding="0px"
                        margin="0px"
                      />,
                    ]}
                  >
                    <Span
                      width="100%"
                      height="100%"
                      position="absolute"
                      zIndex={2}
                      top={`${elevationTop * 2}px`}
                      left={`${elevationLeft * 2}px`}
                      bgColor="var(--sleepycloud)"
                      border="3px solid var(--sleepycloudEmphasis)"
                      padding="var(--xs)"
                      queries={[
                        <MediaQuery
                          query="@media only screen and (max-width: 768px)"
                          top="0px"
                          left="0px"
                          padding="0px"
                          margin="0px"
                        />,
                      ]}
                    >
                      Alejandro
                    </Span>

                    <Span
                      width="100%"
                      height="100%"
                      position="absolute"
                      top={`${elevationTop}px`}
                      left={`${elevationLeft}px`}
                      bgColor="var(--sleepycloud)"
                      padding="var(--xs)"
                      zIndex={1}
                      queries={[
                        <MediaQuery
                          query="@media only screen and (max-width: 768px)"
                          display="none"
                        />,
                      ]}
                    />

                    <Span
                      width="100%"
                      height="100%"
                      position="absolute"
                      bgColor="var(--sleepycloudEmphasis)"
                      padding="var(--xs)"
                      queries={[
                        <MediaQuery
                          query="@media only screen and (max-width: 768px)"
                          display="none"
                        />,
                      ]}
                    />
                  </Span>
                </H1>
              </Horizontal>

              <Subtitle>
                I'm a <Span highEmphasis>software developer</Span> from
                Medellin, Colombia.
              </Subtitle>
            </Vertical>
          </Vertical>
          <Vertical
            height="100%"
            width="100%"
            position="absolute"
            zIndex={1}
            justifyContent="flex-end"
          >
            <Horizontal center>
              <Image src={BusStop} opacity={0.3} />
            </Horizontal>
          </Vertical>
        </Horizontal>

        <Horizontal
          center
          position="relative"
          width="65%"
          bgColor="var(--sleepycloudEmphasis)"
          queries={[
            <MediaQuery
              query="@media only screen and (max-width: 1024px)"
              textAlign="center"
              width="100%"
            />,
          ]}
        >
          <Vertical center>
            <MePhoto
              queries={[
                <MediaQuery
                  query="@media only screen and (max-width: 768px)"
                  borderRadius="0%"
                  margin="var(--none)"
                />,
              ]}
              size="420px"
              margin="var(--xl)"
              borderRadius="100%"
              overflow="hidden"
              border="13px solid var(--sleepycloudShadow)"
              zIndex={1}
            />
          </Vertical>

          <Container
            height="100%"
            width="100%"
            position="absolute"
            bgImage={Moonlight}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPosition="bottom"
          />
        </Horizontal>
      </Horizontal>
    </Container>
  );
}
