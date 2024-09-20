import path from "path";
const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const XKCD = [
  [1240, "Quantum Mechanics"],
  [2200, "Unreachable State"],
  [1591, "Bell's Theorem"],
  [872, "Fairy Tales"],
  [2028, "Complex Numbers"],
  [435, "Purity"],
  [538, "Security"],
  [177, "Alice and Bob"]
];

export const randomXkcd = () => {
  const xkcd = XKCD[Math.floor(Math.random() * XKCD.length)];
  return {
    "src": "https://imgs.xkcd.com/comics/" + xkcd[1].toLowerCase().split(' ').join('_').replace("'", '') + ".png",
    "href": "https://xkcd.com/" + xkcd[0] + '/',
    "name": xkcd[1],
  };
}

export const toTitleCase = (str: string) =>
	str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});

export const getMonthName = (date: Date) => MONTHS[new Date(date).getMonth()];

export const getSlugFromPathname = (pathname: string) =>
	path.basename(pathname, path.extname(pathname));
