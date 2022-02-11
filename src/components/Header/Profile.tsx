import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Tiago Augusto</Text>
          <Text color='gray.300' fontSize='small'>
            tiagoasrodrigues@protonmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Tiago Augusto' src='https://github.com/tiagoasrodrigues.png' />
    </Flex>
  )
}