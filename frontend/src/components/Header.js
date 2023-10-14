import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar variant="dark" bg="primary">
				<Container>
					<Navbar.Brand href="/">IoH Staff</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							Signed in as: <a href="#login">Mark Otto</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;

/*
			<Navbar bg="dark" variant="dark" expand="md">
				<Container>
					<Navbar.Brand href="/">IoH Staff</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							Signed in as: <a href="#profile">Mark Otto</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
*/
