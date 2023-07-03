import { useState, useRef, useEffect } from 'react';

import { StyledButton, StyledUnorderedList } from './styles';

interface IDropdownItemProps {
  children: string;
  onClick: () => void;
}

const DropdownItem = ({ children, onClick }: IDropdownItemProps) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    onClick();
  };

  return (
    <li>
      <a
        ref={anchorRef}
        href='#'
        className='dropdown-item'
        onClick={handleClick}
      >
        {children}
      </a>
    </li>
  );
};

const Dropdown = () => {
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
          {/* later in li tag will  be inserted data that everything would be dynamically  */}
          <DropdownItem onClick={() => handleItemClick('Select item #1')}>
            Select item #1
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick('Select item #2')}>
            Select item #2
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick('Select item #3')}>
            Select item #3
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick('Select item #4')}>
            Select item #4
          </DropdownItem>
        </StyledUnorderedList>
      )}
    </div>
  );
};

export default Dropdown;
