import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module './components/AnimatedRoutes' was resolved ... Remove this comment to see the full error message
import AnimatedRoutes from './components/AnimatedRoutes';

import './sass/main.scss';

// @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <BrowserRouter>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
