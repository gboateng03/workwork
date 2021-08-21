import React from 'react';
import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import Typewriter from 'typewriter-effect';

export const TypeCode = observer(() => {
    return (
      <Box fontSize={{base: "10px", md: "16px", lg: "12px", xl: "14px",  "2xl": "16px"}} transform={{base: "scale(0.9)", md: "scale(1)", lg: "scale(0.9)", xl: "scale(1)"}} lineHeight={{base: "18px", md: "20px", "2xl": "24px"}} fontWeight="medium" fontFamily="Noto Sans" w="100%" h="100%">
        <Typewriter
          options={{
            loop: false,
            cursor: '  ▌',
            delay: 5
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString("<span style='color: #D87EF4'>const</span> <span style='color: #F9AC6E;'>BigN</span> = <span style='color: #6AABE9;'>require</span>(<span style='color: #0BDAD6'>'big.js'</span>);<br/>")
              .typeString("<span style='color: #D87EF4'>const</span> <span style='color: #F9AC6E;'>Web3</span> = <span style='color: #6AABE9;'>require</span>(<span style='color: #0BDAD6'>'web3'</span>);<br/> ")
              .typeString("<br />")
              .pauseFor(500)
              .typeString("<span style='color: #78808F'>// Set the IoTeX Web3 Endpoint for Testnet </span> <br/> ")
              .typeString('<span style="color: #D87EF4">const</span> <span style="color: #F9AC6E;">Endpoint</span> = <span style="color: #0BDAD6;text-decoration: underline;">"https://babel-api.testnet.iotex.io"</span>;<br/> ')
              .typeString("<br />")
              .pauseFor(500)
              .typeString('<span style="color: #78808F">// Create the Web3 Provider </span> <br/> ')
              .typeString('<span style="color: #D87EF4">const</span> <span style="color: #F9AC6E;">TestnetProvider</span> = <span style="color: #D87EF4">new</span> <span style="color: #CCCCCC;">Web3</span>.<span style="color: #DB7178;">providers</span>.<span style="color: #6AABE9;">HttpProvider</span>(<span style="color: #CCCCCC;">Endpoint</span>); <br/> ')
              .typeString("<br />")
              .pauseFor(500)
              .typeString('<span style="color: #78808F">// Initialize Web3js </span> <br/> ')
              .typeString('<span style="color: #D87EF4">const</span> <span style="color: #F9AC6E;">web3</span> = <span style="color: #D87EF4">new</span> <span style="color: #CCCCCC;">Web3</span>(<span style="color: #CCCCCC;">TestnetProvider</span>); ')
              .start();
          }}
        />
      </Box>
    );
});
