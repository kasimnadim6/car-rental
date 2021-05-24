import logo from '../assets/img/vahak.png';
import styled from "styled-components";

export const Header = () => {
    return (
        <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
    )
};


const Logo = styled.div`
  img {
    width: 6rem;
    height: 6rem;
  }
`;
