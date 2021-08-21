import React from 'react';
import { Box, Flex,  Text, } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';


interface ComponentsProps {
  name: string;
  href: string;
  size: any;
  isBlank?:boolean
}

export const Button = observer(({href, name, size,isBlank=true} : ComponentsProps) => {
    return (
      <Box className="commonBtnBox"  h={{base: "4rem", md: "5.5rem"}} w={size}>
        <a href={href} target={isBlank?'_blank':''} style={{width: "100%"}}>
          <Flex bg="btnBgColor" className="commonBtn" borderRadius="10px"  h="100%" justifyContent="center" alignItems="center" cursor="pointer">
            <Text fontSize={{base: "1.25rem", md: "1.5rem"}} color="btnTextColor" fontWeight="bold" textAlign="center">{name}</Text>
          </Flex>
        </a>
      </Box>
    );
});
