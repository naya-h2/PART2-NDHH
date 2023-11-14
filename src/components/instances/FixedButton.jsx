import Button from "@/components/commons/Button.jsx";
import styled from "styled-components";
import { FONT18B } from "@/styles/FontStyles.js";
import { DeviceSize } from "@/styles/DeviceSize.js";
import { useNavigate } from "react-router-dom";

function FixedButton({ children, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Container onClick={handleClick}>
      <Button type="primary" height="xl">
        <ButtonText>{children}</ButtonText>
      </Button>
    </Container>
  );
}

export default FixedButton;

const ButtonText = styled.p`
  width: 23.2rem;

  ${FONT18B}

  @media (max-width: ${DeviceSize.pc}) {
    width: calc(100vw - 9.6rem);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 4rem;

  @media (max-width: ${DeviceSize.pc}) {
    bottom: 0.5rem;
  }
`;
