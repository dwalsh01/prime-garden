import { ThemeProvider } from 'emotion-theming';
import resolveConfig from 'tailwindcss/resolveConfig';
import PropTypes from 'prop-types';
import tailwindConfig from '../../tailwind.config.js';

// TODO: fix this issue where theme is not available
export const { theme } = resolveConfig(tailwindConfig);

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Theme;
