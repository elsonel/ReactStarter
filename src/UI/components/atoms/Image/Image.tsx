import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  srcSet,
  sizes,
  ...props
}): React.ReactElement => {
  return (
    <ImageStyled src={src} srcSet={srcSet} sizes={sizes} alt={alt} {...props} />
  );
};

const ImageStyled = styled.img`
  vertical-align: top;
  display: block;
  user-select: none;
`;
