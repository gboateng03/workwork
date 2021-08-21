import React from 'react';
import { Box } from "@chakra-ui/react"
import { Header } from '@/components/Header/index';
import {globalStyle } from '../lib/globalStyle'
import { Helmet } from "react-helmet";

const BasicLayout = ({children, name}) => {

    const config = {
      'home': {
        title: 'IoTeX - Building the Connected World',
        meta: 'IoTeX combines secure blockchain tech with the Internet of Things (IoT). Track and use data from connected devices. Trade on our decentralized exchange.'
      },
      'developers': {
        title: 'IoTeX - The Premier Blockchain IoT Development Platform',
        meta: 'Develop on IoTeX. Push IoT data to Solidity-based smart contracts, tokenize real-world objects, facts, events. Code dapps with TPS, 5 sec blocks + dev tools.'
      },
      'faq': {
        title: 'IoTeX FAQ',
        meta: ''
      },
      'team': {
        title: '',
        meta: ''
      },
      'enterprise': {
        title: 'IoTeX - BlockchainSolution  for IoT Business and Enterprise ',
        meta: 'IoTeX: a trusted IoT blockchain platform for your business data. Active member: industry standards orgs to define and implement confidential computing '
      },
      'research': {
        title: '',
        meta: ''
      },
      'media-center': {
        title: '',
        meta: ''
      },
      'pebble': {
        title: 'IoTeX - Take Control of Your Data with Pebble',
        meta: 'Pebble is a blockchain based tracking device. Send and track trusted data from the real-world to the Iotex blockchain where the data’s value can be realized.'
      },
      'advanced': {
        title: '',
        meta: ''
      },
      'investors': {
        title: 'IOTX - Cryptocurrency Powering the Future',
        meta: 'IOTX is the native cryptocurrency of IoTeX. Use IOTX to buy, trade, stake, and contribute to the IoTeX connected world. Learn more...'
      },
      'ucam':{
        title:'Ucam - Blockchain Security Camera Powered by IoTeX',
        meta:'Ucam security camera offers home/business security while protecting your data on the blockchain.'
      },
      'policy':{
        title:'',
        meta:''
      },
      'cmc-starter-pack':{
        title:'Coin Market Cap + IoTeX (IOTX) Campaign: Staking, Token, and Wallet',
        meta:'As a CMC Stake & Earn Campaign partner. IoTeX is launching one of the most extensive educational campaigns in the crypto space, where 25,000 winners will be selected.'
      },
      'starter-pack':{
        title:'',
        meta:''
      }
    }
    globalStyle()
    return (
    <Box  css={{
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        width: 5,
        height: 1
      }
    }}>
        <Helmet>
          <title>{config[name].title}</title>
          <meta name="description" content={config[name].meta} />
        </Helmet>
        <Header />
        {children}
    </Box>
  )
}

export default BasicLayout
