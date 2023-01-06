import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { LayoutPageProps } from '../../types';
import Header from './Header';
import Footer from './Footer';

const Layout: FC<LayoutPageProps> = ({ children, title = 'Mantine' }) => {
  return (
    <div className="flex flex-col">
      <div className="relative min-h-screen w-full md:m-auto md:max-w-7xl">
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <main className="mt-20 flex flex-1 flex-col justify-center p-4 sm:mt-24">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
