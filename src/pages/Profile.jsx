import { ChatIcon, DeleteIcon, EmailIcon, InfoIcon, RepeatClockIcon, StarIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt='40px' colorScheme="purple" variant='enclosed
    '>
      <TabList>
        <Tab _selected={{ color: 'white', bg:'purple.400' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg:'purple.400' }}>Task History</Tab>
      </TabList>
      {/* first Tabpanel matches the first Tablist so order does matter */}
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
                Email: mario@ninja.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
                lorem impsum is random tesxt
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
                Lorem Ipsum oopp hhh kk
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
        <List spacing={4}>
            <ListItem>
              <ListIcon as={DeleteIcon} color='teal.400' />
                lorem iddjj sajjadj
            </ListItem>
            <ListItem>
              <ListIcon as={InfoIcon} color='teal.400' />
                lorem impsum is random tesxt
            </ListItem>
            <ListItem>
              <ListIcon as={RepeatClockIcon} color='teal.400' />
                Lorem Ipsum oopp hhh kk
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
