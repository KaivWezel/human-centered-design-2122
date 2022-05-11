console.log("hij werkt");

const prevBtn = document.querySelector("button.prevWeek");
const nextBtn = document.querySelector("button.nextWeek");
const weekDisplay = document.querySelector("#week");
const weekReader = document.querySelector(".week");
const week = document.querySelector(".weekScheme");
const weekInput = document.querySelector("#week");
let weekCount = 15;

weekInput.addEventListener("input", (e) => {
	if (weekInput.value > 52) {
		weekCount = 52;
	} else if (weekInput.value < 0) {
		weekCount = 1;
	} else {
		weekCount = weekInput.value;
	}
	console.log(weekCount);
	weekInput.value = weekCount;
	weekDisplay.value = weekCount;
	weekReader.innerText = `Week ${weekCount}`;
});

prevBtn.addEventListener("click", (e) => {
	if (weekCount <= 1) {
		weekCount = 52;
	} else {
		weekCount--;
	}
	weekDisplay.value = weekCount;
	weekReader.innerText = `Week ${weekCount}`;
	week.setAttribute("title", `Trainingsschema week ${weekCount}`);
});

nextBtn.addEventListener("click", (e) => {
	if (weekCount >= 52) {
		weekCount = 1;
	} else {
		weekCount++;
	}
	weekDisplay.value = weekCount;
	weekReader.innerText = `Week ${weekCount}`;
	week.setAttribute("title", `Trainingsschema week ${weekCount}`);
});
