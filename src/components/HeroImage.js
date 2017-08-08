import React, { Component } from 'react'
import { Flex, Box, Banner, Text, Heading } from 'rebass'
import rikersIsland from '../assets/images/rikersIsland.jpg'

const HeroImage = (props) => 

  <div>
    <Banner
      color='blue4'
      bg='gray1'
      // backgroundImage={rikersIsland}
    >
      <Heading
        f={[ 4, 5 ]}
        children='In NYC DOC Custody Today:'
      />
    <Heading
        f={7}
        children={props.totalCount}
      />
    </Banner>

  </div>

export default HeroImage