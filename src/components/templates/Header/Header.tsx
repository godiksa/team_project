import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledHeaderNav,
  StyledHeader,
  StyledTogglerIcon,
  StyledBurgerContent,
  StyledLi,
} from './style';
import DeleteButton from '../../atoms/DeleteButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTogglerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledTogglerIcon onClick={handleTogglerClick}>
          {isMenuOpen ? (
            <div className='navi'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#000000'
                width='15px'
                height='15px'
                viewBox='0 0 256 256'
                id='Flat'
              >
                <path d='M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z' />
              </svg>
            </div>
          ) : (
            <div className='navi'>
              <svg
                className='bul-svg'
                xmlns='http://www.w3.org/2000/svg'
                shape-rendering='geometricPrecision'
                text-rendering='geometricPrecision'
                image-rendering='optimizeQuality'
                fill-rule='evenodd'
                clip-rule='evenodd'
                viewBox='0 0 512 351.67'
              >
                <path
                  fill-rule='nonzero'
                  d='M0 0h512v23.91H0V0zm0 327.76h512v23.91H0v-23.91zm0-163.88h512v23.91H0v-23.91z'
                />
              </svg>
            </div>
          )}
        </StyledTogglerIcon>
        <StyledBurgerContent isOpen={isMenuOpen}>
          <nav>
            <StyledHeaderNav>
              <StyledLi>
                <Link className='titles' to={'/'}>
                  Pagrindinis
                </Link>
              </StyledLi>
              <StyledLi>
                <Link
                  className='titles'
                  to={'/Atlyginimo_ir_mokesčių_skaičiuoklė'}
                >
                  Atlyginimo ir mokesčių skaičiuoklė
                </Link>
              </StyledLi>
              <StyledLi>
                <Link
                  className='titles'
                  to={'/Individualios_veiklos_mokesčių_skaičiuoklė'}
                >
                  Individualios veiklos mokesčių skaičiuoklė
                </Link>
              </StyledLi>
              <StyledLi>
                <Link className='titles' to={'/PVM_skaičiuoklė'}>
                  PVM skaičiuoklė
                </Link>
              </StyledLi>
              <StyledLi>
                <Link className='titles' to={'/Valiutų_skaičiuoklė'}>
                  Valiutų skaičiuoklė
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
    </>
  );
};

export default Header;
