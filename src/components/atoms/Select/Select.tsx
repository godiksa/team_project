import React, { useState } from 'react';
import { StyledButton, StyledUnorderedList } from './styles';

interface IDropdownItem {
  id: string;
  label: string;
}

interface DropdownProps {
  options: IDropdownItem[];
  value: string;
  onChange: (value: string) => void;
}

interface DropdownItemProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownItems = () => setIsOpen((prev) => !prev);

  const handleItemClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={toggleDropdownItems}>
        {value ? value : 'Select'}
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
