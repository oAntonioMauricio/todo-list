import "./container.css";

// append main container with css grid for layout
const container = () => {
  console.log("container ONLINE");

  const root = document.getElementById("root");

  // main container
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");
  mainContainer.setAttribute("id", "mainContainer");
  root.append(mainContainer);
};

export default container;
