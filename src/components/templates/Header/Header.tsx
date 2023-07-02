import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledHeaderNav,
  StyledHeader,
  StyledTogglerIcon,
  StyledBurgerContent,
  StyledLi,
} from './style';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDocumentClick = (event: any) => {
    const target = event.target;
    const isNavi = target.classList.contains('navi') || target.closest('.navi');
    const isSvg = target.tagName === 'svg';

    if (isNavi || isSvg) {
      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <StyledHeader>
        <StyledTogglerIcon onClick={handleDocumentClick}>
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
                shapeRendering='geometricPrecision'
                textRendering='geometricPrecision'
                imageRendering='optimizeQuality'
                fillRule='evenodd'
                clipRule='evenodd'
                viewBox='0 0 512 351.67'
              >
                <path
                  fillRule='nonzero'
                  d='M0 0h512v23.91H0V0zm0 327.76h512v23.91H0v-23.91zm0-163.88h512v23.91H0v-23.91z'
                />
              </svg>
            </div>
          )}
        </StyledTogglerIcon>
        <StyledBurgerContent
          onClick={isMenuOpen ? handleDocumentClick : undefined}
        >
          <nav>
            <StyledHeaderNav>
              <StyledLi>
                <Link className='titles' to={'/'} onClick={handleMenuLinkClick}>
                  Pagrindinis
                </Link>
              </StyledLi>
              <StyledLi>
                <Link
                  className='titles'
                  to={'/Atlyginimo_ir_mokesčių_skaičiuoklė'}
                  onClick={handleMenuLinkClick}
                >
                  Atlyginimo ir mokesčių skaičiuoklė
                </Link>
              </StyledLi>
              <StyledLi>
                <Link
                  className='titles'
                  to={'/Individualios_veiklos_mokesčių_skaičiuoklė'}
                  onClick={handleMenuLinkClick}
                >
                  Individualios veiklos mokesčių skaičiuoklė
                </Link>
              </StyledLi>
              <StyledLi>
                <Link
                  className='titles'
                  to={'/PVM_skaičiuoklė'}
                  onClick={handleMenuLinkClick}
                >
                  PVM skaičiuoklė
                </Link>
              </StyledLi>
              <StyledLi>
                <Link
                  className='titles'
                  to={'/Valiutų_skaičiuoklė'}
                  onClick={handleMenuLinkClick}
                >
                  Valiutų skaičiuoklė
                </Link>
              </StyledLi>
              <StyledLi>
                <Link
                  className='titles'
                  to={'/Suma_žodžiais'}
                  onClick={handleMenuLinkClick}
                >
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
