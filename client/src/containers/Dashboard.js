import React from "react";
// Defaults HOC: Header, Sidebar and Main
import Default from "./DefaultIndex";
// Import navbar component
import Navbar from "./Navbar";
// Import context for dropdown menu
import NavbarContext from '../contexts/NavbarContext';
import MainContext from '../contexts/MainContext';
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
					<MainContext>
						<Default.Sidebar>
							<NavbarContext>
								<Navbar />
							</NavbarContext>
						</Default.Sidebar>
						<Default.Main>
							<MainContainer />
						</Default.Main>
					</MainContext>
				</div>
			</div>
		</DefaultContainer>
	);
};

export default Dashboard;
