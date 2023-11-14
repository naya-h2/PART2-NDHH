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
        {/* <ButtonText>{children}</ButtonText> */}
        {children}
      </Button>
    </Container>
  );
}

export default FixedButton;

const Container = styled.div`
  width: 28rem;

  position: fixed;
  bottom: 7rem;

  @media (max-width: ${DeviceSize.pc}) {
    bottom: 2.4rem;
  }
`;

// const ButtonText = styled.p`
//   width: 23.2rem;

//   ${FONT18B}

//   @media (max-width: ${DeviceSize.pc}) {
//     width: calc(100vw - 15rem);
//   }

//   @media (max-width: ${DeviceSize.mobile}) {
//     width: calc(100vw - 9.2rem);
//   }
// `;
