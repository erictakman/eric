const theme = (() => {
	if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
		return localStorage.getItem("theme");
	}
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}
})();

if (theme === "light") {
	document.documentElement.classList.remove("dark");
} else if (theme === "dark") {
	document.documentElement.classList.add("dark");
}

window.localStorage.setItem("theme", theme);

const handleDark = () => {
	const element = document.documentElement;
	element.classList.add("dark");

	const isDark = element.classList.contains("dark");
	localStorage.setItem("theme", isDark && "dark");
};

const handleLight = () => {
	const element = document.documentElement;
	element.classList.remove("dark");

	localStorage.setItem("theme", "light");
};

document.getElementById("themeDark").addEventListener("click", handleDark);
document.getElementById("themeLight").addEventListener("click", handleLight);