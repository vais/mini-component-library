import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
      {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24}></Icon>
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const NativeSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  font-size 1rem;
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: solid blue 5px;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export default Select;
