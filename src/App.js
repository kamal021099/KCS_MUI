// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
<<<<<<< HEAD

=======
import Backend from './components/backend';
>>>>>>> 6814f41b794e6d266cdfa1bb6706bc3d5a38f9c2
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
<<<<<<< HEAD
=======
      <Backend />
>>>>>>> 6814f41b794e6d266cdfa1bb6706bc3d5a38f9c2
    </ThemeConfig>
  );
}
