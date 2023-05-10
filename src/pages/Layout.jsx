import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
