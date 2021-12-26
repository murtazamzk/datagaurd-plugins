import React from "react";
import styled, { css } from 'styled-components';
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
  color: var(--green);
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
  return (
    <PluginsWrapper>
      <PageTitle>Marketing Plugins</PageTitle>
        <BoxWrapper>
          <PluginBox>
            <PluginBoxHeader>
              <PluginBoxTitle>Plugin 1</PluginBoxTitle>
              <div>
                <Switch id={'plugin1'} checked={true} onChange={() => {}} />
                <SwitchLabel>Allowed</SwitchLabel>
              </div>
            </PluginBoxHeader>
            <PluginBoxDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet voluptates a sed, beatae sit quia autem dolor tenetur pariatur praesentium non labore iure quos velit tempore quis. Iure, quam!</PluginBoxDetails>
          </PluginBox>
          <PluginBox>
            <PluginBoxHeader>
              <PluginBoxTitle>Plugin 2</PluginBoxTitle>
              <div>
                <Switch id={'plugin2'} checked={false} onChange={() => {}} />
                <SwitchLabel>Blocked</SwitchLabel>
              </div>
            </PluginBoxHeader>
            <PluginBoxDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet voluptates a sed, beatae sit quia autem dolor tenetur pariatur praesentium non labore iure quos velit tempore quis. Iure, quam!</PluginBoxDetails>
          </PluginBox>
          <PluginBox>
            <PluginBoxHeader>
              <PluginBoxTitle>Plugin 1</PluginBoxTitle>
              <div>
                <Switch id={'plugin1'} checked={true} onChange={() => {}} />
                <SwitchLabel>Allowed</SwitchLabel>
              </div>
            </PluginBoxHeader>
            <PluginBoxDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet voluptates a sed, beatae sit quia autem dolor tenetur pariatur praesentium non labore iure quos velit tempore quis. Iure, quam!</PluginBoxDetails>
          </PluginBox>
          <PluginBox>
            <PluginBoxHeader>
              <PluginBoxTitle>Plugin 1</PluginBoxTitle>
              <div>
                <Switch id={'plugin1'} checked={true} onChange={() => {}} />
                <SwitchLabel>Allowed</SwitchLabel>
              </div>
            </PluginBoxHeader>
            <PluginBoxDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet voluptates a sed, beatae sit quia autem dolor tenetur pariatur praesentium non labore iure quos velit tempore quis. Iure, quam!</PluginBoxDetails>
          </PluginBox>
          <PluginBox>
            <PluginBoxHeader>
              <PluginBoxTitle>Plugin 1</PluginBoxTitle>
              <div>
                <Switch id={'plugin1'} checked={true} onChange={() => {}} />
                <SwitchLabel>Allowed</SwitchLabel>
              </div>
            </PluginBoxHeader>
            <PluginBoxDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet voluptates a sed, beatae sit quia autem dolor tenetur pariatur praesentium non labore iure quos velit tempore quis. Iure, quam!</PluginBoxDetails>
          </PluginBox>
          <PluginBox>
            <PluginBoxHeader>
              <PluginBoxTitle>Plugin 1</PluginBoxTitle>
              <div>
                <Switch id={'plugin1'} checked={true} onChange={() => {}} />
                <SwitchLabel>Allowed</SwitchLabel>
              </div>
            </PluginBoxHeader>
            <PluginBoxDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet voluptates a sed, beatae sit quia autem dolor tenetur pariatur praesentium non labore iure quos velit tempore quis. Iure, quam!</PluginBoxDetails>
          </PluginBox>
        </BoxWrapper>
    </PluginsWrapper>
  );
};

export default Plugins;
