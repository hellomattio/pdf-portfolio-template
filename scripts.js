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
  for (heading of headings) {
    tocList ?
      tocList = `${tocList}\n<li><a href=#${heading.id}>${heading.innerHTML}</a></li>`:
      tocList = `<li><a href=#${heading.id}>${heading.innerHTML}</a></li>`;
  }
  console.log(tocList);
  target.innerHTML = `
    <h2 class="project-name"></h2>
    <ol>
      ${tocList}
    </ol>
    `;
}

createToolDisplay = () => {
  const target = document.querySelector('.cover-page');
  const toolDisplay = document.createElement("div");
  toolDisplay.className = "tool-display";
  toolDisplay.innerHTML = `
  <div class="grid-container grid-container__fit">
    <div><p>Built on:</p></div>
    <div class="grid-element">
      <img src="tools/css3-plain-wordmark.svg">
    </div>
    <div class="grid-element">
      <i class="devicon-css3-plain-wordmark"></i>
    </div>
    <div class="grid-element">
      3
    </div>
    <div class="grid-element">
      4
    </div>
    <div class="grid-element">
      5
    </div>
    <div class="grid-element">
      6
    </div>
    <div class="grid-element">
      7
    </div>
  </div>
  `;
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
    createToolDisplay();
}, false);
