// todo object to create / update todo list
const todoLogic = (() => {
  //
  const saveTodo = {
    projects: {
      todo: [
        {
          title: "Your first task!",
          date: "2023-05-20",
          priority: {
            high: false,
            med: false,
            low: true,
          },
        },
      ],
      done: [],
    },
    house: {
      todo: [
        {
          title: "Welcome to your new project!",
          date: "2023-05-20",
          priority: {
            high: false,
            med: true,
            low: false,
          },
        },
      ],
      done: [],
    },
  };

  // create and add todo to DB
  const createTodo = (project, data) => {
    if (typeof data === "object") {
      // eslint-disable-next-line no-console
      console.log("Running Logic...");
      saveTodo[project].todo.push(data);
      // eslint-disable-next-line no-console
      console.log(saveTodo);
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
    // eslint-disable-next-line no-console
    console.log(saveTodo);
  };

  // update Todo
  const updateTodo = (project, from, index, data) => {
    if (typeof data === "object") {
      // eslint-disable-next-line no-console
      console.log("Updating todo in db...");
      saveTodo[project][from][index] = data;
      // eslint-disable-next-line no-console
      console.log(saveTodo);
    } else {
      // eslint-disable-next-line no-console
      console.log("Invalid argument. Please provide an object.");
    }
  };

  // delete task from DB
  const deleteTodo = (project, category, index) => {
    // eslint-disable-next-line no-console
    console.log("deleting entry from DB...");
    saveTodo[project][category].splice(index, 1);
    // eslint-disable-next-line no-console
    console.log(saveTodo);
  };

  // create a new category
  const createCategory = (name) => {
    saveTodo[name] = {
      todo: [
        {
          title: "Welcome to your new project!",
          date: "2023-05-20",
          priority: {
            high: false,
            med: true,
            low: false,
          },
        },
      ],
      done: [],
    };
    // eslint-disable-next-line no-console
    console.log(saveTodo);
  };

  const getOneTodo = (project, from, index) => saveTodo[project][from][index];

  const getData = () => saveTodo;

  return {
    createTodo,
    moveTodo,
    updateTodo,
    deleteTodo,
    createCategory,
    getOneTodo,
    getData,
  };
})();

export default todoLogic;
