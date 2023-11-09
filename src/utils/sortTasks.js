export const sortTasks = (tasks) => {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 3, Moderate: 2, Low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
}