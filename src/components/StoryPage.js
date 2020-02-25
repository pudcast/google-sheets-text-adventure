import React from "react";
import { Link, useParams } from "react-router-dom";

const formatCommaSeperatedData = arrayOfData =>
	arrayOfData
		.split(",")
		.map(choice => choice.trim())
		.filter(choice => choice !== "");

const StoryPage = ({ storyData }) => {
	const { id } = useParams();
	const correctPageData = storyData.find(story => story.url === id);
	if (!correctPageData || correctPageData.length < 1) {
		return (
			<div className="container">
				<p>This doesn't look right...</p>
				<Link to="/" className="link-btn">
					Return to home
				</Link>
			</div>
		);
	}
	const { title, content, choices, image, paths } = correctPageData;
	const formattedChoices = formatCommaSeperatedData(choices);
	const formattedPaths = formatCommaSeperatedData(paths);
	return (
		<div className="container">
			{title && <h1>{title}</h1>}
			{content && <p className="content">{content}</p>}
			{image && <img src={image} alt="" />}
			{formattedChoices.length > 0 &&
				formattedChoices.map((choice, index) => (
					<Link
						to={formattedPaths[index]}
						className="link-btn"
						key={choice}
					>
						{choice}
					</Link>
				))}
		</div>
	);
};

export default StoryPage;
