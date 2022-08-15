import React from 'react';
import styled from 'styled-components';

type InfoType = 'info' | 'warning' | 'error' | 'success';
interface Props {
  type?: InfoType;
  text: React.ReactNode;
}

const Info = ({ type = 'info', text }: Props) => {
  return <Wrapper type={type}>{text}</Wrapper>;
};

const Wrapper = styled.div<{ type: InfoType }>`
  padding: 1rem;
  margin: 1rem auto;
  width: fit-content;

  border-radius: 0.5rem;
  background: ${({ type }) => {
    switch (type) {
      case 'warning':
        return '#FFFBE6';
      case 'error':
        return '#FFF2F0';
      case 'success':
        return '#F6FFED';
      default:
        return '#E6F7FF';
    }
  }};
`;

export default Info;
