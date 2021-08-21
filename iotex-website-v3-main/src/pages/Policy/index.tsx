import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {Box, Divider, Heading, Link, Text, useTheme} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import HighLight from "@/components/HighLight";
import {Footer} from "@/components/Footer";

const Policy = () => {
	const {lang} = useStore();
	const scrollToAnchor = (anchorName) => {
		if (anchorName) {
			let anchorElement = document.getElementById(anchorName);
			if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
		}
	}
	return (
		<BasicLayout name={'policy'}>
			<Box width={{base: '100%', md: '80%', '2xl': '1554px'}} mx={'auto'} mt={32}>
				<Link onClick={() => {scrollToAnchor("term-of-use-block")}} _hover={{}}>
					<Text display={'inline-block'} textTransform={'capitalize'} color={'#44FFB2'}
					      fontWeight={'semibold'}>{`${lang.t('policy.term')} - `}</Text> <Text
					color={'#44FFB2'}
					display={'inline-block'}>{'August 2020'}</Text>
				</Link>

				<Link onClick={() => {scrollToAnchor("privacy-policy-block")}} _hover={{}} display={'block'} mt={5}>
					<Text display={'inline-block'} textTransform={'capitalize'} color={'#44FFB2'}
					      fontWeight={'semibold'}>{`${lang.t('policy.privacy.policy')} - `}</Text> <Text
					color={'#44FFB2'}
					display={'inline-block'}>{'August 2020'}</Text>
				</Link>
				<Divider mt={10}/>

				<Heading id={'term-of-use-block'} mt={10} as={'h1'} fontSize={'1.375rem'}>{'TERM OF USE'}</Heading>
				<Heading as={'h3'} mt={10} fontSize={'0.875rem'} pb={4}>{'General'}</Heading>
				<Text fontSize={'0.875rem'}>
					<HighLight sourceStr={lang.t('policy.general.desc1')}
					           keyArr={[{word: lang.t('policy.general.desc1.keyword'), link: '/'}]}
					           markActiveStyle={{color: "#44FFB2"}}/>
				</Text>
				<Text mt={4} fontSize={'0.875rem'}>
					<HighLight sourceStr={lang.t('policy.general.desc2')}
					           keyArr={[{word: lang.t('policy.general.desc2.keyword'), link: '/'}]}
					           markActiveStyle={{fontWeight: 600}}/>
				</Text>
				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{'Use of Website'}</Heading>
				<Text mt={4}
				      fontSize={'0.875rem'}>{'The purpose of our Website is to provide you with you some general information about the software being developed by IoTeX. You must not breach any of the following terms or our Acceptable Use Policy set out below.'}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.open.source.soft')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.open.source.soft.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.open.source.soft.desc2')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.third.party')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.third.party.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.user.content')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.user.content.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.user.content.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.user.content.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.user.content.desc4')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.user.content.desc5')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.user.content.desc6')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.feedback')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.feedback.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.aggregate')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>
					<HighLight sourceStr={lang.t('policy.aggregate.desc')}
					           keyArr={[{word: lang.t('policy.aggregate.desc.keyword')}]} markActiveStyle={{fontWeight: 600}}/>
				</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Intellectual')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Intellectual.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Intellectual.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Intellectual.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Intellectual.desc4')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Intellectual.desc5')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Acceptable')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc4')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc5')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc6')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc7')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc8')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc9')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc10')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc11')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc12')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc13')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc14')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc15')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc16')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc17')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc18')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Acceptable.desc19')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Indemnification')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Indemnification.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Indemnification.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Indemnification.desc3')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc4')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc5')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc6')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc7')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc8')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc9')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Disclaimer.desc10')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.General')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.General.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.General.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.General.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.General.desc4')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.General.desc5')}</Text>

				<Divider mt={10}/>

				<Heading id={'privacy-policy-block'} mt={10} as={'h1'} fontSize={'1.375rem'}>{'PRIVACY POLICY'}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{lang.t('policy.privacy.policy.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.How.we.collect')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.How.we.collect.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{'We may collect and process the following types of information about you:'}</Heading>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.information')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{lang.t('policy.information.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Information.we.collect')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{lang.t('policy.Information.we.collect.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Information.we.collect.receive')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{lang.t('policy.Information.we.collect.receive.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Information.used')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{lang.t('policy.Information.used.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Marketing')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} pl={5}>{lang.t('policy.Marketing.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'} pl={5}>{lang.t('policy.Marketing.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'} pl={5}>{lang.t('policy.Marketing.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'} pl={5}>{lang.t('policy.Marketing.desc4')}</Text>
				<Text mt={4} fontSize={'0.875rem'} pl={5}>{lang.t('policy.Marketing.desc5')}</Text>
				<Text mt={4} fontSize={'0.875rem'} pl={5}>{lang.t('policy.Marketing.desc6')}</Text>
				<Text mt={4} fontSize={'0.875rem'} pl={5}>{lang.t('policy.Marketing.desc7')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Marketing.desc8')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.info.access')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.info.access.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.info.access.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.info.access.desc3')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.choices')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.choices.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.choices.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.choices.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.choices.desc4')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.choices.desc5')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Profiling')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.Profiling.desc')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Newsletter')}</Heading>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.Newsletter.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.Newsletter.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.Newsletter.desc3')}</Text>
				<Text mt={4} fontSize={'0.875rem'} >{lang.t('policy.Newsletter.desc4')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{lang.t('policy.Cookies')}</Heading>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Cookies.desc1')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Cookies.desc2')}</Text>
				<Text mt={4} fontSize={'0.875rem'}>{lang.t('policy.Cookies.desc3')}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{'Links to other websites'}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{'Our website may contain links to other websites run by other organisations. This privacy policy applies only to our website‚ so we encourage you to read the privacy statements on the other websites you visit. We cannot be responsible for the privacy policies and practices of other sites even if you access them using links from our website.'}</Text>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{'If you linked to our website from a third party site, we cannot be responsible for the privacy policies and practices of the owners and operators of that third party site and recommend that you check the policy of that site.v'}</Text>


				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{'16 or Under'}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{'We are concerned to protect the privacy of children aged 16 or under. If you are aged 16 or under‚ please get your parent/guardian’s permission beforehand whenever you provide us with personal information.'}</Text>

				<Heading as={'h3'} mt={10} fontSize={'0.875rem'}>{'Review of this Policy'}</Heading>
				<Text mt={4} fontSize={'0.875rem'} whiteSpace={'pre-line'}>{'We keep this Policy under regular review. This Policy was last updated in August 2020.'}</Text>
			</Box>
			<Footer/>
		</BasicLayout>
	)
}

export default Policy
