import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';

import { Navigation } from '../components/Navigation';
import Card, { CardContainer } from '../components/Card';

export const PageRoot = styled.div`
  ${tw`antialiased w-full h-full`}
`;

const Index = () => (
  <PageRoot>
    <Navigation />
    <CardContainer>
      <Card />
      <Card />
      <Card />
    </CardContainer>
  </PageRoot>
);

export default Index;
