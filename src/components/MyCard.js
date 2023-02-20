import React from "react";

const MyCard = () => {
	const [counter, setCounter] = React.useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<p>Counter: {counter}</p>
			<button onClick={handleClick}>Increment</button>
		</div>
	);
};

export default MyCard;
