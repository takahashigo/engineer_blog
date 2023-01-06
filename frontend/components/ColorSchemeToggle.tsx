import { FC } from 'react';

import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { SunHigh, Moon } from 'tabler-icons-react';

const ColorSchemeToggle: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <SunHigh size={18} strokeWidth={2} color={'#000000'} />
        ) : (
          <Moon size={18} strokeWidth={2} color={'#000000'} />
        )}
      </ActionIcon>
    </Group>
  );
};

export default ColorSchemeToggle;
