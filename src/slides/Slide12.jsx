import { Slide, Heading, CodePane, FlexBox } from "spectacle";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { inspect } from "@xstate/inspect";

inspect({ url: "https://statecharts.io/inspect", iframe: false });

const incrementCount = ({ count }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.round(Math.random() < 0.5) === 1) {
        res(count + 1);
      } else {
        rej();
      }
    }, 2000);
  });
};

const machine = Machine({
  initial: "idle",
  context: { count: 0 },
  states: {
    idle: { on: { INCREMENT: "loading" } },
    loading: {
      invoke: {
        src: incrementCount,
        onDone: {
          target: "idle",
          actions: assign({ count: (context, event) => event.data }),
        },
        onError: "error",
      },
    },
    error: {},
  },
});

const DelayedCounter = () => {
  const [current, send] = useMachine(machine, { devTools: true });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <h1>{current.matches("error") ? "ERROR!" : current.context.count}</h1>
      <button
        onClick={() => send("INCREMENT")}
        disabled={current.matches("error") || current.matches("loading")}
      >
        Increment
      </button>
    </div>
  );
};

const DelayedCounterString = `
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { inspect } from "@xstate/inspect";

inspect({ url: "https://statecharts.io/inspect", iframe: false });

const incrementCount = ({ count }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.round(Math.random() < 0.5) === 1) {
        res(count + 1);
      } else {
        rej();
      }
    }, 2000);
  });
};

const machine = Machine({
  initial: "idle",
  context: { count: 0 },
  states: {
    idle: { on: { INCREMENT: "loading" } },
    loading: {
      invoke: {
        src: incrementCount,
        onDone: {
          target: "idle",
          actions: assign({ count: (context, event) => event.data }),
        },
        onError: "error",
      },
    },
    error: {},
  },
});

const DelayedCounter = () => {
  const [current, send] = useMachine(machine, { devTools: true });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <h1>{current.matches("error") ? "ERROR!" : current.context.count}</h1>
      <button
        onClick={() => send("INCREMENT")}
        disabled={current.matches("error") || current.matches("loading")}
      >
        Increment
      </button>
    </div>
  );
};
`;

const Slide12 = () => {
  return (
    <Slide>
      <Heading>XState dev tools</Heading>
      <FlexBox flexDirection="column" height="70%">
        <DelayedCounter />
        <CodePane language="javascript">{DelayedCounterString}</CodePane>
      </FlexBox>
    </Slide>
  );
};

export default Slide12;
