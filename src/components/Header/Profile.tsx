import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Tiago Augusto</Text>
        <Text color='gray.300' fontSize='small'>
          tiagoasrodrigues@protonmail.com
        </Text>
      </Box>
      <Avatar size='md' name='Tiago Augusto' src='https://github.com/tiagoasrodrigues.png' />
    </Flex>
  )
}