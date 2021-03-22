import { Slide, Heading, UnorderedList, Appear, ListItem } from "spectacle";

const Slide9 = () => {
  return (
    <Slide>
      <Heading>What is a finite state chart?</Heading>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>Like an extended state machine</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>It has extended state - known as context</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>It can have guarded transitions</ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem>
            Transitions can have side effects - known as actions
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default Slide9;
