"use client"
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
export default function sec2() {
    return (
        <>
            <Card align='center'><br /><br /><br />
                <CardHeader>
                    <Heading size='md' fontSize="35px"> Quarter I (Core)</Heading>
                </CardHeader><br />
                <CardBody>
                    <Text textAlign="center" fontSize="20px">
                        CS-101: Object-Oriented Programming using TypeScript
                        <br /><Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6' isExternal>
                            HTML and CSS<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit#slide=id.p' isExternal>
                            Web 3.0 and Metaverse Theory<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional' isExternal>
                            Fundamentals of JavaScript (ECMAScript 2022 Language Specification) <ExternalLinkIcon mx='2px' />
                        </Link>
                        <br />
                        <Link href='https://profy.dev/article/react-typescript' isExternal>
                            Object-Oriented Programming with TypeScript<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF' isExternal>
                            Fundamentals of Version Control with Git    <ExternalLinkIcon mx='2px' />
                        </Link></Text>
                </CardBody>
            </Card>
            <Card align='center'><br /><br /><br />
                <CardHeader>
                    <Heading size='md' fontSize="35px"> Quarter II (Core)</Heading>
                </CardHeader><br />
                <CardBody>
                    <Text textAlign="center" fontSize="20px">
                    Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform<ExternalLinkIcon mx='2px' />
                    <br /><Link href='https://beta.nextjs.org/docs' isExternal>
                    Next.js 13 Web Development<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://www.figma.com/community/file/971408767069651759' isExternal>
                        UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://nextjs.org/docs/api-routes/introduction' isExternal>
                        API Routes with Next.js<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br />
                        <Link href='https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres' isExternal>
                        SQL and Prisma<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/' isExternal>
                        Next.js 13 using TailwindCSS (Remote Zoom Class)  <ExternalLinkIcon mx='2px' />
                        </Link></Text>
                </CardBody>
            </Card>
            <Card align='center'><br /><br /><br />
                <CardHeader>
                    <Heading size='md' fontSize="35px"> Quarter III Web3 and Metaverse</Heading>
                </CardHeader><br />
                <CardBody>
                    <Text textAlign="center" fontSize="20px">
                    W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

                    <br /><Link href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033' isExternal>
                    Blockchain and Metaverse Theory<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://github.com/panaverse/defi-dapps-solidity-smart-contracts' isExternal>
                        Smart Contract Development in Solidity<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br /> <Link href='https://github.com/panaverse/dapps-nextjs' isExternal>
                        Dapp Development using Ethers.js and Next.js 13<ExternalLinkIcon mx='2px' />
                        </Link>
                        <br />
                        Tokennomic
                        </Text>
                </CardBody>
            </Card>
            <Card align='center'><br /><br /><br />
                <CardHeader>
                    <Heading size='md' fontSize="35px">Quarter IV Web3 and Metaverse</Heading>
                </CardHeader><br />
                <CardBody>
                    <Text textAlign="center" fontSize="20px">
                    MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences

                    <br /><Link href='https://github.com/panaverse/metaverse-web' isExternal>
                    Open Metaverse Web DevelopmentExternalLinkIcon mx='2px' <ExternalLinkIcon mx='2px' />
                        </Link>
                        <br/>Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
                        </Text>
                </CardBody>
            </Card>
        </>
    )
}