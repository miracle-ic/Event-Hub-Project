import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// --------- Header
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    //   align-items: center;
    width: 1220px;
    height: auto;
    transition: 850ms ease;
    // border: 1px solid red;

    @media screen and (max-width: 1312px) {
        width: calc(100vw - 20%);
    }
`;

export const LogoLink = styled(NavLink)`
    display: flex;
    margin: auto;
    justify-content: center;
    font-family: "Manrope", sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: #000;
    text-decoration: none;
`;

export const LoginLink = styled(NavLink)`
    text-decoration: none;
    color: #000;
`;