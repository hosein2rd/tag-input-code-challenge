import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Label } from "../types";

const ListContainer = styled.ul<{ show: boolean }>`
  list-style-type: none;
  margin: ${(props) => (props.show ? "0.5rem" : "0")} 0;
  padding: 0;
  background: #ffffff;
  position: absolute;
  border-radius: 0.5rem;
  left: 0;
  right: 0;
  margin-right: 1rem;
  transition: all 300ms;
  max-height: 9rem;
  overflow: auto;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  box-shadow: rgba(17, 12, 46, 0.15) 0px 16px 100px 0px;
`;

const ListItem = styled.li<{ active?: boolean }>`
  color: #5a6474;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  text-align: left;
  cursor: pointer;
  transition: all 300ms;
  background: ${(props) => (props.active ? "#f8f8f8" : "transparent")};
  border-radius: 0.25rem;

  :hover {
    background: #f8f8f8;
  }
`;

const List = ({
  show = false,
  options,
  onSelect,
  activeIndex,
}: {
  show?: boolean;
  options: Label[];
  onSelect: (obj: Label, index: number) => void;
  activeIndex: number;
}) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: 20 * activeIndex, behavior: "smooth" });
  }, [activeIndex]);

  return (
    <ListContainer ref={ref} show={show}>
      {options.map((option, index) => (
        <ListItem
          active={index === activeIndex}
          key={option.id}
          onClick={() => onSelect(option, index)}
        >
          {option.label}
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default List;
