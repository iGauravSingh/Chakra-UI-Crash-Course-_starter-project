import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, HStack, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'
export default function Dashboard() {

  // const boxStyles ={
  //   p: '10px',
  //   bg: 'purple.400',
  //   color: 'white',
  //   m: '10px',
  //   textAlign: 'center',
  //   filter: 'blur(2px)',
  //   ':hover': {
  //     color: 'black',
  //     bg: 'blue.200'
  //   }
  // }

  const tasks = useLoaderData()

  return (

<SimpleGrid columns={4} spacing={10} minChildWidth='300px'>
    {tasks && tasks.map(task => (
      <Card key={task.id} borderTop=' 8px' borderColor='purple.400' bg='white'>
        <CardHeader>
          <Flex gap={5}>
            <Box w='50px' h='50px'>
              <Avatar src={task.img} />
            </Box>
            <Box>
              <Heading as='h3' size='sm'>{task.title}</Heading>
              <Text>by {task.author}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody color='gray.500'>
          <Text>{task.description}</Text>
        </CardBody>

        <Divider borderColor='gray.200' />

        <CardFooter>
          <HStack>
            <Button variant='ghost' leftIcon={<ViewIcon />}>watch</Button>
            <Button variant='ghost' leftIcon={<EditIcon />}>Comment</Button>
          </HStack>
        </CardFooter>
      </Card>
    ))}

</SimpleGrid>

    // <div>
    // <Container as='section' maxWidth='4xl' py='20px'>
    //   <Heading my='30px' p='10px'> I;m a hedaing</Heading>
    //   <Text marginLeft='30px'>random Text</Text>
    //   <Text ml='30px' color='blue.300' fontWeight='bold'>random Text</Text>

    //   <Box my='30px' p='20px' bg='orange' color='white'>
    //     <Text>This is a box</Text>
    //   </Box>


    //   <Box sx={boxStyles}>
    //     Hello
    //   </Box>
    // </Container>
     
    // </div>
  )
}
 
export const taskLoader = async ()=> {
  const res = await fetch('http://localhost:3000/tasks')
  return res.json()
}


// <SimpleGrid columns={4} spacing={10} p='10px' minChildWidth='250px'>
{/* <Box bg='white' h='200px' border='1px solid'>
<Text color={{base: 'pink' , md: 'blue' , lg: 'green'}}>Hello</Text>
</Box>
<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>

<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>

<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>
<Box bg='white' h='200px' border='1px solid'></Box>

</SimpleGrid> */}