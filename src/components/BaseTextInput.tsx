import styled from "styled-components";

export default styled.input`
  padding: 0.5rem;
  height: 2.25rem;
  background: #ffffff;
  min-width: 12.5rem;
  border-radius: 0.5rem;
  border: none;
  transition: all 300ms;
  font-size: 0.875rem;

  :focus {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 16px 100px 0px;
    border: none;
    outline: none;
  }
`;
