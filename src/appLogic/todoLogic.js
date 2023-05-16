// todo object to create / update todo list
const todoLogic = (() => {
  //
  const saveTodo = {
    projects: { todo: [], done: [] },
  };

  // create and add todo to DB
  const createTodo = (data) => {
    if (typeof data === "object") {
      // eslint-disable-next-line no-console
      console.log("Running Logic...");
      saveTodo.projects.todo.push(data);
      // eslint-disable-next-line no-console
      console.log(saveTodo.projects);
    } else {
      // eslint-disable-next-line no-console
      console.log("Invalid argument. Please provide an object.");
    }
  };

  // move Todo
  const moveTodo = (project, from, index, to) => {
    // eslint-disable-next-line no-console
    console.log("moving todo to a differente category");
    const todoMoving = saveTodo[project][from].splice(index, 1)[0];
    saveTodo[project][to].push(todoMoving);
    console.log(saveTodo);
  };

  // delete task from DB
  const deleteTodo = (category, index) => {
    // eslint-disable-next-line no-console
    console.log("deleting entry from DB...");
    saveTodo.projects[category].splice(index, 1);
    // eslint-disable-next-line no-console
    console.log(saveTodo.projects);
  };

  const getData = () => saveTodo;

  return { createTodo, moveTodo, deleteTodo, getData };
})();

export default todoLogic;
