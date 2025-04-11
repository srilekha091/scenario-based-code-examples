import React from "react";
import { Heading, Box, Text, Image } from "@chakra-ui/react";
import myImage from "./../assets/profilePic.jpg";
import SocialMediaLinks from "../Components/SocialMediaLinks";
import "./pages.css";
import AboutDescripition from "./../content/aboutMeDetails";

const About = () => {
	return (
		<Box p={4} color='white' align='center' bg='yellow.400'>
			{AboutDescripition.map((details, index) => (
				<Box color='white' align='center' bg='yellow.400' key={index}>
					<Heading fontSize='xl' m={2}>
						{details.hi}
					</Heading>
					<Heading fontSize='3xl' m={2} h={10}>
						{details.myName}
					</Heading>
					<Heading fontSize='2xl' as='cite' m={2} h={8}>
						{details.title}
					</Heading>
					<Text
						padding='3'
						color='white'
						maxW='xl'
						m={4}
						size='lg'
						centerContent
					>
						{details.summary}
					</Text>
				</Box>
			))}
			<Image
				borderRadius='full'
				boxSize='sm'
				objectFit='cover'
				src={myImage}
				alt='Srilekha'
				m={2}
			/>
			<SocialMediaLinks />
		</Box>
	);
};

export default About;
