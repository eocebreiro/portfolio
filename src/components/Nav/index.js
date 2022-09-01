import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { handleColorType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const Nav = styled.nav`
  display: flex;
  padding: 0 2rem;
  flex-wrap: wrap;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1a1a1a;
  width: 100%;
  position: fixed;
  top: 0px;
  background: rgba(40, 40, 40, 0.95);
  z-index: 1200;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`;

export const Logo = styled(HashLink)`
  text-decoration: none;
  font-size: 1.75rem;
  color: white;
  letter-spacing: 3.5px;

  span {
    color: ${handleColorType("primary")};
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${device.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 49px;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    background: rgba(40, 40, 40, 0.95);
    max-height: ${(props) => (props.isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
    & li:first-child {
      border-top: 1px solid #444;
    }
    & li:last-child {
      border-bottom: none;
    }
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  padding: 0.25rem 2rem;
  @media ${device.laptop} {
    padding: 0.25rem 1rem;
  }
  @media ${device.tablet} {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #444;
  }
`;

export const MenuLink = styled(HashLink)`
  text-decoration: none;
  color: ${(props) => (props.active ? handleColorType(props.color) : "white")};
  border-bottom: ${(props) => props.active && "1.5px solid white"};
  transition: all 0.1s ease;

  &:hover {
    color: ${(props) => handleColorType(props.color)};
    border-bottom: 1.5px solid white;
  }
`;

export const MenuIcon = styled(MenuItem)`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media ${device.tablet} {
    display: flex;
  }
`;

export const NavbarIcons = styled(Menu)`
  gap: 20px;
`;
