"use client"
import { Image, Box } from '@chakra-ui/react'
export default function image() {
    return (
        <>
            <Box boxSize='sm' >
                <Image className="sec3" src='https://venturebeat.com/wp-content/uploads/2022/02/GettyImages-1364721861-e1651091651812.jpg?fit=1287%2C675&strip=all' marginTop="50px" boxShadow="5px 5px 15px gray" borderRadius="10px" width="400px" height="230px" alt='Dan Abramov' />
                <Image className="sec2" src='https://blog.codeminer42.com/wp-content/uploads/2021/02/nextjs-cover.jpg' marginTop="50px" boxShadow="5px 5px 15px gray" borderRadius="10px" width="400px" height="230px" alt='Dan Abramov' />
                <Image className="sec" src='https://chakra-ui.com/og-image.png' marginTop="50px" boxShadow="5px 5px 15px gray" borderRadius="10px" width="400px" height="230px" alt='Dan Abramov' />
            </Box>
            <Box >
                <Image className="sec1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJD3ZBX3ED6gcI-fF3qqzM3SPujbtVvQ_MA&usqp=CAU' boxShadow="5px 5px 15px gray" borderRadius="10px" width="400px" height="230px" alt='Dan Abramov' />
                <Image className="sec2" src='https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg' marginTop="50px" boxShadow="5px 5px 15px gray" borderRadius="10px" width="400px" height="230px" alt='Dan Abramov' />
                <Image className="sec" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAsvYO5mIB4okGo8HJfxPPseOLrJdH-jMcw&usqp=CAU' marginTop="50px" boxShadow="5px 5px 15px gray" borderRadius="10px" width="400px" height="230px" alt='Dan Abramov' />
            </Box>
        </>
    )
}