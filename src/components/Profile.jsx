import React from 'react'

import { Box } from '../style/styles'
import { Type } from './common/Text'
import { useLoginState } from '../state/login/hooks'
import { Flex } from 'rebass'

const Profile = () => {
  const { user } = useLoginState()
  return (
    <Box padding="60px 20px" maxWidth="600px">
      <Type.XXXL>Profile</Type.XXXL>

      <Flex
        width="100%"
        justifyContent="flex-start"
        padding="20px"
        flexDirection="column"
      >
        <Type.LG>{`Welcome Dear ${user.name.first} ${user.name.last}`}</Type.LG>
        <Type.MD padding="20px 0">{`Email: ${user.email}`}</Type.MD>
        <Type.MD padding="10px 0">{`location: ${user.location.city}, ${user.location.state}, ${user.location.country}`}</Type.MD>
      </Flex>
    </Box>
  )
}

export default Profile
