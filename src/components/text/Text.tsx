import React, { FC } from 'react';
import * as TextStyled from './Text.style';

interface TextProp {
  text: string;
}

export const Text: FC<TextProp> = ({ text }) => {
  return <TextStyled.TextStyled>{text}</TextStyled.TextStyled>;
};
