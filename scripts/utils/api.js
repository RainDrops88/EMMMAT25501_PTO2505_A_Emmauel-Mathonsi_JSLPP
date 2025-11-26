export async function initialTasks() {
    try {
        const response = await fetch('https://jsl-kanban-api.vercel.app');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch initial tasks:', error);
        return [];
    }
}

