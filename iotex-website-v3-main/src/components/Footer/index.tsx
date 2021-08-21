import React from "react";
import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { useFormFields, useMailChimpForm } from "@/components/MailchimpForm";
import { publicConfig } from "../../config/public";
import {helper} from "@/utils/helper";

export const Footer = observer(() => {
  const { lang } = useStore();
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    publicConfig.MAIL_CHIMP
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  const config = [
    {
      name: lang.t("GET.STARTED"),
      lists: [
        {
          name: lang.t("What.is.IoTeX"),
          path: "https://onboard.iotex.io/introduction",
          blank: true,
          icon: "images/explore/icon_wallet_n.png",
          icon_active: "images/explore/icon_wallet_s.png",
        },
        {
          name: lang.t("vision"),
          path: "https://iott.network/about",
          blank: true,
          icon: "images/explore/icon_getiotx_n.png",
          icon_active: "images/explore/icon_getiotx_n.png",
        },
        {
          name: lang.t("roadmap"),
          path: "https://iotex.io/blog/exciting-cryptocurrency-company/",
          blank: true,
          icon: "images/explore/icon_map_n.png",
          icon_active: "images/explore/icon_map_s.png",
        },
        {
          name: lang.t("onboarding.Pack"),
          path: "https://onboard.iotex.io/",
          blank: true,
          icon: "images/explore/icon_getiotx_n.png",
          icon_active: "images/explore/icon_getiotx_n.png",
        },
      ],
    },

    {
      name: lang.t("for.investors"),
      lists: [
        {
          name: lang.t("ioPay.wallet"),
          path: "/iopay/",
          blank: true,
          icon: "images/explore/icon_wallet_n.png",
          icon_active: "images/explore/icon_wallet_s.png",
        },
        {
          name: lang.t("get.iotx"),
          path: "https://ecosystem.iotex.io/exchanges-wallets",
          blank: true,
          icon: "images/explore/icon_getiotx_n.png",
          icon_active: "images/explore/icon_getiotx_n.png",
        },
        {
          name: lang.t("staking.portal"),
          path: "https://member.iotex.io/",
          blank: true,
          icon: "images/explore/icon_stake_n.png",
          icon_active: "images/explore/icon_stake_s.png",
        },
        {
          name: lang.t("burn.drop"),
          path: "https://burndrop.iotex.io/",
          blank: true,
          icon: "images/explore/icon_brun-drop_n.png",
          icon_active: "images/explore/icon_brun-drop_n.png",
        },
        {
          name: lang.t("explore"),
          path: "https://iotexscan.io/",
          blank: true,
          icon: "images/explore/icon_explorer_n.png",
          icon_active: "images/explore/icon_explorer_s.png",
        },
      ],
    },
    {
      name: lang.t("for.builders"),
      lists: [
        {
          name: lang.t("github"),
          path: "https://github.com/iotexproject",
          blank: true,
          icon: "images/explore/icon_gitHub_n.png",
          icon_active: "images/explore/icon_gitHub_s.png",
        },
        {
          name: lang.t("dev.docs"),
          path: "https://docs.iotex.io/",
          blank: true,
          icon: "images/explore/icon_docs_n.png",
          icon_active: "images/explore/icon_docs_s.png",
        },
        {
          name: lang.t("halo.grants"),
          path: "https://iotex.io/halo",
          blank: true,
          icon: "images/explore/icon_halo_n.png",
          icon_active: "images/explore/icon_halo_s.png",
        },
      ],
    },
    {
      name: lang.t("for.community"),
      lists: [
        {
          name: lang.t("ecosystem"),
          path: "https://ecosystem.iotex.io/projects",
          blank: true,
          icon: "images/explore/icon_ecopage_n.png",
          icon_active: "images/explore/icon_ecopage_s.png",
        },
        {
          name: lang.t("live.ioTT.network"),
          path: "https://iott.network/",
          blank: true,
          icon: "images/explore/icon_iott_n.png",
          icon_active: "images/explore/icon_iott_s.png",
        },
        {
          name: lang.t("blog"),
          path: "https://iotex.io/blog",
          blank: true,
          icon: "images/explore/icon_blog_n.png",
          icon_active: "images/explore/icon_blog_s.png",
        },
      ],
    },
  ];

  const links = [
    {
      icon: "images/explore/icon_twitter_n.png",
      icon_active: "images/explore/icon_twitter_s.png",
      blank: true,
      href: "https://twitter.com/iotex_io",
    },
    {
      icon: "images/explore/icon_discord_n.png",
      icon_active: "images/explore/icon_discord_s.png",
      blank: true,
      href: "https://iotex.io/devdiscord",
    },
    {
      icon: "images/explore/icon_youtube_n.png",
      icon_active: "images/explore/icon_youtube_s.png",
      blank: true,
      href: "https://www.youtube.com/channel/UCdj3xY3LCktuamvuFusWOZw",
    },
    {
      icon: "images/explore/icon_reddit_n.png",
      icon_active: "images/explore/icon_reddit_s.png",
      blank: true,
      href: "https://www.reddit.com/r/IoTeX/",
    },
    {
      icon: "images/explore/icon_telegram_n.png",
      icon_active: "images/explore/icon_telegram_s.png",
      blank: true,
      href: "https://t.me/iotexchannel",
    },
  ];

  return (
    <Box
      mt={{ base: "5rem", md: "10rem", lg: "15rem" }}
      maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
      mx="auto"
    >
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        {config.map((item, index) => {
          return (
            <Box
              key={item.name}
              display={{ base: "none", md: "block" }}
              w={{ base: "100%", md: "auto" }}
              mb={{ base: "2rem", md: "0" }}
            >
              <Text
                fontSize={{
                  base: "1rem",
                  md: "0.75rem",
                  lg: "0.75rem",
                  xl: "1rem",
                  "2xl": "1.125rem",
                }}
                fontWeight="semibold"
                color="grayColor3"
              >
                {item.name}
              </Text>
              <Flex direction="column">
                {item.lists.map((option) => {
                  return (
                    <a
                      href={option.path}
                      key={option.name}
                      target={option.blank ? "_blank" : ""}
                    >
                      <Text
                        key={option.name}
                        fontSize={{
                          base: "0.75rem",
                          md: "0.75rem",
                          lg: "0.75rem",
                          xl: "0.875rem",
                          "2xl": "1rem",
                        }}
                        cursor="pointer"
                        mt="1rem"
                        fontWeight="medium"
                        css={{
                          "&:hover": {
                            color: "#44FFB2",
                          },
                        }}
                      >
                        {option.name}
                      </Text>
                    </a>
                  );
                })}
                {index === 3 && (
                  <Flex mt="1rem">
                    {links.map((item) => {
                      return (
                        <a
                          href={item.href}
                          target={item.blank ? "_blank" : ""}
                          key={item.icon}
                        >
                          <Image
                            boxSize="1.5rem"
                            mr="1rem"
                            src={helper.cdn(item.icon)}
                            cursor="pointer"
                            css={{
                              "&:hover": {
                                content: `url(${helper.cdn(item.icon_active)})`,
                              },
                            }}
                          />
                        </a>
                      );
                    })}
                  </Flex>
                )}
              </Flex>
            </Box>
          );
        })}
        <Box
          mt={{ base: "5rem", lg: 0 }}
          w={{ base: "max-content", lg: "27%", "2xl": "max-content" }}
        >
          <Text
            fontSize={{
              base: "1rem",
              md: "1rem",
              lg: "0.875rem",
              xl: "1rem",
              "2xl": "1.125rem",
            }}
            fontWeight="semibold"
          >
            SUBSCRIBE TO RECEIVE OUR LATEST UPDATES
          </Text>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(fields, null);
            }}
          >
            <Flex
              mt="2rem"
              css={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 5,
                height: "40px",
                "&:hover": {
                  borderColor: "#44FFB2",
                },
              }}
            >
              <Box
                flex="1"
                fontSize="0.75rem"
                css={{
                  borderRadius: "5px",
                }}
              >
                <input
                  id="EMAIL"
                  type="email"
                  className="emailInput"
                  placeholder="Email"
                  value={fields.EMAIL}
                  onChange={handleFieldChange}
                />
              </Box>
              <Flex
                px="0.3rem"
                borderRadius="5px"
                fontFamily="Montserrat"
                fontWeight="semibold"
                color="bgColor"
                fontSize="0.875rem"
                h="100%"
                bg="discord"
                justifyContent="center"
              >
                <button className="emainBtn">{lang.t("submit")}</button>
              </Flex>
            </Flex>
          </form>
          <Box mt="0.5rem">
            {loading && <Text color="discord" fontSize="0.75rem">{lang.t("loading")}</Text>}
            {success && <Text color="discord" fontSize="0.75rem">{message}</Text>}
            {error && <Text color="discord" fontSize="0.75rem">{lang.t("error.tips")}</Text>}
          </Box>
        </Box>
      </Flex>
      <Link href={'/policy'} _hover={{}}>
        <Text
          fontSize={{ base: "0.875rem", lg: "1rem" }}
          lineHeight="1.875rem"
          mt="8.125rem"
          textAlign="center"
          mb="1rem"
        >
          ©2021 IoTeX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {lang.t("footer.tips")}
        </Text>
      </Link>
    </Box>
  );
});
