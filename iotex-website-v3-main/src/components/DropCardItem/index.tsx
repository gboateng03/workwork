import React, {useState} from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { observer, useLocalStore } from 'mobx-react-lite';
import {helper} from "@/utils/helper";


interface ComponentsProps {
  icon: string;
  title: string;
  desc: string;
  index: number;
  hoverIndex: number;
  changeHoverIndex: Function;
}

export const DropCard = observer(({index, icon, title, desc, hoverIndex, changeHoverIndex} : ComponentsProps) => {

    return (
      <Box key={title} flex="1" cursor="pointer"
        borderRight={index === 3 ? '1px' : '0'}
        pb="0" borderBottom="1px" borderColor="borderColor"
        h={hoverIndex === index ? {base: "max-content"} :{base: '36%', md: "42%", lg: '40%', xl: "45%"}}
        css={hoverIndex === index ? {
          height: "max-content",
          background: `url(${helper.cdn('images/bg_tab.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          border: 'none',
        } : {
          background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.05) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
          transition: 'height 0.8s',
          overflow: 'hidden',
          '&:hover': {
            height: "100%",
            background: `url(${helper.cdn('images/bg_tab.png')})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            borderColor: 'transparent',
          }
        }}
        onMouseOver={() => changeHoverIndex()}>
        <Box borderLeft="1px" css={{
          height: '100%',
          '&:hover': {
            height: 'max-content',
            borderColor: 'transparent'
          }
        }} borderColor="borderColor"  p={{base: "0.5rem", md: '0.8rem', lg: "1.25rem"}}>
          <Image
            boxSize={{base: "2rem", md: "4rem"}}
            objectFit="cover"
            src={icon}
            alt={title}
            mb="1.25rem"
          />
          <Text fontSize={{base: "0.75rem", md: "1.25rem"}} color="grayColor" fontWeight="bold">{title}</Text>
        </Box>
        <Text fontSize={{base: "0.5rem", md: "1.125rem"}}  className="desc" color="white"
        borderLeft="1px" borderColor="transparent"  px={{base: "0.5rem", md: '0.8rem',  lg: "1.25rem"}}
        fontWeight="medium" mt="0.875rem" pb={{base: "0.6rem", md: '1rem', xl: "3.375rem"}}>{desc}</Text>
      </Box>
    );
});
