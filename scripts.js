// Configure document
const projectTitle = "Software Project PDF Generator";
const projectSubtitle = "A JavaScript tool to generate beautiful PDF documents for your projects.";
const projectAuthor = "Matt Doyle";
const coverImageSource = "assets/splash.jpg";

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
    newImage.className = "section__image";
    newImage.src = source;
    target.appendChild(newImage);
  }

  addImageGrid ([...[...sources]]) {
      const target = document.querySelector(`#${this.sectionName}`);
      const imageContainer = document.createElement("div");
      let gridElements = "";
      let newLine = "";
      for (let source of sources) {
        let imageHtml = "";
        let caption = "";
        source[1] ? caption = source[1] : caption = "<br>";
        if (gridElements) newLine = "\n\t";
        imageHtml = `<img class="image-grid__image" src="${source[0]}">`;
        gridElements = `${gridElements}${newLine}<div class="image-grid__container">
          ${imageHtml}
          <figcaption>${caption}</figcaption>
        </div>`
      }
      imageContainer.innerHTML = `
      <div class="image-grid">
        ${gridElements}
      </div>
      `;
      target.appendChild(imageContainer);
  }

  addCodeBlock (language, codeToRender) {
    const target = document.querySelector(`#${this.sectionName}`);
    const preformattedBlock = document.createElement("pre");
    const codeBlock = document.createElement("code");
    const languageTitle = document.createElement("span");
    preformattedBlock.className = `language-${language}`;
    languageTitle.className = "code-language-title";
    codeBlock.innerHTML = (() => {
      return codeToRender
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    })(codeToRender);
    languageTitle.innerHTML = `<strong> ${language}</strong>`
    preformattedBlock.appendChild(languageTitle);
    preformattedBlock.appendChild(codeBlock);
    target.appendChild(preformattedBlock);
  }

  addOrderedList (...listItems) {
    const target = document.querySelector(`#${this.sectionName}`);
    const orderedList = document.createElement("ol");
    let listElementHtml = "";
    for (let listItem of listItems) {
      let listElement = document.createElement("li")
      listElement.innerHTML = `${listItem}`;
      orderedList.appendChild(listElement);
    }
    target.appendChild(orderedList);
  }

  addUnorderedList (...listItems) {
    const target = document.querySelector(`#${this.sectionName}`);
    const unorderedList = document.createElement("ul");
    let listElementHtml = "";
    for (let listItem of listItems) {
      let listElement = document.createElement("li")
      listElement.innerHTML = `${listItem}`;
      unorderedList.appendChild(listElement);
    }
    target.appendChild(unorderedList);
  }

  addColorPallete (...colorHexList) {
    const target = document.querySelector(`#${this.sectionName}`);
    const palleteWrapper = document.createElement("div");
    palleteWrapper.className = "pallete-wrapper grid-container";
    let colorElementHtml = "";
    for (let colorHex of colorHexList) {
      let palleteContainer = document.createElement("div");
      let palleteItem = document.createElement("div");
      let palleteText = document.createElement("p");
      palleteContainer.className = "pallete-wrapper__item grid-container__element"
      palleteItem.style.backgroundColor = colorHex;
      palleteItem.innerHTML = `<br><br><br>`
      palleteText.className = "pallete-wrapper__item";
      palleteText.innerHTML = `${colorHex}`;
      palleteContainer.appendChild(palleteItem);
      palleteContainer.appendChild(palleteText);
      palleteWrapper.appendChild(palleteContainer);
    }
    target.appendChild(palleteWrapper);
  }

  addUserStory ([userStory]) {
    // TODO - [(User, story)]
  }

  addH2Header (header) {
    const target = document.querySelector(`#${this.sectionName}`);
    const h2Header = document.createElement("h2");
    h2Header.innerHTML = header;
    target.appendChild(h2Header);
  }

}

// Define functions
updateProjectName = () => {
  elements = document.getElementsByClassName('project-name');
  for (let element of elements) {
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
      @bottom-center {
        content: "${projectAuthor}"
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
    if (tocList) newLine = "\n\t";
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
  let gridElements = "";
  let newLine = "";
  for (tool of tools) {
    let iconHtml = "";
    if (gridElements) newLine = "\n\t";
    if (tool.startsWith("devicon")) {
      iconHtml = `<i class=${tool}></i>`;
    } else {
      iconHtml = `<img class="tool-image" src="${tool}">`;
    }
    gridElements = `${gridElements}${newLine}<div class="grid-container__element icon">
      ${iconHtml}
    </div>`
  }
  toolDisplay.innerHTML = `
  <div class="grid-container">
    <div><h4>Built on:</h4></div>
    ${gridElements}
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
}, false);
