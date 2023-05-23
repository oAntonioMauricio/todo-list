import "./header.css";
import todo from "../todo/todo";
import todoLogic from "../../appLogic/todoLogic";

// build header

const header = (() => {
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

  const build = () => {
    // eslint-disable-next-line no-console
    console.log("header ONLINE");

    const container = document.getElementById("mainContainer");

    // - FIRST HALF -
    // logo section
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logoDiv");
    container.append(logoDiv);

    // Create a new logo element
    const logo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    logo.setAttribute("version", "1.0");
    logo.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    logo.setAttribute("width", "50");
    logo.setAttribute("height", "50");
    logo.setAttribute("xml:space", "preserve");
    logo.setAttribute("viewBox", "0 0 100 100");

    // Create a new path element and set its attributes
    const logoPath1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    logoPath1.setAttribute("fill", "#0258FF");
    logoPath1.setAttribute(
      "d",
      "M30 58.841h32.246c11.648 0 21.087-9.438 21.087-21.084 0-11.645-9.44-21.09-21.087-21.09H30V10h32.246C77.575 10 90 22.43 90 37.757c0 15.326-12.425 27.751-27.754 27.751H30v-6.667z"
    );

    // Create a new path element and set its attributes
    const logoPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    logoPath2.setAttribute("fill", "#263238");
    logoPath2.setAttribute(
      "d",
      "M70 83.333V90H37.754C22.425 90 10 77.57 10 62.243c0-15.326 12.425-27.751 27.754-27.751H70v6.667H37.754c-11.648 0-21.087 9.438-21.087 21.084 0 11.644 9.44 21.09 21.087 21.09H70z"
    );

    // Append the path elements to the logo element
    logo.appendChild(logoPath1);
    logo.appendChild(logoPath2);

    // Append the logo element to the div element
    logoDiv.appendChild(logo);

    // - SECOND HALF -
    // header html
    const htmlHeader = document.createElement("header");
    htmlHeader.classList.add("header");
    container.append(htmlHeader);

    // div for project selection
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    htmlHeader.append(projectDiv);

    // project
    const project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("id", "headerProject");
    projectDiv.append(project);

    // project title
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projectTitle");
    projectTitle.textContent = todo.getProject();
    projectTitle.setAttribute("id", "projectTitle");
    project.append(projectTitle);

    // project button
    const projectButton = document.createElement("button");
    projectButton.classList.add("projectButton");

    project.append(projectButton);

    // svg for button
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("svgHeader");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-width", "1.5");
    path.setAttribute("d", "M8.25 4.5l7.5 7.5-7.5 7.5");

    svg.appendChild(path);
    projectButton.appendChild(svg);

    // menu for titles
    // add plus button to add a new category
    const newCatButton = buildHtml("newCatButton", "button", project);
    // svg inside on plus button
    const newCatSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    newCatSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    newCatSvg.setAttribute("fill", "none");
    newCatSvg.setAttribute("viewBox", "0 0 24 24");
    newCatSvg.setAttribute("stroke-width", "1.5");
    newCatSvg.setAttribute("stroke", "currentColor");
    newCatSvg.setAttribute("class", "svgNewTodo");
    newCatSvg.setAttribute("width", "20"); // set width to 20px
    newCatSvg.setAttribute("height", "20"); // set height to 20px

    const newCatPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    newCatPath.setAttribute("stroke-linecap", "round");
    newCatPath.setAttribute("stroke-linejoin", "round");
    newCatPath.setAttribute("d", "M12 4.5v15m7.5-7.5h-15");

    newCatSvg.appendChild(newCatPath);
    newCatButton.prepend(newCatSvg);

    // built/updated with a loop on todo.js
    const ulTitles = buildHtml("ulTitles", "ul", project);
    ulTitles.setAttribute("id", "ulTitle");

    // »»» extra build ««« //
    // build modal
    // eslint-disable-next-line no-use-before-define
    newCatModal();

    // *** event listeners *** //
    project.addEventListener("mouseenter", () => {
      ulTitles.classList.add("show");
      newCatButton.classList.add("show");
    });

    project.addEventListener("mouseleave", () => {
      ulTitles.classList.remove("show");
      newCatButton.classList.remove("show");
    });

    projectButton.addEventListener("click", () => {
      ulTitles.classList.toggle("alwaysShow");
      newCatButton.classList.toggle("alwaysShow");
      if (path.getAttribute("d") === "M8.25 4.5l7.5 7.5-7.5 7.5") {
        path.setAttribute("d", "M19.5 8.25l-7.5 7.5-7.5-7.5");
      } else {
        path.setAttribute("d", "M8.25 4.5l7.5 7.5-7.5 7.5");
      }
    });

    newCatButton.addEventListener("click", (e) => {
      // eslint-disable-next-line no-console
      console.log("Showming modal to create new project");
      // cancel background touch
      e.stopPropagation();

      // overlay
      const modalOverlay = document.getElementById("newCatOverlay");
      modalOverlay.classList.toggle("hidden");

      // modal
      const deleteSection = document.getElementById("newCatSection");
      deleteSection.classList.toggle("hidden");

      // focus on input
      const titleInput = document.getElementById("newCatName");
      titleInput.focus();
    });
  };

  const newCatModal = () => {
    const container = document.getElementById("mainContainer");

    // build section for modal
    const modalSection = buildHtml("modalSection", "section", container);
    modalSection.classList.add("hidden");
    modalSection.setAttribute("id", "newCatSection");

    // build div(overlay) for modal
    const modalOverlay = buildHtml("modalOverlay", "div", container);
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("id", "newCatOverlay");

    // build div/flex for modal
    const modalDiv = buildHtml("modalDiv", "div", modalSection);

    // build h3
    const modalH3 = buildHtml("todoH4", "h4", modalDiv);
    modalH3.textContent = "Create New Category";

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
    todoForm.setAttribute("id", "catForm");

    // build div for title
    const titleDiv = buildHtml("formDiv", "div", todoForm);

    // build label and input for title
    // eslint-disable-next-line no-unused-vars
    const titleLabel = buildHtml("titleLabel", "label", titleDiv, "Name");
    titleLabel.setAttribute("for", "newCatName");
    // eslint-disable-next-line no-unused-vars
    const titleInput = buildHtml("titleInput", "input", titleDiv);
    titleInput.type = "text";
    titleInput.id = "newCatName";
    titleInput.name = "newCatName";
    titleInput.required = true;
    titleInput.pattern = "^[^\\s]{1,14}$";
    titleInput.title = "1 to 14 characters and no spaces.";

    // create submit button
    const createNewCatName = buildHtml(
      "submitForm",
      "button",
      todoForm,
      "Create"
    );
    createNewCatName.setAttribute("form", "catForm");
    createNewCatName.setAttribute("type", "submit");

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

    // submit new category name
    createNewCatName.addEventListener("click", (event) => {
      // cancel background touch
      event.stopPropagation();

      if (todoForm.checkValidity()) {
        event.preventDefault();
        // Perform custom error handling or display error messages
        // eslint-disable-next-line no-console
        console.log("Sending new category name to DB...");
        const newCat = titleInput.value.toLowerCase();
        todoLogic.createCategory(newCat);
        todo.updateUi();
        modalSection.classList.toggle("hidden");
        modalOverlay.classList.toggle("hidden");
        todoForm.reset();
      }
    });
  };

  return { build };
})();

export default header;
