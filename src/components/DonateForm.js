import { React, useEffect, useState } from 'react';
import styled from 'styled-components';

import DonateHeader from './DonateHeader';
import DonateInput from './DonateInput';
import DonateControls from './DonateControls';

import { advanceDate } from '../utils/DateUtils';

const CenteredContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;

  filter: drop-shadow(5px 5px 4px #aaa);
`;

const ContentContainer = styled.div`
  padding: 32px 30px;
`;

const DonateControlsWithMargin = styled(DonateControls)`
  margin-top: 32px;
`;

const DonateForm = () => {
  const [startDate, setStartDate] = useState({month: 1, year: 2000});
  const [date, setDate] = useState({month: 1, year: 2000});
  const [amount, setAmount] = useState(undefined);

  useEffect(() => {
    const now = new Date();
    const currentDate = {
      month: now.getMonth(),
      year: now.getFullYear()
    };
    setDate(advanceDate(currentDate));
    setStartDate(currentDate);
  }, []);

  return <CenteredContainer>
    <DonateHeader
      text="The giving block"
      subtext="Set up your donation goal"
    ></DonateHeader>
    <ContentContainer>
      <DonateInput amount={amount} date={date} startDate={startDate} onMonthDateChanged={setDate} onAmountChanged={setAmount} ></DonateInput>
      <DonateControlsWithMargin></DonateControlsWithMargin>
    </ContentContainer>
  </CenteredContainer>; 
};

export default DonateForm;