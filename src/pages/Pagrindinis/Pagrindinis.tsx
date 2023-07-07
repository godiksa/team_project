import { StyledLi, StyledMainWrapper, StyledUl } from './styles';
import { Link } from 'react-router-dom';

const Pagrindinis = () => {
  return (
    <StyledMainWrapper>
      <StyledUl>
        <StyledLi>
          <Link className='titles' to={'/Atlyginimo_ir_mokesčių_skaičiuoklė'}>
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
            PVM Skaičiuoklė
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
      </StyledUl>
    </StyledMainWrapper>
  );
};

export default Pagrindinis;
