import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { getVideoList } from '../api';

export default function Videos() {
  const [video, setVideo] = useState();

  useEffect(() => {
    getVideoList()
      .then(hasil => {
        setVideo(hasil);
      })
      .catch(value => {
        console.log('mmmmmmmmmmmmmmmmmmmmmmmm');
      });
  });

  return (
    <Box>
      <Heading textAlign={'center'} my={10}>
        Coming Soon
      </Heading>
      <Box></Box>
    </Box>
  );
}
