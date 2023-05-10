import "./todo.css";

// build the to do section

const todo = (() => {
  const build = () => {
    console.log("todo ONLINE");
    const container = document.getElementById("mainContainer");

    // build grid for todo bars
    const todoGrid = document.createElement("div");
    todoGrid.classList.add("todoGrid");
    container.append(todoGrid);

    // build todo tab
    const todoTab = document.createElement("div");
    todoTab.classList.add("todoTab");
    todoGrid.append(todoTab);

    // build h3 for todo tab
    const todoH3 = document.createElement("h4");
    todoH3.classList.add("todoH3");
    todoH3.textContent = "To Do";
    todoTab.append(todoH3);

    // build flex for todo cards
    const todoFlex = document.createElement("div");
    todoFlex.classList.add("todoFlex");
    todoTab.append(todoFlex);

    // build first todo
    const todoEl = document.createElement("div");
    todoEl.classList.add("todoEl");
    todoEl.textContent = "This is your first task";
    todoFlex.append(todoEl);
  };

  return { build };
})();

export default todo;
