import { Deck, FlexBox, Box, FullScreen, Progress } from "spectacle";
import {
  DisclaimerSlide,
  Slide1,
  Slide10,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide11,
  Slide12,
  FinalSlide,
  FinalFinalSlide,
} from "./slides";

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => {
  return (
    <Deck transitionEffect="slide" template={template}>
      <Slide1 />
      <DisclaimerSlide />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
      <Slide11 />
      <Slide12 />
      <FinalSlide />
      <FinalFinalSlide />
    </Deck>
  );
};

export default Presentation;
