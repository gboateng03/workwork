import React from 'react';
import { observer } from "mobx-react-lite"
import { useStore } from "../../store"
import BasicLayout from '../../Layouts/BasicLayout'
import { Footer } from "@/components/Footer";
import { Flex, Box, Text, SimpleGrid, Image, } from '@chakra-ui/react';
import {helper} from "@/utils/helper";
export const Team = observer(() => {
  const { lang } = useStore()

  const userConfig = [
    {
      name: lang.t("raullen.name"),
      avatar: "images/team/Raullen_c.png",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/raullenchai/" },
        { src: "images/icons/icon_gitHub.svg", href: "https://github.com/raullenchai" },
        { src: "images/icons/icon_twitter.svg", href: "https://twitter.com/Raullen" },
      ],
      job: lang.t("raullen.research"),
      intros: lang.t("raullen.desc"),
    },
    {
      name: lang.t("jin.name"),
      avatar: "images/team/Jing_c.png",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/cbetasun/" },
        { src: "images/icons/icon_twitter.svg", href: "https://twitter.com/cbetass" },
      ],
      job: lang.t("jin.research"),
      intros: lang.t("jin.desc"),
    },
    {
      name: lang.t("simone.name"),
      avatar: "images/team/simone-dark-bg-2-impr.jpg",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/zimne/" },
        { src: "images/icons/icon_twitter.svg", href: "https://twitter.com/zimne1" },
      ],
      job: lang.t("simone.research"),
      intros: lang.t("simone.desc"),
    },
    {
      name: lang.t("qevan.name"),
      avatar: "images/team/qevan_headshot.png",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/donguo/" },
        { src: "images/icons/icon_gitHub.svg", href: "https://github.com/guo" },
        { src: "images/icons/icon_twitter.svg", href: "https://twitter.com/qevanguo" },
      ],
      job: lang.t("qevan.research"),
      intros: lang.t("qevan.desc"),
    },

    {
      name: lang.t("dean.name"),
      avatar: "images/team/0.jpg",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/deanpatrickprofessional/",
        },
        { src: "images/icons/icon_twitter.svg", href: "https://twitter.com/deanofprivacy?lang=en" },
      ],
      job: lang.t("dean.research"),
      intros: lang.t("dean.desc"),
    },
    {
      name: lang.t("ken.name"),
      avatar: 'images/team/k.png',
      links: [{ src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/seiff/" }],
      job: lang.t("ken.research"),
      intros: lang.t("ken.desc"),
    },
    {
      name: lang.t("Art.Malkov"),
      avatar: 'images/team/alina.png',
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/digitalbrand/"},
      ],
      job: lang.t("Art.Malkov.research"),
      intros: lang.t("Art.Malkov.desc"),
    },
    {
      name: lang.t("robert.name"),
      avatar: "images/team/RobertParker.jpeg",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href:
            "https://www.linkedin.com/public-profile/in/robert-parker-44b5024?challengeId=AQF1k9vkrp65uwAAAXdanQWY3LqNZyOYdcvVJ_NSIdTi39LSB1brz0XBosHDSZcBusyB7IUWnuk_-r1Qk_ox3HgSInXQdst2ng&submissionId=bd491868-6672-5f16-faec-17bf87297957",
        },
      ],
      job: lang.t("robert.research"),
      intros: lang.t("robert.desc"),
    },
    {
      name: lang.t("larry.name"),
      avatar: "images/team/larry.png",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/larry-pang/" },
        { src: "images/icons/icon_twitter.svg", href: "https://twitter.com/larrypang" },
      ],
      job: lang.t("larry.research"),
      intros: lang.t("larry.desc"),
    },
    {
      name: lang.t("Marcos.Dinnerstein"),
      avatar: 'images/team/marcos_dinnerstein.png',
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/marcosdinnerstein/"},
        { src: "images/icons/icon_twitter.svg", href: "https://twitter.com/marcosd "},
      ],
      job: lang.t("Marcos.Dinnerstein.research"),
      intros: lang.t("Marcos.Dinnerstein.desc"),
    },
    {
      name: lang.t("xin.name"),
      avatar: "images/team/Xinxin_c.png",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/xinxin-fan-crypto/",
        },
      ],
      job: lang.t("xin.research"),
      intros: lang.t("xin.desc"),
    },
    {
      name: lang.t("dariya.name"),
      avatar: "images/team/Da.png",
      links: null,
      job: lang.t("dariya.research"),
      intros: lang.t("dariya.desc"),
    },
    {
      name: lang.t("michael.name"),
      avatar: "images/team/Michael.png",
      links: [
        {
          src: "images/icons/icon_link.svg",
          href: "http://www.sparklabs.co.kr/lb/modal/venture/Michael_Cho.php",
        },
      ],
      job: lang.t("michael.research"),
      intros: lang.t("michael.desc"),
    },
    {
      name: lang.t("seedlet.name"),
      avatar: "images/team/seedlet.png",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/zhi-zhong-a3660354/",
        },
        { src: "images/icons/icon_gitHub.svg", href: "https://github.com/CoderZhi" },
      ],
      job: lang.t("seedlet.research"),
      intros: lang.t("seedlet.desc"),
    },

    {
      name: lang.t("saul.name"),
      avatar: "images/team/0-1.jpg",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/saul-hudson-2ab9228/",
        },
      ],
      job: lang.t("saul.research"),
      intros: lang.t("saul.desc"),
    },

    {
      name: lang.t("dorothy.name"),
      avatar: 'images/team/Dorothy.png',
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/seoyoung-ko-25499b16a/",
        },
      ],
      job: lang.t("dorothy.research"),
      intros: lang.t("dorothy.desc"),
    },
    {
      name: lang.t("dustin.name"),
      avatar: "images/team/dustin.png",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/dustinxie/" },
        { src: "images/icons/icon_gitHub.svg", href: "https://github.com/dustinxie" },
      ],
      job: lang.t("dustin.research"),
      intros: lang.t("dustin.desc"),
    },
    {
      name: lang.t("lori.name"),
      avatar: "images/team/Lori.png",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/boruizhang/" },
      ],
      job: lang.t("lori.research"),
      intros: lang.t("lori.desc"),
    },
    {
      name: lang.t("sean.name"),
      avatar: "images/team/0-2.jpg",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/seanmedcalf/" },
      ],
      job: lang.t("sean.research"),
      intros: lang.t("sean.desc"),
    },
    {
      name: lang.t("mukul.name"),
      avatar: 'images/team/Artboard-1.png',
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/agarwalmukul/" },
      ],
      job: lang.t("mukul.research"),
      intros: lang.t("mukul.desc"),
    },
    {
      name: lang.t("leonid.name"),
      avatar: "images/team/Leo.png",
      links: null,
      job: lang.t("leonid.research"),
      intros: lang.t("leonid.desc"),
    },
    {
      name: lang.t("jake.name"),
      avatar: "images/team/Jack.png",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/jack-lee-89059a29/",
        },
      ],
      job: lang.t("jake.research"),
      intros: lang.t("jake.desc"),
    },
    {
      name: lang.t("Alexis.Baydoun"),
      avatar: 'images/team/alexis_baydoun.png',
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/alexis-baydoun-7a1b8784/"},
      ],
      job: lang.t("Alexis.Baydoun.research"),
      intros: lang.t("Alexis.Baydoun.desc"),
    },
    {
      name: lang.t("guang.name"),
      avatar: "images/team/Gong.png",
      links: [
        {
          src: "images/icons/icon_link.svg",
          href: "https://scholar.google.com/citations?user=i2vwkRMAAAAJ&hl=en",
        },
      ],
      job: lang.t("guang.research"),
      intros: lang.t("guang.desc"),
    },
    {
      name: lang.t("sergey.name"),
      avatar: "images/team/Sergey.png",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/sergey-romanov1/",
        },
      ],
      job: lang.t("sergey.research"),
      intros: lang.t("sergey.desc"),
    },
    {
      name: lang.t("Harrison.Wright"),
      avatar: 'images/team/harrison_wright.png',
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/the-blockchain-recruiter/"},
      ],
      job: lang.t("Harrison.Wright.research"),
      intros: lang.t("Harrison.Wright.desc"),
    },
    {
      name: lang.t("Ben.Clossey"),
      avatar: 'images/team/ben_clossey.png',
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/benjamin-clossey-3b17aa1a3/"},
      ],
      job: lang.t("Ben.Clossey.research"),
      intros: lang.t("Ben.Clossey.desc"),
    },
    {
      name: lang.t("winter.name"),
      avatar: "images/team/Mei.png",
      links: null,
      job: lang.t("winter.research"),
      intros: lang.t("winter.desc"),
    },
    {
      name: lang.t("nguyen.name"),
      avatar: "images/team/Hoang.png",
      links: null,
      job: lang.t("nguyen.research"),
      intros: lang.t("nguyen.desc"),
    },
    {
      name: lang.t("heslei.name"),
      avatar: "images/team/Heslei.png",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/heslei-oliveira-36b5aaa0/",
        },
      ],
      job: lang.t("heslei.research"),
      intros: lang.t("heslei.desc"),
    },

    {
      name: lang.t("frank.name"),
      avatar: "images/team/Frank-Sun.png",
      links: [
        {
          src: "images/icons/icon_linkedIn.svg",
          href: "https://www.linkedin.com/in/yuan-frank-sun/",
        },
      ],
      job: lang.t("frank.research"),
      intros: lang.t("frank.desc"),
    },
    {
      name: lang.t("adejumo.name"),
      avatar: "images/team/A.jpg",
      links: null,
      job: lang.t("adejumo.research"),
      intros: lang.t("adejumo.desc"),
    },
    {
      name: lang.t("zhefeng.name"),
      avatar: "images/team/zhefeng.png",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/zhefengli/" },
        { src: "images/icons/icon_gitHub.svg", href: "https://github.com/lizhefeng" },
      ],
      job: lang.t("zhefeng.research"),
      intros: lang.t("zhefeng.desc"),
    },
    // {
    //   name: lang.t("jikun.name"),
    //   avatar: "images/team/0-3-1.jpg",
    //   links: [
    //     {
    //       src: "images/icons/icon_linkedIn.svg",
    //       href: "https://www.linkedin.com/in/jikun-liao-794b61162/",
    //     },
    //   ],
    //   job: lang.t("jikun.research"),
    //   intros: lang.t("jikun.desc"),
    // },
    {
      name: lang.t("le.name"),
      avatar: "images/team/Hungl.jpeg",
      links: [
        { src: "images/icons/icon_linkedIn.svg", href: "https://www.linkedin.com/in/hunglmtb/" },
      ],
      job: lang.t("le.research"),
      intros: lang.t("le.desc"),
    },
  ]

  return (
    <BasicLayout name="team">
      <Box css={{
        backgroundImage: `url(${helper.cdn('images/team/banner.png')})`,
        backgroundSize: "100%",
        backgroundRepeat: 'no-repeat',
      }}>

        <Box
          pt={{base: "8rem", md: "10rem", lg: "12rem", xl: "13rem", "2xl": "22.875rem"}}
          pb={{base: "5rem", md: "5rem", lg: "6rem", xl: "8rem", "2xl": "13rem"}}>
          <Flex alignItems="center" justifyContent="flex-end" direction="column" w="100%" h="100%" maxWidth={{base: '90%', lg: "80%", "2xl": "1554px"}} mx="auto">
            <Text  fontSize={{base: "2.25rem", sm: "2.5rem", lg: "2.5rem", xl: "4rem", "2xl": "5rem"}}
              mb={{base: "1rem", md: "1.875rem", "2xl": "2.875rem"}}
              textAlign={{base: "center", sm: "left"}}
              fontWeight="semibold" whiteSpace={{base: "inherit", md: "pre-line"}}>
              {lang.t("team.title")}
            </Text>
            <Text
              fontSize={{base: "0.75rem", sm: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.75rem"}}  opacity="0.85"
              width={{base: "90%", lg: "80%", xl: "81%", "2xl": "70%"}}
              fontWeight="medium" textAlign="center">
              {lang.t("team.subtitle")} <br /> <a href="mailto:hello@iotex.io" style={{color: "#44FFB2"}}>{lang.t("team.email")}</a>
            </Text>
          </Flex>
        </Box>

        <Box maxWidth={{base: '90%', lg: "90%", "2xl": "1554px"}} mx="auto">
          <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={16}>
            {userConfig.map((item) => {
              return (
                <Box key={item.name} p="1rem 1rem 1.25rem 1rem" css={{
                  background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
                  boxShadow: 'inset -1px -1px 0px rgb(255,255, 255, 25%)',
                  mixBlendMode: 'normal',
                  backdropFilter: 'blur(50px)',
                  borderRadius: '20px',
                  transition: '0.5s transform ease-in-out',
                  border: '1px solid transparent',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: 'inset -1px -1px 0px rgb(255,255, 255, 25%)',
                  }
                }}>
                  <Image
                    htmlWidth="100%"
                    borderRadius="10px"
                    objectFit="cover"
                    src={helper.cdn(item.avatar)}
                    alt="Dan Abramov"
                  />
                  <Text fontSize={{base: "1rem", md: "1.25rem"}} fontWeight="bold" mt="0.5rem">{item.name}</Text>
                  <Text fontSize={["lg"]} mt="0.2rem" mb="0.8rem">{item.job}</Text>
                  <Flex mb="0.8rem">
                    {item.links &&
                      item.links.map((option) => {
                        return (
                          <a href={option.href} key={option.href} target="_blank">
                            <Image
                                objectFit="cover"
                                src={option.src}
                                alt="Dan Abramov"
                                mr="2"
                              />
                          </a>
                        )
                      })}
                  </Flex>
                  <Text fontSize={["xs", "sm", "md"]} w="full" lineHeight="1.5rem">{item.intros}</Text>
                </Box>
              )
            })}
          </SimpleGrid>
        </Box>
      </Box>


      <Box maxWidth={{base: '90%', lg: "90%", "2xl": "1554px"}} mx="auto" mt={{base: "5rem", lg: "10rem", xl: "15rem"}} p="2rem 2.5rem" css={{
        background: 'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
        boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(100px)',
        borderRadius: '20px'
      }}>
        <img src={helper.cdn('images/team/investors.png')} alt="investors" />
      </Box>

      <Footer />
    </BasicLayout>
  )
})
