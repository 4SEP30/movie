import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Image,
  Flex,
  Badge,
  Text,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
} from '@chakra-ui/react';

import { getMovieList, searchMovie } from '../api';

import { useEffect, useState } from 'react';
import { MdStar } from 'react-icons/md';
import { SearchIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList().then(hasil => {
      setMovies(hasil);
      console.log(movies);
    });
  }, []);

  const PopularMovies = () => {
    return movies?.map((value, index) => {
      return (
        <Box>
          <Box>
            <Box
              p="5"
              maxW={'320px'}
              borderWidth="1px"
              key={index}
              borderRadius={'10px'}
            >
              <Image
                borderRadius="md"
                src={`${process.env.REACT_APP_BASEIMGURL}/${value.poster_path}`}
              />
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
                >
                  {value.release_date}
                </Text>
              </Flex>
              <Text
                mt={2}
                fontSize="x-large"
                fontWeight="bold"
                lineHeight="short"
              >
                {value.title}
              </Text>
              <Text fontSize={'13px'} mt={2}>
                {value.overview}
              </Text>
              <Button my={'20px'}>
                <Link to={'/videos'}>Watch Videos</Link>
              </Button>
              <Flex mt={2} align="center">
                <Box as={MdStar} color="orange.400" />
                <Text ml={1} fontSize="sm">
                  {value.vote_average} ({value.vote_count})
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      );
    });
  };

  const search = async q => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query.results);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} gap={'20px'}>
          <InputGroup m={'3%'}>
            <Input
              placeholder="Find your favorite movies"
              onChange={({ target }) => search(target.value)}
            />
            <InputRightAddon children={<SearchIcon />} />
          </InputGroup>
          <PopularMovies />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
