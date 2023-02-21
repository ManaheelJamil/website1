"use client"
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Image,Text,Heading,Stack } from '@chakra-ui/react'
export default function teach(){
    return(
        <>
        <Box  w='100%' p={4} color='white'>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    width="600px"
    height="400px"
    src='https://i.ytimg.com/vi/sXo__wlVJMM/maxresdefault.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>
  </Stack>
</Card>
</Box>
        </>
    )
}