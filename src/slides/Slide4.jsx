import { useState } from "react";
import { Slide, Heading, CodePane, FlexBox } from "spectacle";

const incrementCount = (currCount) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.round(Math.random() < 0.5) === 1) {
        res(currCount + 1);
      } else {
        rej();
      }
    }, 2000);
  });
};

const DelayedCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const newCount = await incrementCount(count);
      setCount(newCount);
    } catch (err) {
      setIsError(true);
    }
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
      <h1>{isError ? "ERROR!" : count}</h1>
      <button onClick={handleClick} disabled={isError || isLoading}>
        Increment
      </button>
    </div>
  );
};

const DelayedCounterString = `
const incrementCount = (currCount) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.round(Math.random() < 0.5) === 1) {
          res(currCount + 1);
        } else {
          rej();
        }
      }, 2000);
    });
  };
  
  const DelayedCounter = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    const handleClick = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const newCount = await incrementCount(count);
        setCount(newCount);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
  
    return (
      <div>
        <h1>{isError ? "ERROR!" : count}</h1>
        <button onClick={handleClick} disabled={isLoading}>
          Increment
        </button>
      </div>
    );
  };
`;

const Slide4 = () => {
  return (
    <Slide>
      <Heading>Adding Error handling</Heading>
      <FlexBox flexDirection="column" height="70%">
        <DelayedCounter />
        <CodePane language="javascript">{DelayedCounterString}</CodePane>
      </FlexBox>
    </Slide>
  );
};

export default Slide4;
