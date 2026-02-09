export async function fetchData() {
  try {
    const response = await fetch('https://jsl-kanban-api.vercel.app');
    const data = await response.json();
   return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
