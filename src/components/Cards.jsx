import * as React from 'react';
import { Box, Center, Image, Flex, Badge, Text } from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';

export default function Cards() {
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      gap={'20px'}
      justifyContent={'center'}
    >
      <Center>
        <Box p="5" maxW="320px" borderWidth="1px">
          <Image borderRadius="md" src={''} />
          <Flex align="baseline" mt={2} gap={'5px'}>
            <Badge colorScheme="pink">Plus</Badge>
            <Badge colorScheme="pink">Plus</Badge>
            <Badge colorScheme="pink">Plus</Badge>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            ></Text>
          </Flex>
          <Text
            mt={2}
            fontSize="x-large"
            fontWeight="bold"
            lineHeight="short"
          ></Text>
          <Text fontSize={'13px'} mt={2}></Text>
          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm"></Text>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}
