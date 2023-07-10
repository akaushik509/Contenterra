import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box >
        <Flex gap="30px" w="80%" h="80px" margin={"auto"} justifyContent="space-between" >
            <Image marginTop={"10px"} margin={"auto"}  h="50px" src="https://contenterra.com/images/logo.png" alt="contenterra"/> 
        </Flex>
    </Box>
  )
}

export default Navbar