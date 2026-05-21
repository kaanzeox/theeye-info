let cache = null;

export async function loadData() {
  if (cache) return cache;
  const res = await fetch("/data/subjects.json");
  if (!res.ok) throw new Error("Failed to load data");
  cache = await res.json();
  return cache;
}

export async function getSubject(id) {
  const data = await loadData();
  return data.subjects.find((s) => s.id === id) ?? null;
}

export async function getAllSubjects() {
  const data = await loadData();
  return data.subjects;
}
