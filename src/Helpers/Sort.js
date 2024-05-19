
export const sortTodosByPriority = (todos) => {
    const sortedTodos = [...todos].sort((a, b) => a.priority.localeCompare(b.priority));
    return sortedTodos;
  };

  export const sortTodosByDate = (todos) => {
    const sortedTodos = [...todos].sort((a, b) => new Date(a.dueDate)- new Date(b.dueDate));
    return sortedTodos;
  };
  