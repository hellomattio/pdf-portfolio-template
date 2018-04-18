// Configure document
const projectTitle = "Cochlear Remote Assistance (iOS)";
const projectAuthor = "Matt Doyle";

// Create section class
class Section {
  constructor(sectionTitle = "Error: section name not defined") {
    this.sectionName = sectionTitle.replace(/\s/g, '-');
    this.sectionName = this.sectionName.toLowerCase();
    this.sectionTitle = sectionTitle;
    this.target = document.querySelector("#toc");
    this.div = document.createElement("div");
    this.div.id = this.sectionName;
    this.div.innerHTML = `<h1>${sectionTitle}</h1>`;
    this.div.className = "section";
    this.target.parentNode.insertBefore(this.div, this.target.lastSibling);
  }

  addParagraph (paragraph) {
    const target = document.querySelector(`#${this.sectionName}`);
    const newParagraph = document.createElement("p");
    newParagraph.className = "section__paragraph";
    newParagraph.innerHTML = paragraph;
    target.appendChild(newParagraph);
  }

  addImage (source, style = "default", size = "medium") {
    const target = document.querySelector(`#${this.sectionName}`);
    const newImage = document.createElement("img");
    newImage.src = source;
    target.appendChild(newImage);
  }

  addImageGrid ([source], percentMaxHeight) {
    // TODO
  }

  addCodeBlock (codeBlock) {
    // TODO
  }

  addOrderedList ([listItem]) {
    // TODO
  }

  addUnorderedList ([listItem]) {
    // TODO
  }

  addTool ([tool]) {
    // TODO
  }

  addColorPallet ([color]) {
    // TODO
  }

  addTypeFace(typeface) {
    // TODO
  }

  addUserStory([userStory]) {
    // TODO
  }

}

// Define functions
updateProjectName = () => {
  elements = document.getElementsByClassName('project-name');
  for (element of elements) {
    element.innerHTML = projectTitle;
  }
}

createTitlePage = () => {
  const target = document.querySelector('.cover-page');
  target.innerHTML = `
    <h1 class="cover-page__title">${projectTitle}</h1>
    `;
}

createFooter = () => {
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `
    @bottom-left {
      content: "Content from JS!"
    }
  `
  document.head.appendChild(css);
}

createToc = () => {
  // TODO
}

// Update DOM
// Document setup
document.title = projectTitle;
document.author = projectAuthor;
//style.setProperty('--project-name', projectName);

updateProjectName();
// createFooter();
