import {Box, Flex, Text} from "@chakra-ui/react";
import Completed from "@/pages/CmcStarterPack/components/Completed";
import React from "react";
import {useFormFields, useMailChimpForm} from "@/components/MailchimpForm";
import {publicConfig} from "../../../config/public";
import {useStore} from "@/store/index";
import HighLight from "@/components/HighLight";

export const Subscribe = () => {
	const {error, success, message, handleSubmit} = useMailChimpForm(
		publicConfig.MAIL_CHIMP
	);
	const {fields, handleFieldChange} = useFormFields({
		EMAIL: "",
	});
	const {lang} = useStore()
	return (
		<>
			<Text
				fontSize={{xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={20}
			>
				<HighLight

					sourceStr={lang.t("starter.pack.media.step2")}
					keyArr={[
						{
							word: 'STEP 2.',
							link: ""
						},
					]}
					markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
				/>
			</Text>

			<Flex mt={8} borderRadius={'20px'}
			      flexDirection={{base:'column',md:'row'}}
			      position={'relative'}
			      bg={' linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)'}
			      alignItems={'center'} px={{base:5,md:20}} py={{base:10,md:10}}
			      justifyContent={'center'}
			>
				<Flex alignItems={'center'} justifyContent={'space-between'}  flexDirection={{base:'column',xl:'row'}} w={{xl:'85%'}}>
					<Text fontSize={{base:'1.3rem',xl: "2.25rem", '2xl': "3rem"}} fontWeight={600}>{lang.t('join.mailing.list')}</Text>
					<Box  w={{base:'100%',xl:'45%'}} mt={{base:5,xl:0}}>
						<form
							onSubmit={(event) => {
								event.preventDefault();
								handleSubmit({...fields,'group[53458][2]':2}, null);
							}}
						>
							<Flex
								mt="0.5rem"
								h={{base: "3rem", lg: "3.5rem", '2xl': "4.5rem"}}
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
						<Box mt="0.5rem">
							{error && <Text color="discord" fontSize="0.75rem">{lang.t("error.tips")}</Text>}
						</Box>
					</Box>
				</Flex>
				{
					success ? (<Completed width={'8%'}/>) : <></>

				}
			</Flex>
		</>
	)
}
