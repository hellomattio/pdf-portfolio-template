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
  const target = document.querySelector("#toc");
  const div = document.createElement("div");
  div.id = sectionName;
  div.innerHTML = `<h1>${sectionTitle}</h1>`;
  target.parentNode.insertBefore(div, target.lastSibling);
}

const addParagraph = (sectionName, paragraph) => {
  const target = document.querySelector(`#${sectionName}`);
  console.log(target);
  const newParagraph = document.createElement("p");
  newParagraph.className = "section-paragraph";
  newParagraph.innerHTML = paragraph;
  target.appendChild(newParagraph);
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

const addOrderedList = ([listItem]) => {
  // TODO
}

const addUnorderedList = ([listItem]) => {
  // TODO
}

const addTool = ([tool]) => {
  // TODO
}

const addColorPallet = ([color]) => {
  // TODO
}

const addTypeFace = (typeface) => {
  // TODO
}

const addUserStory = ([userStory]) => {
  // TODO
}

// Update DOM
document.title = projectTitle;
document.author = projectAuthor;

updateProjectName();
