console.log("hij werkt");

const prevBtn = document.querySelector("button.prevWeek");
const nextBtn = document.querySelector("button.nextWeek");
const weekDisplay = document.querySelector(".week");
const week = document.querySelector(".weekScheme");
let weekCount = 15;

prevBtn.addEventListener("click", (e) => {
	weekCount--;
	weekDisplay.innerText = `Week ${weekCount}`;
	week.setAttribute("title", `Trainingsschema week ${weekCount}`);
});

nextBtn.addEventListener("click", (e) => {
	weekCount++;
	weekDisplay.innerText = `Week ${weekCount}`;
	week.setAttribute("title", `Trainingsschema week ${weekCount}`);
});
