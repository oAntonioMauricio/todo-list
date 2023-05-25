// todo object to create / update todo list
const todoLogic = (() => {
  // save storage key name
  const LOCAL_STORAGE_KEY = "saveTodo";

  // Load data from local storage
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData
      ? JSON.parse(savedData)
      : [
          {
            title: "projects",
            categories: {
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
          },
          {
            title: "house",
            categories: {
              todo: [
                {
                  title: "Welcome to your new project!",
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
          },
        ];
  };

  // Save data to local storage
  const saveToLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  // Initialize data from local storage or use default
  const saveTodo = loadFromLocalStorage();

  // create and add todo to DB
  const createTodo = (project, data) => {
    if (typeof data === "object") {
      // eslint-disable-next-line no-console
      console.log("Running Logic...");
      saveTodo[project].categories.todo.push(data);
      // eslint-disable-next-line no-console
      console.log(saveTodo);
      // send do local storage
      saveToLocalStorage(saveTodo);
    } else {
      // eslint-disable-next-line no-console
      console.log("Invalid argument. Please provide an object.");
    }
  };

  // move/check Todo
  const moveTodo = (projectIndex, from, index, to) => {
    // eslint-disable-next-line no-console
    console.log("moving todo to a differente category");
    const todoMoving = saveTodo[projectIndex].categories[from].splice(
      index,
      1
    )[0];
    saveTodo[projectIndex].categories[to].push(todoMoving);
    // eslint-disable-next-line no-console
    console.log(saveTodo);
    // send do local storage
    saveToLocalStorage(saveTodo);
  };

  // update Todo
  const updateTodo = (project, from, index, data) => {
    if (typeof data === "object") {
      // eslint-disable-next-line no-console
      console.log("Updating todo in db...");
      saveTodo[project].categories[from][index] = data;
      // eslint-disable-next-line no-console
      console.log(saveTodo);
      // send do local storage
      saveToLocalStorage(saveTodo);
    } else {
      // eslint-disable-next-line no-console
      console.log("Invalid argument. Please provide an object.");
    }
  };

  // delete task from DB
  const deleteTodo = (projectIndex, category, index) => {
    // eslint-disable-next-line no-console
    console.log("deleting entry from DB...");
    saveTodo[projectIndex].categories[category].splice(index, 1);
    // eslint-disable-next-line no-console
    console.log(saveTodo);
    // send do local storage
    saveToLocalStorage(saveTodo);
  };

  // create a new category
  const createCategory = (name) => {
    // eslint-disable-next-line no-console
    console.log("creating new category in db...");
    saveTodo.push({
      title: name,
      categories: {
        todo: [],
        done: [],
      },
    });
    // eslint-disable-next-line no-console
    console.log(saveTodo);
    // send do local storage
    saveToLocalStorage(saveTodo);
  };

  // edit category name
  const editCategory = (index, newName) => {
    // eslint-disable-next-line no-console
    console.log("editing category name...");
    saveTodo[index].title = newName;
    // eslint-disable-next-line no-console
    console.log(saveTodo);
    // send do local storage
    saveToLocalStorage(saveTodo);
  };

  // delete category
  const deleteCategory = (index) => {
    // eslint-disable-next-line no-console
    console.log("deleting category in db...");
    saveTodo.splice(index, 1);
    // eslint-disable-next-line no-console
    console.log(saveTodo);
    // send do local storage
    saveToLocalStorage(saveTodo);
  };

  const getOneTodo = (project, from, index) =>
    saveTodo[project].categories[from][index];

  const getData = () => saveTodo;

  return {
    createTodo,
    moveTodo,
    updateTodo,
    deleteTodo,
    createCategory,
    editCategory,
    deleteCategory,
    getOneTodo,
    getData,
  };
})();

export default todoLogic;
