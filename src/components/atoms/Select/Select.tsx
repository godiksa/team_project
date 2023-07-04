import React, { useState } from 'react';
import { StyledButton, StyledUnorderedList } from './styles';

interface IDropdownItem {
  id: string;
  label: string;
}

interface DropdownProps {
  options: IDropdownItem[];
}

interface DropdownItemProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdownItems = () => setIsOpen((prev) => !prev);

  const handleItemClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={toggleDropdownItems}>
        {selectedOption ? selectedOption : 'Select'}
        <i className='fa-solid fa-angle-down'></i>
      </StyledButton>
      {isOpen && (
        <StyledUnorderedList>
          {options.map((option) => (
            <DropdownItem
              key={option.id}
              onClick={() => handleItemClick(option.label)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </StyledUnorderedList>
      )}
    </div>
  );
};

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <li>
      <a href='#' className='dropdown-item' onClick={onClick}>
        {children}
      </a>
    </li>
  );
};

export default Dropdown;
