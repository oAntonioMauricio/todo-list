// todo object to create / update todo list
const todoLogic = (() => {
  //
  const saveTodo = {
    projects: [],
  };

  const createTodo = (title, dueDate, priority) => {
    console.log("running Logic...");
    saveTodo.projects.push({ title, dueDate, priority });
    console.log(saveTodo.projects);
  };

  const getData = () => saveTodo;

  return { createTodo, getData };
})();

export default todoLogic;
