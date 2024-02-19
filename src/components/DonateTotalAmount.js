import React from 'react';
import styled from 'styled-components';

import Colors from '../colors';

import { formatNumber } from '../utils/NumberUtils';

const DonateTotalAmountContainer = styled.div`
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;

const DonateTotalAmountLabel = styled.span`
    font-family: Work Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`;

const DonateTotalAmountValue = styled.span`
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0px;
    text-align: right;
    color: ${Colors.PURPLE_GRAY}
`;

const DonateTotalAmount = ({ className, amount }) => {
  return <DonateTotalAmountContainer className={className}>
    <DonateTotalAmountLabel>Total amount</DonateTotalAmountLabel>
    <DonateTotalAmountValue>${formatNumber(amount || 0)}</DonateTotalAmountValue>
  </DonateTotalAmountContainer>;
};

export default DonateTotalAmount;