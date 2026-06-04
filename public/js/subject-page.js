import { getSubject } from "./data.js";
import { buildAvatarSlot, buildStoryBlock, formatDate } from "./avatar.js";

const pathMatch = window.location.pathname.match(/\/subject\/([^/]+)/);
const params = new URLSearchParams(window.location.search);
const id = pathMatch?.[1] || params.get("id");
const main = document.getElementById("subjectMain");

if (!id) {
  main.innerHTML = `
    <div class="not-found">
      <h1>Subject Not Found</h1>
      <p>No valid subject ID was provided.</p>
      <a class="btn btn-primary" href="/">Back to Home</a>
    </div>
  `;
} else {
  const subject = await getSubject(id);

  if (!subject) {
    main.innerHTML = `
      <div class="not-found">
        <h1>Subject #${id} Not Found</h1>
        <p>No avatar is registered with this ID.</p>
        <a class="btn btn-primary" href="/">Back to Home</a>
      </div>
    `;
  } else {
    main.innerHTML = `
      <div class="subject-layout">
        <aside class="subject-portrait-wrap">
          ${buildAvatarSlot(subject.id, subject.avatar)}
          <div class="subject-meta-block">
            <div class="subject-meta-row">
              <span>Observed</span>
              <span>${formatDate(subject.observedAt)}</span>
            </div>
            <div class="subject-meta-row">
              <span>Location</span>
              <span>${subject.location}</span>
            </div>
          </div>
        </aside>

        <article class="subject-content">
          <h1>${subject.label}</h1>
          <p class="subject-subtitle">${subject.mood} · Interpreted by The Eye</p>

          ${buildStoryBlock(subject.id, subject.story)}

          <p class="subject-note">
            Your appearance was not photographed or stored. The Eye translated what was
            visually present into a text-based description, then into this avatar.
          </p>

          <div class="subject-ethics-cta">
            <a class="btn" href="/#faq">FAQ</a>
            <a class="btn" href="/ethics.html">KVKK</a>
          </div>
        </article>
      </div>
    `;

    document.title = `${subject.label} | The Eye`;
  }
}
