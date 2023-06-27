import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledHeaderNav,
  StyledHeader,
  StyledTogglerIcon,
  StyledBurgerContent,
  StyledSpan,
  StyledLi,
} from './style';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTogglerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <StyledTogglerIcon onClick={handleTogglerClick}>
        {isMenuOpen ? 'X' : 'Menu'}
      </StyledTogglerIcon>
      <StyledBurgerContent isOpen={isMenuOpen}>
        <nav>
          <StyledHeaderNav>
            <StyledLi>
              <Link className='titles' to={'/'}>
                Pagrindinis<StyledSpan>-</StyledSpan>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                className='titles'
                to={'/Atlyginimo_ir_mokesčių_skaičiuoklė'}
              >
                Atlyginimo ir mokesčių skaičiuoklė
                <StyledSpan>-</StyledSpan>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                className='titles'
                to={'/Individualios_veiklos_mokesčių_skaičiuoklė'}
              >
                Individualios veiklos mokesčių skaičiuoklė
                <StyledSpan>-</StyledSpan>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link className='titles' to={'/PVM_skaičiuoklė'}>
                PVM skaičiuoklė<StyledSpan>-</StyledSpan>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link className='titles' to={'/Valiutų_skaičiuoklė'}>
                Valiutų skaičiuoklė<StyledSpan>-</StyledSpan>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link className='titles' to={'/Suma_žodžiais'}>
                Suma žodžiais
              </Link>
            </StyledLi>
          </StyledHeaderNav>
        </nav>
      </StyledBurgerContent>
    </StyledHeader>
  );
};

export default Header;
