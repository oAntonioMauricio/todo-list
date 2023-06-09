import "./todo.css";
import { parseISO, format } from "date-fns";
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

    // ** EXTRA BUILD ** //
    // eslint-disable-next-line no-use-before-define
    buildModal();
    // eslint-disable-next-line no-use-before-define
    deleteModal();

    // eslint-disable-next-line no-use-before-define
    updateUi();
  };

  // func to build the add new/update modal
  const buildModal = () => {
    // eslint-disable-next-line no-console
    console.log("modal ONLINE");

    const container = document.getElementById("mainContainer");

    // build section for modal
    const modalSection = buildHtml("modalSection", "section", container);
    modalSection.classList.add("hidden");
    modalSection.setAttribute("id", "modalSection");

    // build div(overlay) for modal
    const modalOverlay = buildHtml("modalOverlay", "div", container);
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("id", "modalOverlay");

    // build div/flex for modal
    const modalDiv = buildHtml("modalDiv", "div", modalSection);

    // build h3
    const modalH3 = buildHtml("todoH4", "h4", modalDiv);
    modalH3.textContent = "Add Task";
    modalH3.setAttribute("id", "modalH4");

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
    titleInput.required = true;

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
    submitForm.setAttribute("id", "submitButton");

    // **** Event Listeners **** //

    // toggle modal on overlay
    modalOverlay.addEventListener("click", (e) => {
      // cancel background touch
      e.stopPropagation();
      modalSection.classList.add("hidden");
      modalOverlay.classList.add("hidden");
      todoForm.reset();
    });

    // toggle modal on close button
    closeDiv.addEventListener("click", (e) => {
      // cancel background touch
      e.stopPropagation();
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
      todoForm.reset();
    });

    // submit form
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // cancel background touch
      event.stopPropagation();
      // eslint-disable-next-line no-console
      console.log("sending to logic...");
      // eslint-disable-next-line no-use-before-define
      let project = getProject();
      // check which project is checked
      if (project === "home" && submitForm.innerText === "Submit") {
        const radioButtons = document.getElementsByName("category");
        let selectedValue;
        for (let i = 0; i < radioButtons.length; i += 1) {
          if (radioButtons[i].checked) {
            selectedValue = radioButtons[i].value;

            // define project number
            const projectTitle = document.getElementById("projectTitle");
            projectTitle.setAttribute("project-index", i);
            // eslint-disable-next-line no-use-before-define
            projectIndex = i;

            break;
          }
        }

        // define project based on the selected values
        project = selectedValue;

        // prevent no categories error
        if (project === undefined) {
          todoLogic.createCategory("projects");
          todoLogic.deleteTodo(0, "todo", 0);
          project = "projects";
        }
      }

      const title = titleInput.value;
      const date = dateInput.value;
      const priority = {
        high: highPrior.checked,
        med: medPrior.checked,
        low: lowPrior.checked,
      };

      // actions after submiting
      // to create a new todo
      if (submitForm.innerText === "Submit") {
        // eslint-disable-next-line no-use-before-define
        todoLogic.createTodo(getProjectIndex(), { title, date, priority });
      } else if (submitForm.innerText === "Update") {
        // eslint-disable-next-line no-console
        console.log("Sending update to db...");
        const category = titleInput.getAttribute("category");
        const from = titleInput.getAttribute("section");
        const index = titleInput.getAttribute("data-index");
        // eslint-disable-next-line no-use-before-define
        todoLogic.updateTodo(category, from, index, {
          title,
          date,
          priority,
        });
      }

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
    modalH3.setAttribute("id", "deleteModalH3");

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
      if (modalH3.innerText === "Delete This Task?") {
        // eslint-disable-next-line no-console
        console.log("sending delete index to db...");
        const taskToDelete = document.getElementById("deleteText");
        const project = taskToDelete.getAttribute("category");
        const section = taskToDelete.getAttribute("section");
        const index = taskToDelete.getAttribute("data-index");

        // eslint-disable-next-line no-use-before-define
        todoLogic.deleteTodo(project, section, index);
        // eslint-disable-next-line no-use-before-define
        updateUi();
        modalSection.classList.toggle("hidden");
        modalOverlay.classList.toggle("hidden");
      } else if (modalH3.innerText === "Delete This Category?") {
        // eslint-disable-next-line no-console
        console.log("Sending delete category to db...");
        // eslint-disable-next-line no-use-before-define
        todoLogic.deleteCategory(getProjectIndex());
        // eslint-disable-next-line no-use-before-define, dot-notation
        // set project to the first one on the array
        // if there's no one go home
        let firstKey;
        if (todoLogic.getData().length !== 0) {
          firstKey = todoLogic.getData()[0].title;
        } else {
          firstKey = "home";
        }
        // eslint-disable-next-line no-use-before-define
        projectSelect = firstKey;
        // eslint-disable-next-line no-use-before-define
        updateUi();
        modalSection.classList.toggle("hidden");
        modalOverlay.classList.toggle("hidden");
      }
    });
  };

  // func to build sections (name of the category: todo, done, etc..)
  const buildSection = (section, h4) => {
    const todoGrid = document.getElementById("todoGrid");

    // build todo tab
    const todoTab = buildHtml("todoTab", "div", todoGrid);

    // build h3 for todo tab
    const todoH4 = buildHtml("todoH4", "h4", todoTab);
    todoH4.textContent = h4;

    // build flex for todo cards
    const todoFlex = buildHtml("todoFlex", "div", todoTab);
    todoFlex.setAttribute("id", `${section}Parent`);

    if (section !== "done") {
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

      // select dom nodes
      const modalSection = document.getElementById("modalSection");
      const modalOverlay = document.getElementById("modalOverlay");
      const titleInput = document.getElementById("title");

      //
      //
      // »» event listeners «« //
      //
      //
      newTodo.addEventListener("click", (e) => {
        //
        e.stopPropagation();
        // select submitButton and title
        const submitButton = document.getElementById("submitButton");
        const modalTitle = document.getElementById("modalH4");

        // modify submit button for updating
        submitButton.innerText = "Submit";
        modalTitle.innerText = "Add Task";

        // delete the category form then check if we need to built it
        const deleteCategoryFrom = document.getElementById("categoryForm");
        if (deleteCategoryFrom) {
          deleteCategoryFrom.remove();
        }

        // create section select when creating from home tab
        // eslint-disable-next-line no-use-before-define
        if (getProject() === "home") {
          // apend new div
          const todoForm = document.getElementById("todoForm");
          const button = document.getElementById("submitButton");
          const formDiv = buildHtml("formDiv", "div", todoForm);
          formDiv.setAttribute("id", "categoryForm");
          todoForm.insertBefore(formDiv, button);

          // create label
          const categoryLabel = buildHtml("categoryLabel", "label", formDiv);
          categoryLabel.innerText =
            "You don't have a category. We'll create one for you.";

          // create flexbox
          const categorySet = buildHtml("priorSet", "div", formDiv);

          // create inputs  with loop from db
          if (Object.keys(todoLogic.getData()).length !== 0) {
            categoryLabel.innerText = "Category";

            Object.keys(todoLogic.getData()).forEach((index) => {
              const priorFlex = buildHtml("priorFlex", "div", categorySet);
              // inputs
              const catInput = buildHtml("", "input", priorFlex);
              catInput.type = "radio";
              catInput.id = todoLogic.getData()[index].title;
              catInput.name = "category";
              catInput.value = todoLogic.getData()[index].title;
              catInput.required = true;

              // labels
              const catLabel = buildHtml("", "label", priorFlex);
              catLabel.classList.add("catLabel");
              catLabel.setAttribute("for", todoLogic.getData()[index].title);
              catLabel.innerText = todoLogic.getData()[index].title;
            });
          }
        }

        // open modal
        modalSection.classList.toggle("hidden");
        modalOverlay.classList.toggle("hidden");
        titleInput.focus();
      });
    }
  };

  // func to build box (text + buttons)
  const todoComplete = (
    flexSection,
    text,
    date,
    priority,
    index,
    section,
    category,
    projectIndex
  ) => {
    //
    // build div for task + buttons
    const newBox = buildHtml("todoBox", "div", flexSection);

    // build div for text and date
    const newEl = buildHtml("todoEl", "div", newBox);
    newEl.setAttribute("category-index", projectIndex);
    newEl.setAttribute("category", category);
    newEl.setAttribute("section", section);
    newEl.setAttribute("data-index", index);

    // build p for task
    const newTask = buildHtml("newTask", "p", newEl);
    newTask.innerText = text;

    // if there's date or prior build the nodes

    if (section !== "done") {
      if (date || priority) {
        //
        // build div for date || prior
        const divDatePrior = buildHtml("divDatePrior", "div", newEl);

        if (priority) {
          //
          // build icons for priority
          const newPrior = (color) => {
            const priorSvg = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            priorSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            priorSvg.setAttribute("viewBox", "0 0 24 24");
            priorSvg.setAttribute("fill", color);
            priorSvg.setAttribute("width", "20");
            priorSvg.setAttribute("height", "20");

            const priorPath = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            );
            priorPath.setAttribute("fill-rule", "evenodd");
            priorPath.setAttribute(
              "d",
              "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            );
            priorPath.setAttribute("clip-rule", "evenodd");

            priorSvg.appendChild(priorPath);
            divDatePrior.appendChild(priorSvg);
          };

          // loop through the 3 priority options and render the svg
          Object.keys(priority).forEach((e) => {
            if (priority[e]) {
              switch (e) {
                case "high":
                  newPrior("#ef4444");
                  break;
                case "med":
                  newPrior("#eab308");
                  break;
                case "low":
                  newPrior("#22c55e");
                  break;
                default:
                  // eslint-disable-next-line no-console
                  console.log(`Unexpected error on svg render`);
              }
            }
          });
        }

        if (date) {
          // build p for date
          const newDate = buildHtml("newDate", "p", divDatePrior);
          newDate.innerText = date;
        }
      }
    }

    // build div for buttons
    const newOption = buildHtml("todoOption", "div", newBox);

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

    // ** Do not render on the done section **
    if (section !== "done") {
      newOption.appendChild(svgComplete);
    }

    // svg undo
    const undoSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    undoSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    undoSvg.setAttribute("fill", "none");
    undoSvg.setAttribute("viewBox", "0 0 24 24");
    undoSvg.setAttribute("stroke-width", "1.5");
    undoSvg.setAttribute("stroke", "currentColor");
    undoSvg.setAttribute("width", svgSize);
    undoSvg.setAttribute("height", svgSize);

    const undoPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    undoPath.setAttribute("stroke-linecap", "round");
    undoPath.setAttribute("stroke-linejoin", "round");
    undoPath.setAttribute("d", "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3");

    undoSvg.appendChild(undoPath);

    // ** render only on the done section
    if (section === "done") {
      newOption.appendChild(undoSvg);
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

    // *** event listeners ***

    // task done icon
    svgComplete.addEventListener("click", (e) => {
      // eslint-disable-next-line no-console
      console.log("task done... sending to db");
      const project =
        e.target.parentNode.parentNode.firstChild.getAttribute(
          "category-index"
        );
      const from = "todo";
      const moveIndex =
        e.target.parentNode.parentNode.firstChild.getAttribute("data-index");
      const to = "done";
      // eslint-disable-next-line no-use-before-define
      todoLogic.moveTodo(project, from, moveIndex, to);
      // update the whole ui
      // eslint-disable-next-line no-use-before-define
      updateUi();
    });

    // undo task icon
    undoSvg.addEventListener("click", (e) => {
      // eslint-disable-next-line no-console
      console.log("reverting task to todo...");
      const project =
        e.target.parentNode.parentNode.firstChild.getAttribute(
          "category-index"
        );
      const from = "done";
      const moveIndex =
        e.target.parentNode.parentNode.firstChild.getAttribute("data-index");
      const to = "todo";
      // eslint-disable-next-line no-use-before-define
      todoLogic.moveTodo(project, from, moveIndex, to);
      // update the whole ui
      // eslint-disable-next-line no-use-before-define
      updateUi();
    });

    // update todo icon
    svgEdit.addEventListener("click", (e) => {
      // cancel background touch
      e.stopPropagation();

      // delete the category form we wont need it because we already know the category here
      const deleteCategoryFrom = document.getElementById("categoryForm");
      if (deleteCategoryFrom) {
        deleteCategoryFrom.remove();
      }

      // select modal
      const modalSection = document.getElementById("modalSection");
      const modalOverlay = document.getElementById("modalOverlay");

      // select input from, submitButton and modal title
      const titleInput = document.getElementById("title");
      const dateInput = document.getElementById("date");
      const priorHigh = document.getElementById("high");
      const priorMed = document.getElementById("medium");
      const priorLow = document.getElementById("low");
      const submitButton = document.getElementById("submitButton");
      const modalTitle = document.getElementById("modalH4");

      // modify submit button and title for updating
      submitButton.innerText = "Update";
      modalTitle.innerText = "Update Task";

      // get data from this task from the DB
      const task = e.target.parentNode.previousElementSibling;
      const taskCategory = task.getAttribute("category-index");
      const taskSection = task.getAttribute("section");
      const taskIndex = task.getAttribute("data-index");
      const taskObject = todoLogic.getOneTodo(
        // eslint-disable-next-line no-use-before-define
        taskCategory,
        taskSection,
        taskIndex
      );

      // populate form with the taskObject
      titleInput.value = taskObject.title;
      titleInput.setAttribute("category", taskCategory);
      titleInput.setAttribute("section", taskSection);
      titleInput.setAttribute("data-index", taskIndex);
      dateInput.value = taskObject.date;

      // populate checkbox's
      Object.keys(taskObject.priority).forEach((key) => {
        if (taskObject.priority[key]) {
          switch (key) {
            case "high":
              priorHigh.checked = true;
              break;
            case "med":
              priorMed.checked = true;
              break;
            case "low":
              priorLow.checked = true;
              break;
            default:
              // eslint-disable-next-line no-console
              console.log("error while rendering update modal - checkbox");
          }
        }
      });

      // open modal
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
      titleInput.focus();
    });

    // delete/thrash icon
    svgDelete.addEventListener("click", (e) => {
      //
      // eslint-disable-next-line no-console
      console.log("Delete element clicked!");

      // cancel background touch
      e.stopPropagation();

      // overlay
      const modalOverlay = document.getElementById("deleteOverlay");
      modalOverlay.classList.toggle("hidden");

      // modal
      const deleteSection = document.getElementById("deleteSection");
      deleteSection.classList.toggle("hidden");

      // update h3 text
      const deleteH3Title = document.getElementById("deleteModalH3");
      deleteH3Title.innerText = "Delete This Task?";

      // Delete text
      const textDisplay = document.getElementById("deleteText");
      const deleteText =
        e.target.parentNode.previousElementSibling.firstChild.innerText;
      textDisplay.innerText = deleteText;
      const projectDisplay =
        e.target.parentNode.previousElementSibling.getAttribute(
          "category-index"
        );
      textDisplay.setAttribute("category", projectDisplay);
      const sectionDisplay =
        e.target.parentNode.previousElementSibling.getAttribute("section");
      textDisplay.setAttribute("section", sectionDisplay);
      const indexDisplay =
        e.target.parentNode.previousElementSibling.getAttribute("data-index");
      textDisplay.setAttribute("data-index", indexDisplay);
    });
  };

  // func to define project
  // eslint-disable-next-line prefer-const
  let projectSelect = "home";

  // func to define porject index
  let projectIndex = 0;

  // fun to get project
  const getProject = () => projectSelect;

  // func to getproject index
  const getProjectIndex = () => projectIndex;

  // func to update ui
  const updateUi = (data = todoLogic.getData()) => {
    // eslint-disable-next-line no-console
    console.log("reloading ui...");

    // select grid parent
    const parent = document.getElementById("todoGrid");

    // remove every todo
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    // update header
    // select ul parent
    const titleBuilt = document.getElementById("ulTitle");
    // update title
    const projectTitle = document.getElementById("projectTitle");
    projectTitle.innerText = getProject();
    // add buttons and update them with css (bring back edit/ delete) (we delete them at line 937 if === "home")
    const deleteCatButton = document.getElementById("deleteCatButton");
    const editCatButton = document.getElementById("editCatButton");
    deleteCatButton.classList.remove("inactiveLi");
    editCatButton.classList.remove("inactiveLi");
    // remove every li title
    while (titleBuilt.firstChild) {
      titleBuilt.removeChild(titleBuilt.firstChild);
    }

    // build li for all todo's
    const allTodos = buildHtml("liTitles", "li", titleBuilt);
    allTodos.innerText = "home";
    if (getProject() === "home") {
      allTodos.classList.add("activeLi");
      deleteCatButton.classList.add("inactiveLi");
      editCatButton.classList.add("inactiveLi");
    }
    allTodos.addEventListener("click", () => {
      projectSelect = allTodos.innerText.toLowerCase();
      updateUi();
    });

    // build all the menu items on the header
    // also builds the event listerner for the li
    Object.keys(data).forEach((key) => {
      const liTitle = buildHtml("liTitles", "li", titleBuilt);
      liTitle.innerText = data[key].title;
      liTitle.setAttribute("projectName", data[key].title);
      if (data[key].title === getProject()) {
        liTitle.classList.add("activeLi");
      }
      liTitle.addEventListener("click", () => {
        projectSelect = liTitle.innerText.toLowerCase();
        updateUi();
      });
    });

    // build all from DB
    // check if the app is at home first, if true, build all the todos
    if (getProject() === "home") {
      // eslint-disable-next-line no-console
      console.log("building all the todos");
      buildSection("todo", "All Todo's");
      buildSection("done", "All Completed Todo's");
      projectTitle.setAttribute("project-index", null);
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const index in data) {
        Object.keys(data[index].categories).forEach((category) => {
          const flexSection = document.getElementById(`${category}Parent`);
          // eslint-disable-next-line no-restricted-syntax, guard-for-in
          for (const objectIndex in data[index].categories[category]) {
            const { title } = data[index].categories[category][objectIndex];
            let { date } = data[index].categories[category][objectIndex];
            if (date) {
              // format date
              const inputDate = parseISO(date);
              date = format(inputDate, "MMMM do");
            }
            let { priority } = data[index].categories[category][objectIndex];
            const onlyFalsePrior = Object.values(priority).every(
              (value) => value === false
            );
            if (onlyFalsePrior) {
              priority = null;
            }
            const objIndex = objectIndex;
            const Attsection = `${category}`;
            const catAtt = `${data[index].title}`;
            todoComplete(
              flexSection,
              title,
              date,
              priority,
              objIndex,
              Attsection,
              catAtt,
              index
            );
          }
        });
      }
    } else {
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const key in data) {
        const project = data[key];
        if (project.title === getProject()) {
          projectTitle.setAttribute("project-index", key);
          projectIndex = key;
          // eslint-disable-next-line no-restricted-syntax, guard-for-in
          for (const section in project.categories) {
            buildSection(section, section);
            const array = project.categories[section];
            // eslint-disable-next-line no-restricted-syntax, guard-for-in
            for (const task in array) {
              const flexSection = document.getElementById(`${section}Parent`);
              const { title } = array[task];
              let { date } = array[task];
              if (date) {
                // format date
                const inputDate = parseISO(date);
                date = format(inputDate, "MMMM do");
              }
              let { priority } = array[task];
              // check if it's all false
              const onlyFalsePrior = Object.values(priority).every(
                (value) => value === false
              );
              if (onlyFalsePrior) {
                priority = null;
              }

              const Attsection = `${section}`;
              todoComplete(
                flexSection,
                title,
                date,
                priority,
                task,
                Attsection,
                project.title,
                key
              );
            }
          }
        }
      }
    }
  };

  return { build, getProject, getProjectIndex, updateUi };
})();

export default todo;
