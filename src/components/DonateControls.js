import React from 'react';
import styled from 'styled-components';

import { FormButtonPrimary, FormButtonSecondary } from '../common/FormButton';

const DonateControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResponsiveFormButtonPrimary = styled(FormButtonPrimary)`
  @media(max-width: 558px) {
    width: 100%;
  }
`;

const ResponsiveFormButtonSecondary = styled(FormButtonSecondary)`
  @media(max-width: 558px) {
    display: none;
  }
`


const DonateControls = ({ className }) => {
  return <DonateControlsContainer className={className}>
    <ResponsiveFormButtonSecondary>Cancel</ResponsiveFormButtonSecondary>
    <ResponsiveFormButtonPrimary>Continue</ResponsiveFormButtonPrimary>
  </DonateControlsContainer>;
};

export default DonateControls;