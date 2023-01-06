import '../styles/globals.css';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { SWRConfig } from 'swr';
import { client } from '../lib/client';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

const fetcher = async (query: any, variables: any) =>
  client.request(query, variables);

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <SWRConfig value={{ fetcher }}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <Component {...pageProps} />
        </ColorSchemeProvider>
      </MantineProvider>
    </SWRConfig>
  );
};

export default App;
