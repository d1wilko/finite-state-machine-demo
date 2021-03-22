import { Slide, Heading, UnorderedList, Appear, ListItem } from "spectacle";

const Slide5 = () => {
  return (
    <Slide>
      <Heading>What if we added further functionality?</Heading>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>e.g. Cancellation logic</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default Slide5;
