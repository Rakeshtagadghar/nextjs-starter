/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { wrapper } from '../store/store';

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
