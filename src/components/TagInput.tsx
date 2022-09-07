import BaseTextInput from "./BaseTextInput";
import List from "./List";
import { Label } from "../types";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import TagContainer from "./TagContainer";
import { getLabels } from "../api/labels";

const Container = styled.div`
  position: relative;
  width: 12.5rem;
  margin-top: 1rem;
`;

const TagInput = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOptions] = useState<Label[]>([]);
  const [tags, setTags] = useState<Label[]>([]);
  const [value, setValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const addTag = (tag: Label) => setTags([...tags, tag]);

  const resetInput = () => {
    setValue("");
    setShowDropdown(false);
  };

  const createTag = {
    id: value.toLowerCase().replaceAll(" ", "-"),
    label: value,
  };

  const increaseActiveIndex = () =>
    options.length - 1 > activeIndex
      ? setActiveIndex(activeIndex + 1)
      : setActiveIndex(0);

  const decreaseActiveIndex = () =>
    0 < activeIndex
      ? setActiveIndex(activeIndex - 1)
      : setActiveIndex(options.length - 1);

  useEffect(() => {
    getLabels(value).then((labels) => {
      setActiveIndex(0);

      setOptions(labels);

      setShowDropdown(labels.length !== 0);
    });
  }, [value]);

  const onKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case ",": {
        addTag(createTag);
        resetInput();
        e.preventDefault();
        break;
      }
      case "Enter": {
        if (showDropdown) {
          addTag(options[activeIndex]);
          resetInput();
          return;
        }

        if (!value) return;

        addTag(createTag);
        resetInput();

        break;
      }
      case "ArrowDown": {
        increaseActiveIndex();
        break;
      }
      case "ArrowUp": {
        decreaseActiveIndex();
        break;
      }
      case "Escape": {
        setShowDropdown(false);
        break;
      }
      default:
        break;
    }
  };

  return (
    <Container>
      <BaseTextInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Tag..."
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
        onKeyDown={onKeyPress}
      />
      <List
        activeIndex={activeIndex}
        onSelect={(option) => {
          addTag(option);
          setValue("");
        }}
        show={showDropdown}
        options={options}
      />
      <TagContainer marginTop="0.5rem">
        {tags.map((tag, i) => (
          <Tag key={i}>{tag.label}</Tag>
        ))}
      </TagContainer>
    </Container>
  );
};

export default TagInput;
