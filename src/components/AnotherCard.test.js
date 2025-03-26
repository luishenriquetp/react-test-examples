import React from "react";
import ReactDOMClient from "react-dom";

import AnotherCard from "./AnotherCard";

it("renders without crashing", () => {
	const div = document.createElement("div");
	const root = ReactDOMClient.createRoot(div);
	root.render(<AnotherCard />, div);
});
