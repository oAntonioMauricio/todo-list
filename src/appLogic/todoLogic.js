// todo object to create / update todo list
const todoLogic = (() => {
  //
  const saveTodo = {
    projects: { todo: [], done: [] },
  };

  const createTodo = (data) => {
    if (typeof data === "object") {
      console.log("Running Logic...");
      saveTodo.projects.todo.push(data);
      console.log(saveTodo.projects);
    } else {
      console.log("Invalid argument. Please provide an object.");
    }
  };

  const getData = () => saveTodo;

  return { createTodo, getData };
})();

export default todoLogic;
