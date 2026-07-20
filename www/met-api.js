// Кеширование запросов в localStorage
export async function getMetObject(id) {
    const cacheKey = `met-${id}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
}