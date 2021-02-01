import React from "react"
import { Helmet } from "react-helmet"

import { ChakraProvider } from '@chakra-ui/react'
import Handsign from "./handsign"

const IndexPage = () => (
  <ChakraProvider id="chakra-provider">
    <Helmet>
          <meta charSet="utf-8" />
          <title>Handmoji | Start</title>
        </Helmet>
    <Handsign />
    
  </ChakraProvider>
)

export default IndexPage
