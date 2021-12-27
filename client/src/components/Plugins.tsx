import React, { useContext, useState } from "react";
import styled from 'styled-components';
import { useLocation, Navigate } from 'react-router-dom';
import { AppContext } from "../store";
import { ActionTypes } from "../constants";
import Switch from "./Switch";

const PluginsWrapper = styled.div`
  padding-left: 40px; 
`;

const PageTitle = styled.h2`
  font-size: var(--fz-xxl);
  color: var(--navyBlue);
  font-weight: 400;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PluginBox = styled.div`
  border: 2px solid var(--greyDark);
  padding: 15px 20px;
  border-radius: 10px;
  margin-right: 40px;
  margin-top: 40px;
  width: calc(33% - 40px);
  opacity: ${props => props.disabled ? '0.5' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : 'all'}
`;

const PluginBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PluginBoxTitle = styled.h3`
  font-size: var(--fz-lg);
  color: var(--navyBlue);
  font-weight: 400;
`;

const SwitchLabel = styled.span`
  font-size: var(--fz-xxs);
  font-weight: bold;
  color: ${props => props.active  ? 'var(--green)' : 'var(--red)'};
  position: relative;
  top: -5px;
`;

const PluginBoxDetails = styled.p`
  color: var(--greyDark);
  margin: 0 50px 0 0;
  font-size: var(--fz-sm);
  line-height: 1.5;
`;

const Plugins = () => {

  const { state, dispatch } = useContext(AppContext);
  const { pathname } = useLocation();
  const currentNav = state.navItems && state.navItems.filter((data) => data.route === pathname);

  const renderTitle = () => {
    if(state?.navItems){
      if(currentNav.length) {
        return currentNav[0].title;
      }else{
        return <Navigate to='/' />;
      }
    }
  }

  const updateState = (item, pluginState) => {
    let currentState = state.navItems;
    currentState.forEach((nav,i) => {
      if(nav.route === pathname){
        if(pluginState === 'Allowed') {
          let index = currentState[i].activePlugins.indexOf(item.id);
          if(index !== -1){
            currentState[i].activePlugins.splice(index,1);
          }
          currentState[i].inActivePlugins.push(item.id);
        }else{
          let index = currentState[i].inActivePlugins.indexOf(item.id);
          if(index !== -1){
            currentState[i].inActivePlugins.splice(index,1);
          }
          currentState[i].activePlugins.push(item.id);
        }
      }
    });
    dispatch({
      type: ActionTypes.SET_NAV_DATA,
      data: currentState,
    });
  }

  const renderSwitch = (item) => {
    let pluginState = 'Blocked';
    if(currentNav[0].activePlugins.includes(item.id)) {
      pluginState = 'Allowed';
    }
    return (
      <div>
        <Switch id={item.id} checked={pluginState === 'Allowed'} onChange={() => {updateState(item, pluginState)}} />
        <SwitchLabel active={pluginState === 'Allowed'}>{pluginState}</SwitchLabel>
      </div>
    )
  }

  const checkDisabled = (item) => {
    return currentNav[0].disabledPlugins.includes(item.id);
  }

  return (
    <PluginsWrapper>
      <PageTitle>{renderTitle()} Plugins</PageTitle>
        <BoxWrapper>
          {state.plugins && state.plugins.length && state.plugins.map((item) => (
            <PluginBox disabled={checkDisabled(item)} key={item.id}>
              <PluginBoxHeader>
                <PluginBoxTitle>{item.title}</PluginBoxTitle>
                {renderSwitch(item)}
              </PluginBoxHeader>
              <PluginBoxDetails>{item.description}</PluginBoxDetails>
            </PluginBox>
          ))}
        </BoxWrapper>
    </PluginsWrapper>
  );
};

export default Plugins;
