import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { useFormFields, useMailChimpForm } from "@/components/MailchimpForm";
import { publicConfig } from "../../config/public";
import { helper } from '@/utils/helper';

export const DevBanner = observer(() => {
  const { lang } = useStore();
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    publicConfig.MAIL_CHIMP
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
    <Box
      position="relative"
      height={{
        base: "700px",
        sm: "470px",
        md: "700px",
        lg: "850px",
        xl: "1000px",
        "2xl": "1290px",
      }}
    >
      <Box
        position="absolute"
        top={{ base: "5.5rem", sm: "5rem" }}
        left=" 0"
        w="100%"
        h="60%"
        zIndex="2"
      >
        <Flex
          alignItems="left"
          justifyContent="center"
          direction="column"
          w="100%"
          h="100%"
          maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }}
          mx="auto"
        >
          <Text
            fontSize={{
              base: "2.25rem",
              sm: "3rem",
              lg: "3.5rem",
              xl: "5.5rem",
              "2xl": "7.5rem",
            }}
            mb={{ base: "1rem" }}
            textAlign={{ base: "center", sm: "left" }}
            fontWeight="semibold"
            whiteSpace={{ base: "inherit", md: "pre-line" }}
          >
            {lang.t("dev.title")}
          </Text>
          <Text
            fontSize={{
              base: "0.75rem",
              sm: "1rem",
              lg: "1.25rem",
              xl: "1.5rem",
              "2xl": "2rem",
            }}
            mb={{ base: "7rem", sm: "2rem", xl: "3rem", "2xl": "4rem" }}
            textAlign={{ base: "center", sm: "left" }}
            whiteSpace="pre-line"
            wordBreak="break-word"
            w={{ base: "100%", md: "max-content" }}
            fontWeight="medium"
          >
            {lang.t("dev.subtitle")}
          </Text>
          <Box
            w={{ base: "100%", md: "45%", lg: "50%", xl: "45%", "2xl": "38%" }}
          >
            <Box>
              <Text
                fontSize={{
                  base: "0.75rem",
                  sm: "1rem",
                  lg: "1.25rem",
                  "2xl": "1.25rem",
                }}
                fontWeight="normal"
                opacity="0.5"
              >
                {lang.t("dev.banner.desc")}
              </Text>
            </Box>
            <Box mb="0.5rem">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit({ ...fields, "group[53458][4]": 4 }, null);
                }}
              >
                <Flex
                  mt="0.5rem"
                  h={{ base: "3rem", lg: "4.5rem" }}
                  css={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 5,
                    "&:hover": {
                      borderColor: "#44FFB2",
                    },
                  }}
                >
                  <Box
                    flex="1"
                    fontSize="1.25rem"
                    css={{
                      borderRadius: "5px",
                      ".email": {
                        fontSize: "1.25rem !important",
                        width: "100%",
                      },
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
                    px="1rem"
                    borderRadius="5px"
                    fontFamily="Montserrat"
                    fontWeight="semibold"
                    color="bgColor"
                    fontSize="1.25rem"
                    h="100%"
                    bg="discord"
                    justifyContent="center"
                  >
                    <button className="emainBtn">{lang.t("submit")}</button>
                  </Flex>
                </Flex>
              </form>
            </Box>
            {loading && <Text color="discord">{lang.t("loading")}</Text>}
            {success && <Text color="discord">{message}</Text>}
            {error && <Text color="discord">{lang.t("error.tips")}</Text>}
          </Box>
        </Flex>
        <Box w="100%" position="relative" mt={0}>
          <img
            src={helper.cdn('images/mask_group.png')}
            style={{ opacity: 0 }}
            alt=""
          />
          <Flex
            flexDirection="column"
            w="100%"
            height="100%"
            position="absolute"
            zIndex="2"
            top="0"
          >
            <Box
              mb="5%"
              css={{
                height: "45%",
                background:
                  `url(${helper.cdn('images/dev/img_dev_page_logo1.png')}) center 0px repeat-x`,
                backgroundSize: "200% 100%",
                backgroundPositionX: "250%",
                animation: "awardLine1 90s infinite linear",
              }}
            />
            <Box
              css={{
                height: "45%",
                background:
                  `url(${helper.cdn('images/dev/img_dev_page_logo2.png')}) center 0px repeat-x`,
                backgroundSize: "200% 100%",
                backgroundPositionX: "240%",
                animation: "awardLine2 90s infinite linear",
              }}
            />
          </Flex>
          <Box
            css={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              zIndex: 2,
              background: `url(${'images/mask.png'}) center center no-repeat`,
              backgroundSize: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
});
