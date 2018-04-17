// Configure document
const projectTitle = "Cochlear Remote Assistance (iOS)";
const projectAuthor = "Matt Doyle";

// Define functions
const createTitlePage = () => {
  // TODO
}

const createToc = () => {
  // TODO
}

const updateProjectName = () => {
  elements = document.getElementsByClassName('project-name');
  for (element of elements) {
    element.innerHTML = projectTitle;
  }
}

const addSection = (sectionName, sectionTitle) => {
  let target = document.querySelector("#toc");
  let div = document.createElement("div");
  div.id = sectionName;
  div.innerHTML = `<h1>${sectionTitle}</h1>`;
  target.parentNode.insertBefore(div, target.lastSibling);
}

const addParagraph = (sectionName, paragraph) => {
  let target = document.querySelector(`#${sectionName}`);
  let newParagraph = document.createElement("p");
  newParagraph.className = "section-paragraph";
  newParagraph.innerHTML = paragraph;
  target.parentNode.insertBefore(newParagraph, target.lastSibling);
}

const addImage = (source, caption, style = "block", size = "medium") => {
  // TODO
}

const addImageGrid = ([source], percentMaxHeight) => {
  // TODO
}

const addCodeBlock = (codeBlock) => {
  // TODO
}

const addOrderedList = ([listItem]]) => {
  // TODO
}

const addUnorderedList = ([listItem]]) => {
  // TODO
}

const addTool = ([listItem]]) => {
  // TODO
}

// Update DOM
document.title = projectTitle;
document.author = projectAuthor;

updateProjectName();
