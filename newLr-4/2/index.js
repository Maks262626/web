function displayCurrentDate() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    const dateElement = document.getElementById("date");

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const dayOfWeek = daysOfWeek[date.getDay()];

    dateElement.textContent = `${year}:${month.toString().padStart(2, "0")}:${day.toString().padStart(2, "0")}, ${dayOfWeek} ${currentTime}`;

    setTimeout(displayCurrentDate, 1000);
}
  

  displayCurrentDate();
  