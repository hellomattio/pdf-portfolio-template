// Configure document
const projectTitle = "Cochlear Remote Assistance (iOS)";
const projectAuthor = "Matt Doyle";

// Define functions
const updateTocHeader = () => {
  elements = document.getElementsByClassName('project-name');
  for (element of elements) {
    element.innerHTML = projectTitle;
  }
}

// Update DOM
document.title = projectTitle;
document.author = projectAuthor;

updateTocHeader();

let addSection = (sectionName, sectionTitle) => {
  let target = document.querySelector("#toc");
  let div = document.createElement("div");
  div.id = sectionName;
  div.innerHTML = `<h1>${sectionTitle}</h1>`;
  target.parentNode.insertBefore(div, target.nextSibling);
}

let addParagraph = (sectionName, paragraph) => {
  let target = document.querySelector(`#${sectionName}`);
  let newParagraph = document.createElement("p");
  newParagraph.className = "section-paragraph";
  newParagraph.innerHTML = paragraph;
  target.parentNode.insertBefore(newParagraph, target.nextSibling);
}
