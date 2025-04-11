import React from "react";
import {
	Heading,
	CardHeader,
	Card,
	CardBody,
	SimpleGrid,
	Box,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import experienceDetails from "./../content/experienceDetails";

const Experience = () => {
	return (
		<Box p={4} color='white' bg='yellow.400'>
			<Heading size='xl' m={4} p={1} align='center'>
				Professional Experience
			</Heading>
			<SimpleGrid columns={2} spacing={10} m={5} p={5} minChildWidth='400px'>
				{experienceDetails.map((company, index) => (
					<Card bg='yellow.300' color='white' borderRadius='25' key={index}>
						<CardHeader>
							<Heading size='md' align='center'>
								{company.companyName}
							</Heading>
						</CardHeader>
						{company.jobResponsibilities.map((duty, id) => (
							<CardBody>
								<List key={id}>
									<ListItem>
										<ListIcon as={MdSettings} color='yellow.700' />
										{duty}
									</ListItem>
								</List>
							</CardBody>
						))}
					</Card>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Experience;
