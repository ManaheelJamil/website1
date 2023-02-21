"use client"
import { Image ,Box,Heading} from "@chakra-ui/react";
export default function container() {
  return (
    <>
      <Box  >
        <Image src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/05/cover-image-2.jpg" width="100%" alt="image" />
        <Heading
          marginTop="-360px"
          color="white"
          marginLeft="100px"
          fontFamily="Cursive"
          fontSize="50px"  
        className="text"  
        >
          Certified <br />
          Web3.0 and <br />
          Metaverse <br />
          Developer
        </Heading>
      </Box>
    </>
  );
}
