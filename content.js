document.addEventListener('DOMContentLoaded', function() {
    createToolDisplay([
      // Add tools used below (refer to http://konpa.github.io/devicon/ for icon strings). e.g:
        // 'devicon-html5-plain-wordmark',
        // 'devicon-css3-plain-wordmark',
        // 'devicon-javascript-plain'
      // Or enter the url of the logo, e.g.:
        // 'tools/logo.svg'
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
  // For example, to create a new section:
    // const introduction = new Section("Introduction");
  // For example, to add a paragraph to your new section:
    // introduction.addParagraph("This is another paragraph in the introduction.");
const introduction = new Section("Introduction");
introduction.addParagraph("My nephew, Henry, was born with severe hearing loss. His hearing ability was limited to 110 dB, the magnitude of which would cause others hearing damage. It was declared he would need hearing aids for the rest of his life. Even then, this would only get him to around 50-60 dB. Still not enough to hear or distinguish speech.");
introduction.addParagraph("This is another paragraph in the introduction.");

const approach = new Section("Approach");
approach.addParagraph("test paragraph 2");
approach.addImage("assets/1.jpg");
