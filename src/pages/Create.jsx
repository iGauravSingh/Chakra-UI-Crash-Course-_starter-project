import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW='480px'>
      <Form>
        <FormControl isRequired mb='40px'>
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name='title' />
          <FormHelperText>Enter a discriptive task name.</FormHelperText>
        </FormControl>
        <FormControl>

          <FormLabel>Task Discriptaion:</FormLabel>
          <Textarea
            placeholder="Enter Detailed discription"
            name="description"
           />
        </FormControl>

        <FormControl display='flex' alignItems='center'>
          <Checkbox 
            name="isPriority"
            size='lg'
            colorScheme="purple"
           />
           <FormLabel mb='0' marginLeft='10px'>make this a priority</FormLabel>
        </FormControl>
        
        <Button type='submit'>Submit</Button>
      </Form>
    </Box>
  )
}
