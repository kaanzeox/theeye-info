export function avatarPath(id, customPath = "") {
  if (customPath) return customPath;
  return `/assets/avatars/${id}.png`;
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
