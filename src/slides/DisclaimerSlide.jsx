import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Link,
} from "spectacle";

const DisclaimerSlide = () => {
  return (
    <Slide>
      <Heading>Disclaimer</Heading>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>
            This presentation is based HEAVILY on Paul McBride's NI Dev Conf
            presentation
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>
            Infinitely better JavaScript with Finite State Machines and State
            Charts
          </ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            <Link>https://www.youtube.com/watch?v=sXeFfCFntOw</Link>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default DisclaimerSlide;
