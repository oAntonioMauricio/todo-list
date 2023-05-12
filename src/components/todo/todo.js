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

    // build newTodo button
    const newTodo = buildHtml("newTodo", "button", todoTab);

    // build svg icon on the button
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("fill", "none");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("class", "svgNewTodo");
    svg.setAttribute("width", "20"); // set width to 20px
    svg.setAttribute("height", "20"); // set height to 20px

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("d", "M12 4.5v15m7.5-7.5h-15");

    svg.appendChild(path);
    newTodo.prepend(svg);

    // build text for button
    const textNewTodo = buildHtml("textNewTodo", "p", newTodo);
    textNewTodo.textContent = "Add Task";
  };

  return { build };
})();

export default todo;
