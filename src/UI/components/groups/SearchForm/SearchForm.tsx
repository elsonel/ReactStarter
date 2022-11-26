import React from 'react';
import styled, { css } from 'styled-components';

export interface SearchFormProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const SearchForm: React.FC<SearchFormProps> = ({
  ...props
}: SearchFormProps) => {
  return <div>Hello</div>;
};
