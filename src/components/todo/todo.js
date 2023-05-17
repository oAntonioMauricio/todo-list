import "./todo.css";
import todoLogic from "../../appLogic/todoLogic";

// build the to do section

const todo = (() => {
  //

  // func to build html
  const buildHtml = (className, element, parent, text) => {
    const newEl = document.createElement(element);
    if (className) {
      newEl.classList.add(className);
    }
    newEl.textContent = text;
    parent.append(newEl);
    return newEl;
  };

  // main build func
  const build = () => {
    // eslint-disable-next-line no-console
    console.log("todo ONLINE");
    const container = document.getElementById("mainContainer");

    // build grid for todo bars
    const todoGrid = buildHtml("todoGrid", "div", container);
    todoGrid.setAttribute("id", "todoGrid");

    // build done tab
    const doneTab = buildHtml("todoTab", "div", todoGrid);

    // build h3 for done tab
    const doneH4 = buildHtml("todoH4", "h4", doneTab);
    doneH4.textContent = "Done";

    // build flex for done cards
    const doneFlex = buildHtml("todoFlex", "div", doneTab);
    doneFlex.setAttribute("id", "doneParent");

    // build done container
    const doneBox = buildHtml("todoBox", "div", doneFlex);

    // build first done
    const doneEl = buildHtml("todoEl", "div", doneBox);
    doneEl.textContent = "This task is done!";

    // eslint-disable-next-line no-use-before-define
    updateUi();
  };

  // func to build sections (name of the category: todo, done, etc..)
  const buildSection = (h4) => {
    const todoGrid = document.getElementById("todoGrid");

    // build todo tab
    const todoTab = buildHtml("todoTab", "div", todoGrid);

    // build h3 for todo tab
    const todoH4 = buildHtml("todoH4", "h4", todoTab);
    todoH4.textContent = h4;

    // build flex for todo cards
    const todoFlex = buildHtml("todoFlex", "div", todoTab);
    todoFlex.setAttribute("id", `${h4}Parent`);

    if (h4 !== "done") {
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

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("d", "M12 4.5v15m7.5-7.5h-15");

      svg.appendChild(path);
      newTodo.prepend(svg);

      // build text for button
      const textNewTodo = buildHtml("textNewTodo", "p", newTodo);
      textNewTodo.textContent = "Add Task";

      // ** EXTRA BUILD ** //
      // run modal build and append event to button arg //
      // eslint-disable-next-line no-use-before-define
      buildModal(newTodo);
    }
  };

  // func to build box (text + buttons)
  const todoComplete = (flexSection, text, index, section) => {
    // OLD CODE NEEDS REWORK //
    const newBox = buildHtml("todoBox", "div", flexSection);
    const newEl = buildHtml("todoEl", "div", newBox);
    newEl.textContent = text;
    newEl.setAttribute("data-index", index);
    newEl.setAttribute("section", section);
    const newOption = buildHtml("todoOption", "div", newBox);
    // OLD CODE NEEDS REWORK //

    // Svg size
    const svgSize = "20";

    // svg complete
    const svgComplete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgComplete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgComplete.setAttribute("fill", "none");
    svgComplete.setAttribute("viewBox", "0 0 24 24");
    svgComplete.setAttribute("stroke-width", "1.5");
    svgComplete.setAttribute("stroke", "currentColor");
    svgComplete.setAttribute("width", svgSize);
    svgComplete.setAttribute("height", svgSize);

    const completePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    completePath.setAttribute("stroke-linecap", "round");
    completePath.setAttribute("stroke-linejoin", "round");
    completePath.setAttribute("d", "M4.5 12.75l6 6 9-13.5");

    svgComplete.appendChild(completePath);
    if (section !== "done") {
      newOption.appendChild(svgComplete);
    }

    // svg edit
    const svgEdit = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgEdit.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgEdit.setAttribute("fill", "none");
    svgEdit.setAttribute("viewBox", "0 0 24 24");
    svgEdit.setAttribute("stroke-width", "1.5");
    svgEdit.setAttribute("stroke", "currentColor");
    svgEdit.setAttribute("width", svgSize);
    svgEdit.setAttribute("height", svgSize);

    const editPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    editPath.setAttribute("stroke-linecap", "round");
    editPath.setAttribute("stroke-linejoin", "round");
    editPath.setAttribute(
      "d",
      "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    );

    svgEdit.appendChild(editPath);
    newOption.appendChild(svgEdit);

    // svg delete
    const svgDelete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgDelete.setAttribute("fill", "none");
    svgDelete.setAttribute("viewBox", "0 0 24 24");
    svgDelete.setAttribute("stroke-width", "1.5");
    svgDelete.setAttribute("stroke", "currentColor");
    svgDelete.setAttribute("width", svgSize);
    svgDelete.setAttribute("height", svgSize);
    svgDelete.setAttribute("id", "svgDelete");

    const deletePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    deletePath.setAttribute("stroke-linecap", "round");
    deletePath.setAttribute("stroke-linejoin", "round");
    deletePath.setAttribute(
      "d",
      "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    );

    svgDelete.appendChild(deletePath);
    newOption.append(svgDelete);

    // eslint-disable-next-line no-use-before-define
    deleteModal();

    // *** event listeners ***

    // task done icon
    svgComplete.addEventListener("click", (e) => {
      console.log("task done... sending to db");
      const project = document
        .getElementById("projectTitle")
        .textContent.toLowerCase();
      const from = "todo";
      const moveIndex =
        e.target.parentNode.parentNode.firstChild.getAttribute("data-index");
      const to = "done";
      todoLogic.moveTodo(project, from, moveIndex, to);
      // eslint-disable-next-line no-use-before-define
      updateUi();
    });

    // modify todo icon
    svgEdit.addEventListener("click", () => {
      alert("Under maintenance. Sorry for the inconvenience.");
    });

    // delete/thrash icon
    svgDelete.addEventListener("click", (e) => {
      //
      // eslint-disable-next-line no-console
      console.log("Delete element clicked!");

      // overlay
      const modalOverlay = document.getElementById("deleteOverlay");
      modalOverlay.classList.toggle("hidden");

      // modal
      const deleteModal = document.getElementById("deleteSection");
      deleteModal.classList.toggle("hidden");

      // Delete text
      const textDisplay = document.getElementById("deleteText");
      const deleteText = e.target.parentNode.previousElementSibling.textContent;
      textDisplay.textContent = deleteText;
      const indexDisplay =
        e.target.parentNode.previousElementSibling.getAttribute("data-index");
      textDisplay.setAttribute("data-index", indexDisplay);
    });
  };

  // func to build the add new modal
  const buildModal = (button) => {
    // eslint-disable-next-line no-console
    console.log("modal ONLINE");

    const container = document.getElementById("mainContainer");

    // build section for modal
    const modalSection = buildHtml("modalSection", "section", container);
    modalSection.classList.add("hidden");

    // build div(overlay) for modal
    const modalOverlay = buildHtml("modalOverlay", "div", container);
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("id", "modalOverlay");

    // build div/flex for modal
    const modalDiv = buildHtml("modalDiv", "div", modalSection);

    // build h3
    const modalH3 = buildHtml("todoH4", "h4", modalDiv);
    modalH3.textContent = "Add Task";

    // build close button
    const closeDiv = buildHtml("closeDiv", "button", modalDiv);

    // build svg for close button
    const svgClose = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgClose.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgClose.setAttribute("fill", "none");
    svgClose.setAttribute("viewBox", "0 0 24 24");
    svgClose.setAttribute("stroke-width", "1.5");
    svgClose.setAttribute("stroke", "currentColor");
    svgClose.setAttribute("class", "svgClose");
    svgClose.setAttribute("width", "20"); // set width to 20px
    svgClose.setAttribute("height", "20"); // set height to 20px

    const closePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    closePath.setAttribute("stroke-linecap", "round");
    closePath.setAttribute("stroke-linejoin", "round");
    closePath.setAttribute("d", "M6 18L18 6M6 6l12 12");

    svgClose.appendChild(closePath);
    closeDiv.append(svgClose);

    // build form
    const todoForm = buildHtml("todoForm", "form", modalSection);
    todoForm.setAttribute("id", "todoForm");

    // build div for title
    const titleDiv = buildHtml("formDiv", "div", todoForm);

    // build label and input for title
    // eslint-disable-next-line no-unused-vars
    const titleLabel = buildHtml("titleLabel", "label", titleDiv, "Title");
    titleLabel.setAttribute("for", "title");
    // eslint-disable-next-line no-unused-vars
    const titleInput = buildHtml("titleInput", "input", titleDiv);
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";

    // build div for dueDate
    const dateDiv = buildHtml("formDiv", "div", todoForm);

    // build label and input for dueDate
    // eslint-disable-next-line no-unused-vars
    const dateLabel = buildHtml("dateLabel", "label", dateDiv, "Due Date");
    dateLabel.setAttribute("for", "date");
    // eslint-disable-next-line no-unused-vars
    const dateInput = buildHtml("dateInput", "input", dateDiv);
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";

    // build div for priority
    const priorDiv = buildHtml("formDiv", "div", todoForm);

    // build label and input for priority
    // eslint-disable-next-line no-unused-vars
    const priorLabel = buildHtml("priorLabel", "label", priorDiv, "Priority");
    const priorSet = buildHtml("priorSet", "div", priorDiv);

    // build div for high label and input
    const highPriorDiv = buildHtml("priorFlex", "div", priorSet);

    // create a radio button element for the "High" priority level
    const highPrior = buildHtml(null, "input", highPriorDiv);
    highPrior.type = "checkbox";
    highPrior.id = "high";
    highPrior.name = "priority";
    highPrior.value = "high";

    // create a label element for the "High" priority level radio button
    const highPriorLabel = buildHtml(null, "label", highPriorDiv);
    highPriorLabel.textContent = "High";
    highPriorLabel.setAttribute("for", "high");

    // build div for medium label and input
    const medPriorDiv = buildHtml("priorFlex", "div", priorSet);

    // create a radio button element for the "Medium" priority level
    const medPrior = buildHtml(null, "input", medPriorDiv);
    medPrior.type = "checkbox";
    medPrior.id = "medium";
    medPrior.name = "priority";
    medPrior.value = "medium";

    // create a label element for the "Medium" priority level radio button
    const medPriorLabel = buildHtml(null, "label", medPriorDiv);
    medPriorLabel.textContent = "Medium";
    medPriorLabel.setAttribute("for", "medium");

    // build div for low label and input
    const lowPriorDiv = buildHtml("priorFlex", "div", priorSet);

    // create a radio button element for the "Low" priority level
    const lowPrior = buildHtml(null, "input", lowPriorDiv);
    lowPrior.type = "checkbox";
    lowPrior.id = "low";
    lowPrior.name = "priority";
    lowPrior.value = "low";

    // create a label element for the "Low" priority level radio button
    const lowPriorLabel = buildHtml(null, "label", lowPriorDiv);
    lowPriorLabel.textContent = "Low";
    lowPriorLabel.setAttribute("for", "low");

    // create submit button
    // eslint-disable-next-line no-unused-vars
    const submitForm = buildHtml("submitForm", "button", todoForm, "Submit");
    submitForm.setAttribute("form", "todoForm");
    submitForm.setAttribute("type", "submit");

    // **** Event Listeners **** //

    // toggle modal on newTodo button
    button.addEventListener("click", () => {
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
      titleInput.focus();
    });

    // toggle modal on overlay
    modalOverlay.addEventListener("click", () => {
      modalSection.classList.add("hidden");
      modalOverlay.classList.add("hidden");
      todoForm.reset();
    });

    // toggle modal on close button
    closeDiv.addEventListener("click", () => {
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
      todoForm.reset();
    });

    // submit form
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-console
      console.log("sending to logic...");
      const title = titleInput.value;
      const date = dateInput.value;
      const priority = {
        high: highPrior.checked,
        med: medPrior.checked,
        low: lowPrior.checked,
      };

      // actions after submiting
      todoLogic.createTodo({ title, date, priority });
      // eslint-disable-next-line no-use-before-define
      updateUi();
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
      todoForm.reset();
    });
  };

  // func to build the delete modal
  const deleteModal = () => {
    const container = document.getElementById("mainContainer");

    // build section for modal
    const modalSection = buildHtml("modalSection", "section", container);
    modalSection.classList.add("hidden");
    modalSection.setAttribute("id", "deleteSection");

    // build div(overlay) for modal
    const modalOverlay = buildHtml("modalOverlay", "div", container);
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("id", "deleteOverlay");

    // build div/flex for modal
    const modalDiv = buildHtml("modalDiv", "div", modalSection);

    // build h3
    const modalH3 = buildHtml("todoH4", "h4", modalDiv);
    modalH3.textContent = "Delete The Task?";

    // build close button
    const closeDiv = buildHtml("closeDiv", "button", modalDiv);

    // build svg for close button
    const svgClose = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgClose.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgClose.setAttribute("fill", "none");
    svgClose.setAttribute("viewBox", "0 0 24 24");
    svgClose.setAttribute("stroke-width", "1.5");
    svgClose.setAttribute("stroke", "currentColor");
    svgClose.setAttribute("class", "svgClose");
    svgClose.setAttribute("width", "20"); // set width to 20px
    svgClose.setAttribute("height", "20"); // set height to 20px

    const closePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    closePath.setAttribute("stroke-linecap", "round");
    closePath.setAttribute("stroke-linejoin", "round");
    closePath.setAttribute("d", "M6 18L18 6M6 6l12 12");

    svgClose.appendChild(closePath);
    closeDiv.append(svgClose);

    // Create text from task
    const todoText = buildHtml("deleteText", "div", modalSection);
    todoText.textContent = "text here";
    todoText.setAttribute("id", "deleteText");

    // create submit button
    const confirmDelete = buildHtml(
      "submitForm",
      "button",
      modalSection,
      "Confirm"
    );

    // *** event listeners ***

    // toggle modal on overlay
    modalOverlay.addEventListener("click", () => {
      modalSection.classList.add("hidden");
      modalOverlay.classList.add("hidden");
    });

    // toggle modal on close button
    closeDiv.addEventListener("click", () => {
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
    });

    // delete method
    confirmDelete.addEventListener("click", () => {
      // eslint-disable-next-line no-console
      console.log("sending delete index to db...");
      const taskToDelete = document.getElementById("deleteText");
      todoLogic.deleteTodo("todo", taskToDelete.getAttribute("data-index"));
      // eslint-disable-next-line no-use-before-define
      updateUi();
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
    });
  };

  // func to update ui
  const updateUi = (data = todoLogic.getData()) => {
    //
    const parent = document.getElementById("todoGrid");

    // remove every todo
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    // build all from DB
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in data) {
      const project = data[key];
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const section in project) {
        buildSection(section);
        const array = project[section];
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const task in array) {
          const flexSection = document.getElementById(`${section}Parent`);
          const { title } = array[task];
          const index = task;
          const Attsection = `${section}`;
          todoComplete(flexSection, title, index, Attsection);
        }
      }
    }
  };

  // func to delete ui

  return { build, updateUi };
})();

export default todo;
