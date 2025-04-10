import React from "react";
import { Heading, Box, Text, Image } from "@chakra-ui/react";
import myImage from "./../assets/profilePic.jpg";
import SocialMediaLinks from "../Components/SocialMediaLinks";
import "./pages.css";

const About = () => {
	return (
		<Box p={4} color='white' align='center' bg='yellow.400'>
			<Heading fontSize='xl' m={2}>
				Hi!
			</Heading>
			<Heading fontSize='3xl' m={2} h={10}>
				I'm Srilekha
			</Heading>
			<Heading fontSize='2xl' as='cite' m={2} h={8}>
				Full Stack Developer
			</Heading>
			<Text padding='3' color='white' maxW='xl' m={4} size='lg' centerContent>
				Full Stack Developer with robust technical, analytical, and
				problem-solving skills, backed by experience in both startup
				environments and large-scale organizations. Passionate about continuous
				learning and applying expertise to drive team and customer success.
				Committed to delivering high-quality solutions and thriving in
				collaborative, fast-paced settings.
			</Text>
			<Image
				borderRadius='full'
				boxSize='sm'
				objectFit='cover'
				src={myImage}
				alt='Srilekha'
			/>
			<SocialMediaLinks />
		</Box>
	);
};

export default About;
