// Configure document
const projectTitle = "PDF portfolio exporter";
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
