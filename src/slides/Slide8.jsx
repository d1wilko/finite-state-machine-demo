import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  CodePane,
} from "spectacle";

const PromiseMachine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        INCREMENT: "loading",
      },
    },
    loading: {
      on: {
        RESOLVE: "idle",
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
    states: {
      idle: {
        on: {
          INCREMENT: "loading",
        },
      },
      loading: {
        on: {
          RESOLVE: "idle",
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
`;

const Slide8 = () => {
  return (
    <Slide>
      <Heading>Our finite state machine</Heading>
      <CodePane language="javascript">{codeString}</CodePane>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>current state + event = next state</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>But this is overly simplistic...</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default Slide8;
