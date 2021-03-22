import { Slide, Heading, UnorderedList, Appear, ListItem } from "spectacle";

const Slide6 = () => {
  return (
    <Slide>
      <Heading>What is a finite state machine?</Heading>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>It is a mathematical model of computation 🧮</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>It is made up of states, events and transitions</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>Finite state machines have 5 rules 📜</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default Slide6;
