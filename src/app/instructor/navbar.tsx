"use client";
import { Box, HStack, Icon ,Image, Link} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
export default function home() {
  return (
    <>
      <Box h="55px" bg="white" className="nav">
      <Icon spacing={2} w={30} h={30} marginLeft={"10px"} marginTop={"10px"} color='red.500' bg="white" className="box"as={HamburgerIcon}/>
      <Box display="flex" justifyContent="center"className="box1" bg="white">
      <Button colorScheme='blue' width="80px"marginTop="-30px" height="40px" borderRadius="5px"><Link href="#">Instructor</Link></Button>
      <Button colorScheme='blue'width="80px" marginTop="-30px"height="40px"marginLeft="50px"borderRadius="5px" ><Link href="/instructor">About Us</Link></Button>
      <Button colorScheme='blue'width="80px"marginTop="-30px" height="40px"marginLeft="60px"borderRadius="5px" ><Link href="#">Syllabus</Link></Button>
      </Box>
      </Box>
    </>
  );
}