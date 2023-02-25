var React = require("react");
var ReactDOM = require("react-dom");

// ReactDOM.render(WHAT TO SharedWorker, WHERE TO SHOW IT);
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// Javascript code to generate the same H1 element
var h1 = document.createElement("h1");
h1.innerHTML = "Hello wolrd!";
document.getElementById("root").appendChild(h1);
