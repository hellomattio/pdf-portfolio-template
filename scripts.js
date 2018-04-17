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
  div.className = "section"
  target.parentNode.insertBefore(div, target.lastSibling);
}

const addParagraph = (sectionName, paragraph) => {
  const target = document.querySelector(`#${sectionName}`);
  const newParagraph = document.createElement("p");
  newParagraph.className = "section__paragraph";
  newParagraph.innerHTML = paragraph;
  target.appendChild(newParagraph);
}

const addImage = (sectionName, source, style = "default", size = "medium") => {
  const target = document.querySelector(`#${sectionName}`);
  const newImage = document.createElement("img");
  newImage.src = source;
  target.appendChild(newImage);
}

const addImageGrid = (sectionName, [source], percentMaxHeight) => {
  // TODO
}

const addCodeBlock = (sectionName, codeBlock) => {
  // TODO
}

const addOrderedList = (sectionName, [listItem]) => {
  // TODO
}

const addUnorderedList = (sectionName, [listItem]) => {
  // TODO
}

const addTool = (sectionName, [tool]) => {
  // TODO
}

const addColorPallet = (sectionName, [color]) => {
  // TODO
}

const addTypeFace = (sectionName, typeface) => {
  // TODO
}

const addUserStory = (sectionName, [userStory]) => {
  // TODO
}

// Update DOM
// Document setup
document.title = projectTitle;
document.author = projectAuthor;
updateProjectName();
