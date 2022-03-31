import React, { useState } from "react";
import Image from "next/image";
import * as D from "./styles";
import IconChevronDown from "../../assets/icons/chevron-down.svg";

const options = ["Hardware", "Periféricos", "Games"];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <D.Main>
      <D.DropDownContainer>
        <D.DropDownHeader onClick={toggle}>
          <D.Title>{selectedOption || "Todos departamentos"}</D.Title>
          <Image src={IconChevronDown} alt='Icone Select' />
        </D.DropDownHeader>
        {isOpen && (
          <D.DropDownListContainer>
            <D.DropDownList>
              {options.map((option) => (
                <D.ListItem
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  <D.Text>{option}</D.Text>
                </D.ListItem>
              ))}
            </D.DropDownList>
          </D.DropDownListContainer>
        )}
      </D.DropDownContainer>
    </D.Main>
  );
}
