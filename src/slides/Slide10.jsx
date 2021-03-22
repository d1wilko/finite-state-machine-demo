import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  CodePane,
} from "spectacle";

const incrementCount = () => {};

const PromiseMachine = {
  initial: "idle",
  context: {
    count: 0,
  },
  states: {
    idle: {
      on: {
        INCREMENT: {
          target: "loading",
          condition: (context, event) => context.count <= 5,
        },
      },
    },
    loading: {
      on: {
        RESOLVE: {
          target: "idle",
          actions: [
            (context, event) => (context.count = incrementCount(context.count)),
          ],
        },
        REJECT: "error",
      },
    },
    error: {},
  },
};

const transition = (state, event) => {
  return PromiseMachine.states[state].on[event];
};

let currentState = PromiseMachine.initial;

const send = (event) => {
  currentState = transition(currentState, event);
};

send("INCREMENT");

const codeString = `
  const PromiseMachine = {
    initial: "idle",
    context: {
      count: 0,
    },
    states: {
      idle: {
        on: {
          INCREMENT: {
            target: "loading",
            condition: (context, event) => context.count <= 5,
          },
        },
      },
      loading: {
        on: {
          RESOLVE: {
            target: "idle",
            actions: [(context, event) => incrementCount(context.count)],
          },
          REJECT: "error",
        },
      },
      error: {},
    },
  };
  `;

const Slide10 = () => {
  return (
    <Slide>
      <Heading>Our finite state chart</Heading>
      <CodePane language="javascript">{codeString}</CodePane>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>current state + event = next state + effects</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>But this logic is hard to write yourself</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default Slide10;
