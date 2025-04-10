import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link, Button, Box, Icon } from "@chakra-ui/react";

//rel="noreferrer" is to prevent the destination website from knowing where the user came from

const SocialMediaLinks = () => {
	return (
		<Box>
			<Link
				href='https://www.linkedin.com/in/srilekha-p-akkera/'
				target='_blank'
				rel='noreferrer'
			>
				<Button aria-label='Send Email' p={3} fontSize='2xl' color='grey'>
					<Icon as={BsLinkedin} />
					LinkedIn
				</Button>
			</Link>
			<Link
				href='https://github.com/srilekha091'
				target='_blank'
				rel='noreferrer'
			>
				<Button aria-label='Send Email' p={3} m={2} fontSize='2xl' color='grey'>
					<Icon as={BsGithub} />
					GitHub
				</Button>
			</Link>
		</Box>
	);
};

export default SocialMediaLinks;
