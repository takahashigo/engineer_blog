import React from 'react';
import { Grid, Group } from '@mantine/core';
import Link from 'next/link';
import ColorSchemeToggle from '../ColorSchemeToggle';
import { TextInput } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { useBorderTransition } from '../../hooks/useBorderTransition';

const Header = () => {
  const { isHover, handleMouseEnter, handleMouseLeave } = useBorderTransition();
  return (
    <header className="fixed top-0 left-0 z-50 mb-10 h-20 w-full bg-white md:m-auto">
      <Grid>
        <Grid.Col span={10} md={11}>
          <Link href="/">
            {/* <ReplyIcon className="mr-2 h-6 w-6 cursor-pointer text-gray-300" /> */}
            <h2 className="ml-4 cursor-pointer hover:text-gray-500 sm:ml-8">
              <a>Startiasoft Engineering</a>
            </h2>
          </Link>
        </Grid.Col>
        <Grid.Col span={2} md={1}>
          <Group position="center" align="center" className="mt-0.5 h-full">
            <Link href="/search">
              <a>
                <Search
                  size={24}
                  strokeWidth={3}
                  color={isHover ? 'gray' : 'black'}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
            </Link>
          </Group>
          {/* <ColorSchemeToggle /> */}
        </Grid.Col>
      </Grid>
    </header>
  );
};

export default Header;
