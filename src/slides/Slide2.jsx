import { useState } from "react";
import { Slide, Heading, CodePane, FlexBox } from "spectacle";

const incrementCount = (currCount) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(currCount + 1);
    }, 2000);
  });
};

const DelayedCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const newCount = await incrementCount(count);
    setCount(newCount);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

const DelayedCounterString = `
  const incrementCount = (currCount) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(currCount + 1);
      }, 2000);
    });
  };
  
  const DelayedCounter = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = async () => {
      const newCount = await incrementCount(count);
      setCount(newCount);
    };
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  };
`;

const Slide2 = () => {
  return (
    <Slide>
      <Heading>Building stateful components with React hooks</Heading>
      <FlexBox flexDirection="column" height="60%">
        <DelayedCounter />
        <CodePane language="javascript">{DelayedCounterString}</CodePane>
      </FlexBox>
    </Slide>
  );
};

export default Slide2;
