import styled, { CSSProperties } from "styled-components";

export default styled.div<CSSProperties>`
  display: flex;
  margin-top: ${(props) => props.marginTop || 0};
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
`;
