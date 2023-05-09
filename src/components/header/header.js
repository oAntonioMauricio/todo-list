import "./header.css";

// build header

const header = (() => {
  const build = () => {
    console.log("header ONLINE");

    const container = document.getElementById("mainContainer");

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
    projectDiv.append(project);

    // project title
    const projectTitle = document.createElement("p");
    projectTitle.classList.add("projectTitle");
    projectTitle.textContent = "Project";
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
    path.setAttribute("stroke-width", "2");
    path.setAttribute("d", "M19 9l-7 7-7-7");

    svg.appendChild(path);
    projectButton.appendChild(svg);
  };

  return { build };
})();

export default header;
