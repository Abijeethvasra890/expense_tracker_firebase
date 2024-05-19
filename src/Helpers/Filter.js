

export const filterByDate = (todos, fromDate, toDate) => {
    const filteredTodos = todos.filter((todo) => {
        if (fromDate && toDate) {
          return todo.dueDate >= fromDate && todo.dueDate <= toDate;
        }
      });
     // console.log(filteredTodos);
      return filteredTodos;
};