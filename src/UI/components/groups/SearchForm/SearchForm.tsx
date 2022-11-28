import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Paragraph } from 'UI/components/texts/Paragraph/Paragraph';

enum CARD_TYPES {
  ALL = 'All',
  CHARACTER_CONSTELLATION_TALENT = 'Character/Constellation/Talent',
  EQUIP_WEAPON = 'Weapon Equip',
  EQUIP_ARTIFACT = 'Artifact Equip',
  SUPPORT_FIELD = 'Field Support',
  SUPPORT_EVENT = 'Event Support',
}

enum FIELD_TYPES {
  ALL = 'All',
  ITEM = 'Item,',
  ALLY = 'Ally',
  LOCATION = 'Location',
}

enum EVENT_TYPES {
  ALL = 'All',
  FOOD = 'Food',
  RESONANCE = 'Resonance',
  OTHER = 'Other',
}

export interface ISearchFormProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const SearchForm: React.FC<ISearchFormProps> = ({
  ...props
}: ISearchFormProps) => {
  const [cardType, setCardType] = useState(CARD_TYPES.ALL);

  return (
    <Wrapper>
      <TextField
        id="outlined-basic"
        label="Name Search"
        variant="outlined"
        size="small"
        inputProps={{
          autoComplete: 'off',
        }}
      />
      <TextField
        id="outlined-basic"
        label="Description Search"
        variant="outlined"
        size="small"
        inputProps={{
          autoComplete: 'off',
        }}
      />
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Card Type Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by Card Type"
          defaultValue={CARD_TYPES.ALL}
        >
          <MenuItem value={CARD_TYPES.ALL}>
            <i>{CARD_TYPES.ALL}</i>
          </MenuItem>
          <MenuItem value={CARD_TYPES.CHARACTER_CONSTELLATION_TALENT}>
            {CARD_TYPES.CHARACTER_CONSTELLATION_TALENT}
          </MenuItem>
          <MenuItem value={CARD_TYPES.EQUIP_WEAPON}>
            {CARD_TYPES.EQUIP_WEAPON}
          </MenuItem>
          <MenuItem value={CARD_TYPES.EQUIP_ARTIFACT}>
            {CARD_TYPES.EQUIP_ARTIFACT}
          </MenuItem>
          <MenuItem value={CARD_TYPES.SUPPORT_FIELD}>
            {CARD_TYPES.SUPPORT_FIELD}
          </MenuItem>
          <MenuItem value={CARD_TYPES.SUPPORT_EVENT}>
            {CARD_TYPES.SUPPORT_EVENT}
          </MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
`;

const SliderWrapper = styled.div`
  overflow: visible;
  box-sizing: border-box;
  width: 100%;
`;
