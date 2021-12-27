import React, { useContext, useState } from "react";
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES, ActionTypes } from '../constants';
import { AppContext } from "../store";
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
    display: flex;
    flex-direction: column;
    padding-bottom: 0 !important;
`;

const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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
    background: linear-gradient(to bottom, transparent 35%, ${props => props.status === 'enabled' ? 'var(--green)' : 'var(--red)'} 200%);
`;

const Sidebar = () => {

    const { state, dispatch } = useContext(AppContext);
    const { pathname } = useLocation();
    const currentNav = state.navItems && state.navItems.filter((data) => data.route === pathname);

    let status = 'disabled';

    const getClassName = (path) => {
        return path === pathname ? 'active' : '';
    }

    const renderIcon = (route) => {
        switch(route) {
            case ROUTES.MARKETING:
                return <AppIcon />
            case ROUTES.FINANCE:
                return <FilterIcon />
            case ROUTES.PERSONNEL:
                return <CheckIcon />
            default:
                return <AppIcon />;
        }
    }

    const renderToggleBtn = () => {
        if(currentNav && currentNav.length){
            if(currentNav[0].activePlugins.length === 0) {
                status = 'disabled';
            }else if(currentNav[0].inActivePlugins.length === 0){
                status = 'enabled';
            }
        }
        return (
            <ToggleButtonWrapper status={status}>
                <span>All plugins {status}</span>
                <Switch id={'mainSwitch'} checked={status === 'enabled'} onChange={() => {toggleState()}} size={'big'} />
            </ToggleButtonWrapper>
        )
    }

    const toggleState = () => {
        let currentState = state.navItems;
        currentState.forEach((nav,i) => {
            if(nav.route === pathname){
                if(status === 'enabled') {
                    currentState[i].inActivePlugins.push(...currentState[i].activePlugins);
                    currentState[i].activePlugins = [];
                }else{
                    currentState[i].activePlugins.push(...currentState[i].inActivePlugins);
                    currentState[i].inActivePlugins = [];
                }
            }
        });
        dispatch({
            type: ActionTypes.SET_NAV_DATA,
            data: currentState,
        });
    }

    return (
        <SidebarWrapper className="box">
            <LogoImage />
            <Navbar>
                {state.navItems && state.navItems.map((nav) => (
                    <NavItem key={nav.route} to={nav.route} className={getClassName(nav.route)}>
                        {renderIcon(nav.route)}
                        <span>{nav.title}</span>
                    </NavItem>
                ))}
                {renderToggleBtn()}
            </Navbar>
        </SidebarWrapper>
    );
};

export default Sidebar;
