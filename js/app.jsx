// React element
var message = <h1>Hello World</h1>;
var num = 0;

ReactDOM.render(
	message,
	document.getElementById("greeting");
)

function updateNum() {
	ReactDOM.render(
		<div>{num++}</div>,
		document.getElementById("root");
	)
}

setInterval(updateNum, 100);