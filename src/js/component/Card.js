import React from "react";
import PropTypes from "prop-types";
// Card Component
const Card = props => {
	return (
		<div className="card w-25 d-flex justify-content-center float-left">
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image cap"></img>
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="card-footer text-muted d-flex justify-content-center">
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};

export default Card;
