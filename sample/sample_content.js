// -----------------------------------------------------------------------------
// Add tools used inside the createToolDisplay() function (refer to http://konpa.github.io/devicon/ for icon strings). e.g:
//  'devicon-html5-plain-wordmark',
//  'devicon-css3-plain-wordmark',
//  'devicon-javascript-plain'
// Or enter the url of the logo, e.g.:
//  'tools/logo.svg'
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    createToolDisplay([
      'devicon-html5-plain-wordmark',
      'devicon-css3-plain-wordmark',
      'devicon-javascript-plain',
      'devicon-chrome-plain-wordmark',
      'devicon-atom-original',
      'devicon-github-plain-wordmark',
      'devicon-sketch-line-wordmark',
      'assets/weasyprint.svg'
    ]);
}, false);

// Add content below:
// -----------------------------------------------------------------------------
//   To create a new section:
//    const <sectionName> = new Section("<section title>");
//   To add a paragraph to your new section:
//    <sectionName>.addParagraph("<paragraph content>");
// -----------------------------------------------------------------------------

const introduction = new Section("Introduction");
introduction.addParagraph("This tool was created to enable developers to showcase their projects and ideas to others. The user can enter information about their project into the tool, and then export the information in a standardised PDF format that can be easily shared with others. It allows developers to easily showcase their work, so that they can focus on what they love - producing great software.");
introduction.addParagraph("This very document was created using the tool, and is intended to act as an example of the tool's funtionality.");
introduction.addParagraph("<strong>Body colors</strong>");
introduction.addParagraph("The colors used throughout the body of the PDF are simple and high contrasting in order to keep attention focused on what matters most - the content.");
introduction.addColorPalette("#282C33", "#ffffff", "#F4F4F4", "#F5F2F0");
introduction.addParagraph("Yup, pretty simple - just shades of white and black!");
introduction.addParagraph("<strong><em>Title page</em> and <em>final page</em> colors</strong>");
introduction.addParagraph("The <em>title page</em> and the <em>final page</em> were given a little more color in order to catch the eye.");
introduction.addColorPalette("#f77062", "#fe5196");

const approach = new Section("Approach");
approach.addH2Header("Key tools");
approach.addOrderedList(
  "HTML5 - used to structure the document.",
  "CSS3 - used to style the document.",
  "JavaScript - used to implement the tool's logic and receive input from the user.",
  "Headless Chrome - used to execute the JavaScript and convert the output to HTML before reaching WeasyPrint, as WeasyPrint does not handle JavaScript.",
  "WeasyPrint - used to convert the final HTML and CSS into a PDF document."
);
approach.addImage("assets/app-flow.png", "Figure 1 - Dataflow diagram");

const usage = new Section("Usage");
usage.addParagraph("To use the tool, first open <code>content.js</code>. Then, use the <code>createToolDisplay</code> function at the top of the page to list the tools used to build your app. The Devicon package has been used to provide the logos, which is great because almost every tool you'll use for development is covered within this package.")
usage.addParagraph("To add HTML5, CSS3, and JavaScript, for example, you'll use:");
usage.addCodeBlock("JavaScript", `
    createToolDisplay([
      'devicon-html5-plain-wordmark',
      'devicon-css3-plain-wordmark',
      'devicon-javascript-plain',
    ]);`)
usage.addParagraph("Next, we want to start adding content to our document. We do this by creating sections, using the <code>Section</code> class:");
usage.addCodeBlock("JavaScript", `const exampleSection = new Section("Example Section");`);
usage.addParagraph("A new H1 header is added when a new section is created.");
usage.addParagraph("We can then begin adding content to our new section by using the following methods:");
usage.addOrderedList(
  "addParagraph()",
  "addImage()",
  "addImageGrid()",
  "addH2Header()",
  "addOrderedList()",
  "addUnorderedList",
  "addCodeBlock()",
  "addColorPalette()"
)
usage.addParagraph("The image grid is useful to show multiple, related images at once, for example:");
usage.addImageGrid([
  ["assets/demo3.jpg", "Figure 4 - UI Design"],
  ["assets/demo4.jpg", "Figure 5 - UI Design"]
]);
