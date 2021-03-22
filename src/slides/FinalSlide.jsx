import { Slide, Heading, UnorderedList, Appear, ListItem } from "spectacle";

const FinalSlide = () => {
  return (
    <Slide>
      <Heading>Final thoughts</Heading>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>Do I think state charts in react SHOULD catch on?</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Yes 😺</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>Do I think state charts in react WILL catch on?</ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem>No, not in the mainstream 😿</ListItem>
        </Appear>
        <Appear elementNum={4}>
          <ListItem>
            Writing functional components with react hooks is quick and
            satisfying - but can get messy as logic is added 🗑️
          </ListItem>
        </Appear>
        <Appear elementNum={5}>
          <ListItem>
            XState takes a bit more upfront thought and boilerplate, but I am
            confident it is much cleaner to extend! 🧹
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default FinalSlide;
