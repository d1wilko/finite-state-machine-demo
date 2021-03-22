import { Slide, Heading, UnorderedList, Appear, ListItem } from "spectacle";

const FinalFinalSlide = () => {
  return (
    <Slide>
      <Heading>Final final thoughts</Heading>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>Thanks for listening to me ramble! 🤬</ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Any questions? 🙋</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default FinalFinalSlide;
