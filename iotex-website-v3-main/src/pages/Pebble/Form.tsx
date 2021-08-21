import {useStore} from "@/store/index";
import React, {useState} from "react";
import {Box, Flex, FormControl, FormErrorMessage, Heading, Input, Text, Textarea,Button as CButton} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";

const Form=()=>{
	const {lang} = useStore()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [interest, setInterest] = useState("")
	const [errors, setErrors] = useState({})
	const handleSubmit = () => {
		const errors = {
			name: !name,
			email: !email,
			interest: !interest
		}
		setErrors(errors)
	}
	return (
		<Box
			id='form1'
			maxWidth={{base: '98%', md: '80%', lg: '90%', '2xl': '1554px'}}
			position={'relative'}
			mx="auto"
			px={{base:5,md:24}}
			py={{base:10,md:14}}
			marginTop={{
				base: '5rem',
				md: '10rem'
			}}
			borderRadius="1.125rem"
			css={{
				background:
					"linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)",
				boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
				backdropFilter: "blur(100px)",
			}}
		>
			<Box>

			</Box>
			<Heading fontSize={'2.25rem'} textAlign={'center'}>{lang.t('pebble.section7.title')}</Heading>
			<Text mt={4} fontSize={'1.12rem'} textAlign={'center'}>{lang.t('enterprise.form.subtitle')}</Text>
			<Flex flexDirection={'column'} marginTop={'4.4rem'}>

				<Flex justifyContent={'space-between'} flexDirection={{base:'column',md:'column',lg:'row'}}>
					<Box width={{base:'100%',md:'100%',lg:'49%'}}>
						<FormControl
							isInvalid={errors['name']}
							isRequired
						>
							<Input
								borderRadius={'9.6px'}
								border={'1px solid'}
								minHeight={{lg:'3.5rem',xl:'3.5rem'}}
								background={'rgba(255, 255, 255, 0.1)'}
								_placeholder={{color: 'white', fontWeight: 'semibold',fontSize:'1rem'}}
								placeholder={lang.t("your.name")}
								size="lg"
								value={name}
								onChange={(e) => setName(e.target.value)}
								borderColor="rgba(255, 255, 255, 0.2)"
							/>
							<FormErrorMessage>{'required'}</FormErrorMessage>
						</FormControl>
					</Box>
					<Box width={{base:'100%',md:'100%',lg:'49%'}} mt={{base:5,md:5,lg:0}}>
						<FormControl
							isInvalid={errors['email']}
							isRequired
						>
							<Input
								borderColor="rgba(255, 255, 255, 0.2)"
								borderRadius={'9.6px'}
								border={'1px solid '}
								minHeight={{lg:'3.5rem',xl:'3.5rem'}}
								background={'rgba(255, 255, 255, 0.1)'}
								_placeholder={{color: 'white', fontWeight: 'semibold',fontSize:'1rem'}}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={lang.t("email")}
								size="lg"/>
							<FormErrorMessage>{'required'}</FormErrorMessage>
						</FormControl>
					</Box>
				</Flex>
				<Box mt={5}>
					<FormControl
						isInvalid={errors['interest']}
						isRequired
					>
						<Textarea
							background={'rgba(255, 255, 255, 0.1)'}
							borderColor="rgba(255, 255, 255, 0.2)"
							borderRadius={'9.6px'}
							border={'1px solid'}
							value={interest}
							onChange={(e) => setInterest(e.target.value)}
							rows={6}
							padding={'1rem'}
							size={'large'}
							resize={'none'}
							_placeholder={{color: 'white', fontWeight: 'semibold',fontSize:'1rem'}}
							placeholder={lang.t("question")}/>
						<FormErrorMessage>{'required'}</FormErrorMessage>
					</FormControl>
				</Box>
				<Box textAlign={'center'} marginTop={'3rem'}>
					<CButton
						onClick={handleSubmit}
						backgroundColor={'#44FFB2'}
						color={'black'} size="lg"
						width={'15rem'}>
						{lang.t('submit')}
					</CButton>
				</Box>
			</Flex>
		</Box>
	)
}
export default observer(Form)
