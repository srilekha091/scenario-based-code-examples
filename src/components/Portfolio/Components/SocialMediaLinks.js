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
				<Button aria-label='Send Email' p={10} fontSize='2xl'>
					<Icon as={BsLinkedin} />
					LinkedIn
				</Button>
			</Link>
			<Link
				href='https://github.com/srilekha091'
				target='_blank'
				rel='noreferrer'
			>
				<Button aria-label='Send Email' p={10} fontSize='2xl'>
					<Icon as={BsGithub} />
					GitHub
				</Button>
			</Link>
		</Box>
	);
};

export default SocialMediaLinks;
