import styled from 'styled-components';

import TitleHeader from './components/TitleHeader';
import DonateForm from './components/DonateForm';

const PageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F4F8FA;
`;

function App() {
  return (
    <>
        <TitleHeader />
        <PageContainer>
          <DonateForm>
          </DonateForm>
        </PageContainer>
    </>
  );
}

export default App;
