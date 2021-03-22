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
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const newCount = await incrementCount(count);
    setCount(newCount);
    setIsLoading(false);
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
      <button onClick={handleClick} disabled={isLoading}>
        Increment
      </button>
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
    const [isLoading, setIsLoading] = useState(false);
  
    const handleClick = async () => {
      setIsLoading(true);
      const newCount = await incrementCount(count);
      setCount(newCount);
      setIsLoading(false);
    };
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick} disabled={isLoading}>
          Increment
        </button>
      </div>
    );
  };
`;

const Slide3 = () => {
  return (
    <Slide>
      <Heading>Adding Loading</Heading>
      <FlexBox flexDirection="column" height="70%">
        <DelayedCounter />
        <CodePane language="javascript">{DelayedCounterString}</CodePane>
      </FlexBox>
    </Slide>
  );
};

export default Slide3;
