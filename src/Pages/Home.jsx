import { useEffect, useState } from 'react';
import { Box, Text, Grid, Button } from '@chakra-ui/react';


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(jsonData => {
        const children = jsonData.data.children;
        setData(children);
      });
  }, []);

  const openURL = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} p={4} maxW={1280} m="0 auto">
      {data.map((item, index) => (
        <Box key={index} border="1px solid red" borderRadius="md" p={4} maxW="100%">
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            {item.data.title}
          </Text>
          <Text dangerouslySetInnerHTML={{ __html: item.data.selftext_html }} mb={4} />
          <Button colorScheme="blue" onClick={() => openURL(item.data.url)} mb={2}>
            Open URL
          </Button>
          <Text> <Text as="span" fontWeight="bold">Score:</Text> {item.data.score}</Text>
        </Box>
      ))}
    </Grid>
  );
}

export default Home;
