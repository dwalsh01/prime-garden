import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';
import PropTypes from 'prop-types';
import { Navigation } from './Navigation';
import Theme from '../styles/theme/theme';

const PageLayout = styled.div`
  ${tw`antialiased w-full h-full`}
`;

export default function Root({ children }) {
  return (
    <Theme>
      <PageLayout>
        <Navigation />
        {children}
      </PageLayout>
    </Theme>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};
