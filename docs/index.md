## Running sample files

## Usage
### Configure document metadata
Open `config.js` and enter values for:

1. `projectTitle`
2. `projectSubtitle`
3. `projectAuthor`
4. `projectPhone`
5. `authorEmail`
6. `coverImageSource`

Save the file before closing.

### Configure content
#### Setting up the tool logo display
Open `content.js` and add the tools used to create your project inside the `createToolDisplay()` function.

```javascript
/* Create a list of tools used */
createToolDisplay([
  'devicon-html5-plain-wordmark',
  'devicon-css3-plain-wordmark',
  'devicon-javascript-plain'
]);
```

The Devicon font is used to display the icons. To find an icon and its respective shortcode, use the [Devicon documentation]<(http://konpa.github.io/devicon/).

If a logo is not available in dev icon, simply link to the path of the logo instead, e.g. `assets/logo.png`.

#### Adding body content
The body of the document is made up of sections (for example, "Introduction" or "Design Process"). Each section has its own content, which can include text, images, lists etc.

To create a new section, a new Section class should be defined: `const sectionName = new Section("<Section title>");`.
Once a section is created, content can be added to it - for example: `sectionName.addParagraph("This will add a new paragraph to the section called sectionName.");`

**Add paragraph**


### Generate PDF
