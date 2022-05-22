const header = document.getElementById("main-header");
const inputField = document.getElementById("search-input");
const links = document.getElementsByClassName("link");

const startTime = () => {
  const today = new Date();
  const time = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const weekDay = today.getDay();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  header.innerHTML = `${time}, ${weekDays[weekDay]}`;
  setTimeout(startTime, 1000);
};

startTime();

for (i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseenter", (link) => {
    link.target.lastElementChild.style.width = '100%'
  });
  links[i].addEventListener("mouseleave", (link) => {
    link.target.lastElementChild.style.width = '0%'
  });
}

const search = () => {
  window.location.href = "https://yandex.ru/search?text=" + encodeURI(inputField.value);
};

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    search();
  }
});
