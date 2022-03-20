import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box } from '../../style/styles'
import { Type } from './Text'

const Faq = () => {
  const navigate = useNavigate()

  return (
    <Box padding="60px 20px" maxWidth="600px">
      <Type.XXXL>Faq</Type.XXXL>
      <Type.MD onClick={() => navigate(-1)} padding="30px 0">
        Go Back
      </Type.MD>
    </Box>
  )
}

export default Faq
