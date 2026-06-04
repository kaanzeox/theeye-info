export function avatarPath(id, customPath = "") {
  if (customPath) return customPath;
  return `/avatars/${id}.png`;
}

export function buildStoryBlock(id, storyPath) {
  const fileName = `the-eye-story-${id}.png`;
  return `
    <div class="story-block">
      <h2>Social Media Image</h2>
      <div class="story-preview">
        <img src="${storyPath}" alt="The Eye story for Subject #${id}" loading="lazy" />
      </div>
      <a class="btn btn-primary" href="${storyPath}" download="${fileName}">Download Image</a>
    </div>
  `;
}

export function buildAvatarSlot(id, src = "") {
  const path = src || avatarPath(id);
  return `
    <div class="avatar-slot" data-subject="${id}">
      <img
        class="avatar-img"
        src="${path}"
        alt="Subject #${id}"
        onerror="this.closest('.avatar-slot').classList.add('is-empty')"
      />
      <span class="avatar-placeholder-label">Avatar</span>
    </div>
  `;
}

export function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
