import React from "react";
import ContentLoader from "react-content-loader";
import { styled } from "styled-components";

const Skeleton = (props) => {
  const cardWidth = 275;
  const cardHeight = 260;
  const gap = 20;
  const br = 20; // border radius

  const x1 = 0;
  const x2 = x1 + cardWidth + gap;
  const x3 = x2 + cardWidth + gap;
  const x4 = x3 + cardWidth + gap;

  const y1 = 0;
  const y2 = y1 + 16 + 36;
  const y3 = y2 + cardHeight + 50;
  const y4 = y3 + 16 + 36;

  return (
    <Container>
      <ContentLoader viewBox="0 0 1160 820" height="100%" width="100%" {...props}>
        <rect x={x1} y={y1} rx="0" ry="0" width="200" height="36" />
        <rect x={x1} y={y2} rx={br} ry={br} width={cardWidth} height={cardHeight} />

        <rect x={x2} y={y2} rx={br} ry={br} width={cardWidth} height={cardHeight} />

        <rect x={x3} y={y2} rx={br} ry={br} width={cardWidth} height={cardHeight} />

        <rect x={x4} y={y2} rx={br} ry={br} width={cardWidth} height={cardHeight} />

        <rect x={x1} y={y3} rx="0" ry="0" width="200" height="36" />
        <rect x={x1} y={y4} rx={br} ry={br} width={cardWidth} height={cardHeight} />

        <rect x={x2} y={y4} rx={br} ry={br} width={cardWidth} height={cardHeight} />

        <rect x={x3} y={y4} rx={br} ry={br} width={cardWidth} height={cardHeight} />

        <rect x={x4} y={y4} rx={br} ry={br} width={cardWidth} height={cardHeight} />
      </ContentLoader>
    </Container>
  );
};

const Container = styled.div`
  width: 1160px;
  margin: auto;

  position: relative;
  top: 50px;
`;

export default Skeleton;
