import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
		</div>
	);
}
