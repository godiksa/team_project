import styled from 'styled-components';
import ThemeProvider from '../../../shared/theme/ThemeProvider';

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.palette.white};
  border: 1px solid ${(props) => props.theme.palette.shades.greyLight};
  border-radius: 0.375em;
  color: ${(props) => props.theme.palette.dark};
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.5;
  height: 2.5em;

  cursor: pointer;

  i {
    margin-left: 0.375em;
    color: ${(props) => props.theme.palette.link.main};
  }
`;

export const StyledUnorderedList = styled.ul`
  list-style: none;

  position: absolute;

  background-color: ${(props) => props.theme.palette.white};
  border-radius: 0.375em;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  a {
    text-decoration: none;
    display: block;
    font-size: 0.875rem;
    line-height: 1.5;
    color: ${(props) => props.theme.palette.shades.greyDark};
    padding: 0.375rem 1rem;
  }

  a:hover {
    background-color: ${(props) => props.theme.palette.shades.whiteTer};
    color: #0a0a0a;
  }

  a.active {
    background-color: ${(props) => props.theme.palette.link.main};
    color: ${(props) => props.theme.palette.white};
  }
`;
