import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize}/>
      </IconWrapper>
    <TextInput {...delegated} style={{
      '--width': width + 'px',
      '--height': styles.height + 'px',
      '--border-thickness': styles.borderThickness + 'px',
      '--font-size': styles.fontSize/16 + 'rem',
    }}/>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  left: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
  border: 0;
  border-bottom: solid ${COLORS.black} var(--border-thickness);
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
  outline-offset: 2px;
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
