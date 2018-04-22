// -----------------------------------------------------------------------------
// Add tools used below (refer to http://konpa.github.io/devicon/ for icon strings). e.g:
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
      'tools/weasyprint.svg'
    ]);
}, false);

// Add content below:
// -----------------------------------------------------------------------------
//   FTo create a new section:
//    const <sectionName> = new Section("<section title>");
//   To add a paragraph to your new section:
//    <sectionName>.addParagraph("<paragraph content>");
// -----------------------------------------------------------------------------

const introduction = new Section("Introduction");
introduction.addParagraph("Developers require a way to showcase their projects and ideas to others. The utility, solution, and beauty, within a piece of software can be lost if not effectively communicated.");
introduction.addParagraph("This tool seeks to allow developers to showcase their work in a standardised format, so that they can focus on what they love - producing great software.");

const approach = new Section("Approach");
approach.addParagraph("test paragraph 2");
approach.addImage("assets/1.jpg");
approach.addCodeBlock("html", `
  some text <p> hey there</p>
  another line of <strong>text</strong
  `
);
