import { loadData } from "./data.js";

const data = await loadData();

const datesEl = document.getElementById("eventDates");
const locationEl = document.getElementById("eventLocation");

if (datesEl) datesEl.textContent = data.event.dates;
if (locationEl) locationEl.textContent = data.event.location;
