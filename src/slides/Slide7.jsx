import { Slide, Heading, OrderedList, Appear, ListItem } from "spectacle";

const Slide7 = () => {
  return (
    <Slide>
      <Heading>The 5 rules of finite state machines</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>There is a finite number of states</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>There is a finite number of events</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>There is an initial state</ListItem>
        </Appear>
        <Appear elementNum={3}>
          <ListItem>
            A transition function that determines a new state based on current
            state and an event
          </ListItem>
        </Appear>
        <Appear elementNum={4}>
          <ListItem>A (possibly empty) set of final states</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
  );
};

export default Slide7;
