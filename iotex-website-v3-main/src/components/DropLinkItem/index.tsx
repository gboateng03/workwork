import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';


interface ComponentsProps {
  icon: string;
  title: string;
  desc: string
}

export const DropLinkItem = observer(({icon, title, desc} : ComponentsProps) => {
  const { lang } = useStore();
  
    return (
      <Box w="100%" h={{base: "100%", lg: "150px", "2xl": "52%"}} py={{base: "0.5rem", lg:"1.25rem"}} pb="0" maxWidth="329px" css={{
        overflow: 'hidden',
        transition: 'height 0.8s',
        '&:hover': {
          height: "100%",
        }
      }}>
        <Image
          boxSize={{base: "2rem", sm: "3rem", "2xl": "4rem"}}
          objectFit="cover"
          src={icon}
          alt={title}
          mb="1.25rem"
        />
        <Text 
            fontSize={{base: "1rem", lg: "1.25rem",  "2xl": "1.75rem"}} h={{base: "", lg: "60px" }}
            fontWeight="semibold" mb={{base: "1rem", "2xl": "2rem"}} 
            whiteSpace="pre-line"
          >{title}</Text>
        <Text fontSize={{base: "0.75rem", lg: "1.125rem"}} color="white" fontWeight="medium" mb={{base: "1rem", lg: "2rem"}}>{desc}</Text>
        <a href="" target="_blank">
          <Text fontSize={{base: "0.75rem", lg: "1.125rem"}} color="brandColor" lineHeight="1.275rem">{lang.t("stake.now")} &gt;&gt;</Text>
        </a>
      </Box>
    );
});
