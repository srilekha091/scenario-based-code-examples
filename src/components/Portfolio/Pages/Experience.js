import React from "react";
import {
	Heading,
	CardHeader,
	Card,
	CardBody,
	SimpleGrid,
	Box,
	CardFooter,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import ExperienceDetails from "./../content/experienceDetails";

const Experience = () => {
	return (
		<Box p={4} color='white' bg='yellow.400'>
			<Heading size='xl' m={4} p={1} align='center'>
				Professional Experience
			</Heading>
			<SimpleGrid columns={2} spacing={10} m={5} p={5} minChildWidth='400px'>
				<Card bg='yellow.300' color='white' borderRadius='25'>
					<CardHeader>
						<Heading size='md' align='center'>
							A Place for Mom
						</Heading>
					</CardHeader>
					<CardBody>
						<List spacing={3}>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />
								Building features using React components, lifecycle methods,
								forms, events, states, props, keys and routing to build and
								extend the capabilities of the company’s internal portal.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />
								Built a new internal front-end application using React.js and
								TypeScript that resulted in better user engagement and
								application functionality.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />
								Leveraged React Router's routing capabilities and Redux state
								management to build a dynamic Single Page Application, allowing
								users to explore different functionalities effortlessly.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />- Implemented
								automated testing and debugging tools, reducing the number of
								bugs by 40% and improving overall code quality by 30%.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />- Collaborated
								with cross-functional teams to develop and execute projects
								within scope and budget, effectively communicating progress and
								objectives using JIRA.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />- Developed an
								event-driven pipeline using AWS Lambda and Amazon S3 to
								automatically transcribe customer consent disclosures over
								calls.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />- Maintained and
								enhanced a legacy service (C# backend, JavaScript frontend,
								PostgreSQL) while implementing new business requirements as a
								transition to React.js was underway.
							</ListItem>
						</List>
					</CardBody>
					<CardFooter></CardFooter>
				</Card>
				<Card bg='yellow.300' color='white' borderRadius='25'>
					<CardHeader>
						<Heading size='md' align='center'>
							Tempered Networks
						</Heading>
					</CardHeader>
					<CardBody>
						<List>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />- Rebuilt the
								website using Angular 2, HTML and CSS to improve the aesthetics
								of the website and reduce page load time.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />- Integrated the
								UI with the RESTful Web Service provided by the backend team and
								updated the UI in real time.
							</ListItem>
							<ListItem>
								<ListIcon as={MdSettings} color='yellow.700' />- Leveraged agile
								methodology to automate tasks and maintain code quality while
								developing web-frontend application.
							</ListItem>
						</List>
					</CardBody>
					<CardFooter></CardFooter>
				</Card>
			</SimpleGrid>
		</Box>
	);
};

export default Experience;
