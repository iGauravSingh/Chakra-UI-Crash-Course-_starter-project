import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";


export default function Navbar() {
  return (
// justifyContent align items in x Direction
// alignItem align items in Y Direction

    <Flex as='nav' p='10px' alignItems='center' mb='40px'>
        <Heading as='h1'>Dojo Tasks</Heading>
        <Spacer />
        <HStack spacing='20px'>
            <Avatar src='/img/mario.png'>
              <AvatarBadge width='1.3em' bg='teal.500'>
                <Text fontSize='xs' color='white'>3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>mario@netninja.dev</Text>
            <Button colorScheme="purple">Logout</Button>
        </HStack>
    </Flex>

    // <Flex bg='gray.200' justify='space-around' wrap='wrap' gap='2'>
    //     <Box w='150px' h='50px' bg='red'>1</Box>
    //     <Box w='150px' h='50px' bg='blue'>2</Box>
    //     <Box w='150px' h='50px' flexGrow='1' bg='green'>3</Box>
    //     <Box w='150px' h='50px' flexGrow='2' bg='yellow'>4</Box>
    // </Flex>
  )
}
