import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import Amplify from '@aws-amplify/core'
import type { AppProps } from 'next/app';
import { memo, useEffect, useState } from 'react';

import config from '../aws-exports';

Amplify.configure(config)


const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element | null => {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <Component {...pageProps} /> : null;
});

export default MyApp;
