console.log("hij werkt");

const prevBtn = document.querySelector("button.prevWeek");
const nextBtn = document.querySelector("button.nextWeek");
const weekDisplay = document.querySelector(".week");
const week = document.querySelector(".weekScheme");
let weekCount = 15;

prevBtn.addEventListener("click", (e) => {
	if (weekCount <= 1) {
		weekCount = 52;
	} else {
		weekCount--;
	}
	weekDisplay.innerText = `Week ${weekCount}`;
	week.setAttribute("title", `Trainingsschema week ${weekCount}`);
});

nextBtn.addEventListener("click", (e) => {
	if (weekCount >= 52) {
		weekCount = 1;
	} else {
		weekCount++;
	}
	weekDisplay.innerText = `Week ${weekCount}`;
	week.setAttribute("title", `Trainingsschema week ${weekCount}`);
});
