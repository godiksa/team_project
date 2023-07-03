import { useState, useRef } from 'react';

import { StyledButton, StyledUnorderedList } from './styles';

interface IDropdownItemProps {
  children: string;
}

const DropdownItem = ({ children }: IDropdownItemProps) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const toggleActive = () => {
    document
      .querySelectorAll('.dropdown-item')
      .forEach((x) =>
        anchorRef.current !== x ? x.classList.remove('active') : null
      );

    if (anchorRef.current) {
      anchorRef.current.classList.toggle('active');
    }
  };

  return (
    <li>
      <a
        ref={anchorRef}
        href='#'
        className='dropdown-item'
        onClick={toggleActive}
      >
        {children}
      </a>
    </li>
  );
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdowItems = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <StyledButton onClick={toggleDropdowItems}>
        Select <i className='fa-solid fa-angle-down'></i>
      </StyledButton>
      {isOpen && (
        <StyledUnorderedList>
          {/* later in li tag will  be inserted data that everything would be dynamically  */}
          <DropdownItem>Select item #1</DropdownItem>
          <DropdownItem>Select item #2</DropdownItem>
          <DropdownItem>Select item #3</DropdownItem>
          <DropdownItem>Select item #4</DropdownItem>
        </StyledUnorderedList>
      )}
    </div>
  );
};

export default Dropdown;
