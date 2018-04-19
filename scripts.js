// Configure document
const projectTitle = "Cochlear Remote Assistance (iOS)";
const projectSubtitle = "A UI design for a mobile version of Cochlear's proprietary hardware control device."
const projectAuthor = "Matt Doyle";
const coverImageSource = "assets/splash.jpg"

// Create section class
class Section {
  constructor(sectionTitle = "Error: section name not defined") {
    this.sectionName = sectionTitle.replace(/\s/g, '-');
    this.sectionName = this.sectionName.toLowerCase();
    this.sectionTitle = sectionTitle;
    this.target = document.querySelector("#toc");
    this.div = document.createElement("div");
    this.div.id = this.sectionName;
    this.div.innerHTML = `<h1 id="${this.sectionName}__header" class="section__heading">${sectionTitle}</h1>`;
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

createCoverPage = () => {
  const target = document.querySelector('.cover-page');
  target.innerHTML = `
    <h1 class="cover-page__title">${projectTitle}</h1>
    <h4>${projectSubtitle}</h4>
    <img class="cover-page__image" src=${coverImageSource}>
    `;
}

createFooterContent = () => {
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `
    @page {
      @bottom-left {
        content: "${projectTitle}"
      }
    }
  `
  document.head.appendChild(css);
}

createToc = () => {
  const target = document.querySelector('#toc');
  let headings = document.querySelectorAll(".section__heading");
  let tocList = "";
  let newLine = "";
  for (heading of headings) {
    if (tocList) newLine = "\n";
    tocList = `${tocList}${newLine}<li><a href=#${heading.id}>${heading.innerHTML}</a></li>`;
  }
  target.innerHTML = `
    <h2 class="project-name"></h2>
    <ol>
      ${tocList}
    </ol>
    `;
}

createToolDisplay = ([...tools]) => {
  const target = document.querySelector('.cover-page');
  const toolDisplay = document.createElement("div");
  toolDisplay.className = "tool-display";
  toolDisplay.innerHTML = `
  <div class="grid-container grid-container__fit">
    <div><h4>Built on:</h4></div>
    <div class="grid-element">
      <i class="devicon-html5-plain-wordmark"></i>
    </div>
    <div class="grid-element">
      <i class="devicon-css3-plain-wordmark"></i>
    </div>
    <div class="grid-element">
      <i class="devicon-javascript-plain"></i>
    </div>
    <div class="grid-element">
      <i class="devicon-sketch-line-wordmark"></i>
    </div>
    <div class="grid-element">
      <i class="devicon-chrome-plain-wordmark"></i>
    </div>
    <div class="grid-element">
      <i class="devicon-git-plain-wordmark"></i>
    </div>
    <div class="grid-element">
      <i class="devicon-devicon-plain-wordmark"></i>
    </div>
  </div>
  `;
  let gridElements = "";
  let newLine = "";
  for (tool of tools) {
    if (gridElements) newLine = "\n";
    gridElements = `${gridElements}${newLine}${tool}`
    console.log(gridElements);
  }
  target.appendChild(toolDisplay);
}

// Update DOM
// Document setup
document.title = projectTitle;
document.author = projectAuthor;

document.addEventListener('DOMContentLoaded', function() {
    createCoverPage();
    createToc();
    updateProjectName();
    createFooterContent();
    createToolDisplay(['html5', 'css3', 'javascript']);
}, false);
