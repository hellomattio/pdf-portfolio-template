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

To create a new section, a new Section class should be defined:
```javascript
const exampleSection = new Section("<Section title>");
```

Once a section is created, content can be added to it - for example:
```javascript
exampleSection.addParagraph("This will add a new paragraph to a section called exampleSection.");
```

**Add a paragraph**

Use the paragraph method to add paragraphs to a section. The `addParagraph` method accepts one parameter:
1. A `string` to be displayed as a paragraph.

```javascript
sectionName.addParagraph("This will add a new paragraph to a section called sectionName.");
```

HTML formatting tags can be included inside the parameter string to add additional formatting the text.

```javascript
sectionName.addParagraph("This will add a <strong>new paragraph<strong> with <e>additional</e> formatting.");
```

  \>\> This will add a **new paragraph** with _additional_ formatting.

**Add an image**

Use the image method to add images to a section. The `addImage` method accepts two parameters:
1. A `string` identifying the source of the image.
2. (optional) A `string` representing the image caption.

```javascript
approach.addImage("assets/app-flow.png", "Figure 1 - Dataflow diagram");
```

**Add an image grid**

```javascript
exampleSection.addImageGrid([
  ["assets/demo3.jpg", "Figure 4 - UI Design"],
  ["assets/demo4.jpg", "Figure 5 - UI Design"]
]);
```

**Add a color pallete**

```javascript
code
```

**Add a sub-heading**

```javascript
code
```

**Add an ordered list**

```javascript
code
```

**Add an ordered list**

```javascript
code
```

**Add a code block**

```javascript
code
```

**Add inline code**

```javascript
code
```

### Generate PDF
