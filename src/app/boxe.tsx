"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
export default function news() {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"  >
        <Card  className="container one">
          <CardHeader>
            <Heading size="md"bg=" rgb(197, 196, 196);">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Heading>
          </CardHeader><br/><br/>
          <CardBody>
            <Text  bg=" rgb(197, 196, 196);">
              {" "}
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </Text>
          </CardBody><br/><br/>
          <CardFooter bg=" rgb(197, 196, 196);">
            <Button width="90px" height="50px" borderRadius="5px" boxShadow="5px 5px 15px gray" marginLeft="60px">View here</Button>
          </CardFooter>
        </Card>
        <Card className="container two">
          <CardHeader>
            <Heading size="md" bg=" rgb(197, 196, 196);">
              {" "}
              Artificial Intelligence (AI) and Deep Learning Specialization
            </Heading>
          </CardHeader><br/><br/>
          <CardBody>
            <Text bg=" rgb(197, 196, 196);">
              {" "}
              The AI and Deep Learning specialization focuses on building and
              deploying intelligent APIs using OpenAI models and building custom
              Deep Learning Tensorflow models...
            </Text>
          </CardBody><br/><br/>
          <CardFooter bg=" rgb(197, 196, 196);">
            <Button width="90px" height="50px" borderRadius="5px" boxShadow="5px 5px 15px gray" marginLeft="60px">View here</Button>
          </CardFooter>
        </Card>
        <Card className="container three">
          <CardHeader>
            <Heading size="md" bg=" rgb(197, 196, 196);">
              {" "}
              Ambient Computing and IoT Specialization
            </Heading>
          </CardHeader><br/><br/>
          <CardBody>
            <Text bg=" rgb(197, 196, 196);">
              {" "}
              The Ambient Computing and IoT Specialization focuses on building
              Smart Homes, Offices, Factories, and Cities using Voice computing,
              Matter and Embedded Devices.
            </Text>
          </CardBody><br/><br/>
          <CardFooter bg=" rgb(197, 196, 196);">
            <Button width="90px" height="50px" borderRadius="5px" boxShadow="5px 5px 15px gray" marginLeft="60px">View here</Button>
          </CardFooter>
        </Card>
        <Card className="container four">
          <CardHeader>
            <Heading size="md" bg=" rgb(197, 196, 196);">Cloud-Native Computing Specialization</Heading>
          </CardHeader><br/><br/>
          <CardBody>
            <Text bg=" rgb(197, 196, 196);">
              {" "}
              The Cloud-Native Computing Specialization focuses on Containers,
              Kubernetes, and CDK for Kubernetes.
            </Text>
          </CardBody><br/><br/>
          <CardFooter bg=" rgb(197, 196, 196);">
            <Button width="90px" height="50px" borderRadius="5px" boxShadow="5px 5px 15px gray" marginLeft="60px">View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}
