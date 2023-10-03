import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type { AppProps } from 'next/app';
import { memo, useEffect, useState } from 'react';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element | null => {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <Component {...pageProps} /> : null;
});

export default MyApp;
