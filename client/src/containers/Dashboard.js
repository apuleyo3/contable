import React from "react";
// Defaults HOC: Header, Sidebar and Main
import Default from "./DefaultIndex";
// Import navbar component
import Navbar from "./Navbar";
// Import context for dropdown menu
import NavbarContext from '../contexts/Navbar/NavbarContext';
// Default container styled-component
import DefaultContainer from "../layout/Globals/Container.style";
// Se importa Main, aquí debe ir una fnción que muestre el main según onClink del sidebar
import MainContainer from "./MainContainer"

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

						<MainContainer>Main</MainContainer>
						
					</Default.Main>
				</div>
			</div>
		</DefaultContainer>
	);
};

export default Dashboard;
