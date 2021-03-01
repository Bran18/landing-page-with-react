import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<Card
					imageUrl="https://dummyimage.com/500x325/000/fff"
					title="Title 1"
					description="This is the description of the first card"
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
				<Card
					imageUrl="https://dummyimage.com/500x325/000/fff"
					title="Title 2"
					description="This is the description of the second card"
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
				<Card
					imageUrl="https://dummyimage.com/500x325/000/fff"
					title="Title 3"
					description="This is the description of the third card"
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
				<Card
					imageUrl="https://dummyimage.com/500x325/000/fff"
					title="Title 4"
					description="This is the description of the forth card"
					buttonUrl="#"
					buttonLabel="Find Out More!"
				/>
				<Footer />
			</div>
		</div>
	);
}
