import React from "react";
// Defaults HOC: Header, Sidebar and Main
import Default from "../Default/index";
// Import navbar component
import Navbar from "./Navbar/Navbar";
// Import context for dropdown menu
import NavbarContext from '../../contexts/Navbar/NavbarContext';
// Default container styled-component
import DefaultContainer from "../../layout/Default/Container.style";

const Dashboard = () => {
	return (
		<DefaultContainer>
			<div className="container-fluid">
				<Default.Header />
				<div className="row">
					<Default.Sidebar>
						<NavbarContext>
							<Navbar />
						</NavbarContext>
					</Default.Sidebar>
					<Default.Main>
						<h3>Main</h3>
					</Default.Main>
				</div>
			</div>
		</DefaultContainer>
	);
};

export default Dashboard;