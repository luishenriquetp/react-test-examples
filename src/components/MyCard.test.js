import React from "react";
import ReactDOMClient from "react-dom";

import MyCard from "./MyCard";

it("renders without crashing", () => {
	const div = document.createElement("div");
	const root = ReactDOMClient.createRoot(div);
	root.render(<MyCard />, div);
});
