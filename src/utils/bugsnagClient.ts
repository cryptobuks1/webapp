import React from 'react';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';

const bugsnagClient = Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_API_KEY || '',
  plugins: [new BugsnagPluginReact(React)],
  enabledReleaseStages: ['production'],
  logger: null,
  autoTrackSessions: false,
});

export default bugsnagClient;
