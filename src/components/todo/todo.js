import "./todo.css";

// build the to do section

const todo = (() => {
  const build = () => {
    console.log("todo ONLINE");
    const container = document.getElementById("mainContainer");

    // func to build html
    const buildHtml = (className, element, parent) => {
      const newEl = document.createElement(element);
      newEl.classList.add(className);
      parent.append(newEl);
      return newEl;
    };

    // build grid for todo bars
    const todoGrid = buildHtml("todoGrid", "div", container);

    // build todo tab
    const todoTab = buildHtml("todoTab", "div", todoGrid);

    // build h3 for todo tab
    const todoH4 = buildHtml("todoH4", "h4", todoTab);
    todoH4.textContent = "To Do";

    // build flex for todo cards
    const todoFlex = buildHtml("todoFlex", "div", todoTab);

    // build first todo
    const todoEl = buildHtml("todoEl", "div", todoFlex);
    todoEl.textContent = "This is your first task.";

    // build done tab
    const doneTab = buildHtml("todoTab", "div", todoGrid);

    // build h3 for todo tab
    const doneH4 = buildHtml("todoH4", "h4", doneTab);
    doneH4.textContent = "Done";

    // build flex for todo cards
    const doneFlex = buildHtml("todoFlex", "div", doneTab);

    // build first todo
    const doneEl = buildHtml("todoEl", "div", doneFlex);
    doneEl.textContent = "This task is done!";
  };

  return { build };
})();

export default todo;
