import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';
import Switch from "./Switch";

import Logo from "../assets/logo.svg?component";
import App from "../assets/icon_apps.svg?component";
import Filter from "../assets/icon_filter.svg?component";
import Check from "../assets/icon_check.svg?component";

const LogoImage = styled(Logo)`
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    max-width: 180px;
    padding-left: 40px;
`;

const SidebarWrapper = styled.div`
    background: var(--grey);
    width: 30%;
    max-width: 320px;
`;

const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    padding: 12px 30px;
    position: relative;
    border-left: 5px solid transparent;
    transition: var(--transition);
    font-size: var(--fz-lg);
    &.active,&:hover {
        background-color: var(--white);
        border-left-color: var(--red);
    }
`;

const NavIcon = css`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

const AppIcon = styled(App)`
    ${NavIcon}
`;
const FilterIcon = styled(Filter)`
    ${NavIcon}
`;
const CheckIcon = styled(Check)`
    ${NavIcon}    
`;

const ToggleButtonWrapper = styled.div`
    margin-top: auto;
    padding: 0 30px 40px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--navyBlue);
    font-size: var(--fz-md);
    background: var(--green);
    background: linear-gradient(to bottom, transparent 10%, var(--green) 200%);
`;

const Sidebar = () => {

    const { pathname } = useLocation();
    const [checked,setChecked] = useState(false);
    
    const getClassName = (path) => {
        return path === pathname ? 'active' : '';
    }

    return (
        <SidebarWrapper className="box">
            <LogoImage />
            <Navbar>
                <NavItem to={ROUTES.MARKETING} className={getClassName('/marketing')}>
                    <AppIcon />
                    <span>Marketing</span>
                </NavItem>
                <NavItem to={ROUTES.FINANCE} className={getClassName('/finance')}>
                    <FilterIcon />
                    <span>Finance</span>
                </NavItem>
                <NavItem to={ROUTES.PERSONAL} className={getClassName('/personal')}>
                    <CheckIcon />
                    <span>Personal</span>
                </NavItem>
                <ToggleButtonWrapper>
                    <span>All plugins enabled</span>
                    <Switch id={'mainSwitch'} checked={checked} onChange={() => setChecked(!checked)} size={'big'} />
                </ToggleButtonWrapper>
            </Navbar>
        </SidebarWrapper>
    );
};

export default Sidebar;
