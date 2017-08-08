import React from 'react'
import { Flex, Panel, PanelHeader, Text, Box, Subhead } from 'rebass'

const Breakdown = props => 

  <div>

    <Flex>

      <Box
        w={1/3}
        my={3}
        mx={3}
        pr={3}
      >
        <PanelHeader
          color='blue4'
          f={4}
          >
          Under 18
        </PanelHeader>
        <Subhead
          color='blue4'
          ml={2}
        >
          {props.under16}
        </Subhead>
      </Box>

      <Box
        w={1/3}
        my={3}
        mx={3}
        pr={3}
      >
        <PanelHeader
          color='blue4'
          f={4}
          >
          Mental Health Observation
        </PanelHeader>
        <Text
          color='blue4'
          ml={2}
          f={3}
        >
          {props.mho}
        </Text>
      </Box>
      <Box>

      </Box>
   
   
    </Flex>

  </div>

export default Breakdown