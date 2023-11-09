import styled from "styled-components";
import PERSONIMG from "@/assets/person.svg";

function OptionProfile() {
  return (
    <Container>
      <img src={PERSONIMG} />
    </Container>
  );
}

export default OptionProfile;

const Container = styled.div`
  display: inline-block;

  padding: 2.4rem;
  border-radius: 10rem;

  background-color: var(--Gray3);
`;
