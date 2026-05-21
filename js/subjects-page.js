import { getAllSubjects } from "./data.js";
import { buildAvatarSlot } from "./avatar.js";

const subjects = await getAllSubjects();
const container = document.getElementById("subjectsGrid");

container.innerHTML = subjects
  .map(
    (s) => `
    <a class="subject-card" href="/subject/${s.id}">
      <div class="subject-card-preview">
        ${buildAvatarSlot(s.id, s.avatar)}
      </div>
      <div class="subject-card-body">
        <div class="subject-card-id">${s.label}</div>
        <div class="subject-card-mood">${s.mood}</div>
        <span class="subject-card-link">View profile →</span>
      </div>
    </a>
  `
  )
  .join("");
