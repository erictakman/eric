
const handleToggleClick = () => {
	const menu = document.querySelector("#menu");
	menu.classList.toggle("unexpanded");
}

document.querySelector("#toggle").addEventListener("click", handleToggleClick);
