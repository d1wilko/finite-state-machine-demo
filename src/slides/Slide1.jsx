import { Slide, Heading, OrderedList, Appear, ListItem } from "spectacle";

const Slide1 = () => {
  return (
    <Slide>
      <Heading>Finite State machines in React</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>Building stateful components with React hooks</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>What is a finite state machine? ⚙️</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>What is a finite state chart? 📊</ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem>XState 🙅</ListItem>
        </Appear>
        <Appear elementNum={4}>
          <ListItem>Building stateful components with XState</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
  );
};

export default Slide1;
