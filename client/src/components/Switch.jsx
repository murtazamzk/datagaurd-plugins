import React from "react";
import styled, { css } from 'styled-components';

const SwitchWrapper = styled.div`
  position: relative;
`;
const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.size === 'big' ? '50px' : '40px'};
  height: ${props => props.size === 'big' ? '30px' : '25px'};
  border-radius: 15px;
  background: var(--red);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${props => props.size === 'big' ? '22px' : '18px'};
    height: ${props => props.size === 'big' ? '22px' : '18px'};
    margin: 4px;
    background: var(--white);
    transition: 0.2s;
  }
`;
const SwitchInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchLabel} {
    background: var(--green);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${props => props.size === 'big' ? '22px' : '18px'};
      height: ${props => props.size === 'big' ? '22px' : '18px'};
      margin-left: ${props => props.size === 'big' ? '22px' : '18px'};
      transition: 0.2s;
    }
  }
`;

const Switch = ({id, checked, onChange, size='small'}) => {
    return (
      <div>
        <SwitchWrapper>
          <SwitchInput size={size} checked={checked} onChange={e => onChange(e.target.checked)} id={id} type="checkbox" />
          <SwitchLabel size={size} htmlFor={id} />
        </SwitchWrapper>
      </div>
    );
};

export default Switch;