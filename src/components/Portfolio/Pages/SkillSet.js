import React from "react";
import skills from "./../content/skillSetList";
import {
	Heading,
	Box,
	Text,
	SimpleGrid,
	Icon,
	Grid,
	GridItem,
} from "@chakra-ui/react";

const SkillSet = () => {
	return (
		<Box p={4} align='center' bg='yellow.400'>
			<Heading color='white'>Tools</Heading>
			{/* <SimpleGrid spacing={10} m={5} p={5}> */}
			<Grid templateColumns='repeat(3, 1fr)'>
				{skills.map((skill, index) => (
					// <Box key={index} color={skill.color}>
					<GridItem w='100%' h='20' m={5} p={5}>
						<Icon boxSize={20} alignItems='center' p={3} color='pink.600'>
							{skill.icon}
						</Icon>
						<Text color='white' fontSize='xl' p={1} textAlign='center'>
							{skill.skillName}
						</Text>
						{/* // </Box> */}
					</GridItem>
				))}
			</Grid>
			{/* </SimpleGrid> */}
		</Box>
	);
};

export default SkillSet;
