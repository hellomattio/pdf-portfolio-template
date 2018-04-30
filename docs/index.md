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

The Devicon font is used to display the icons. To find an icon and its respective shortcode, use the [Devicon documentation](http://konpa.github.io/devicon/).

If a logo is not available in dev icon, simply link to the path of the logo instead, e.g. `assets/logo.png`.

#### Adding body content
The body of the document is made up of sections (for example, "Introduction" or "Design Process"). Each section has its own content, which can include text, images, lists etc.

To create a new section, a new Section class should be defined:
```javascript
const exampleSection = new Section("Section title");
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

**Add an image**

Use the image method to add images to a section. The `addImage` method accepts two parameters:
1. A `string` identifying the source of the image.
2. (optional) A `string` representing the image caption.

```javascript
sectionName.addImage("assets/app-flow.png", "Figure 1 - Dataflow diagram");
```

**Add an image grid**

Use the image grid method to add multiple images to a grid. A table of images will be created, with two images to each row. The `addImageGrid` method accepts an array of arrays as a parameter, identifying the source and (optimally) caption of each image.
Each inner array consists of:
1. A `string` identifying the source of the image.
2. (optional) A `string` representing the image caption.

```javascript
exampleSection.addImageGrid([
  ["assets/image1.jpg", "Figure 1 - UI Design 1"],
  ["assets/image2.jpg", "Figure 2 - UI Design 2"]
]);
```

**Add a color palette**

Use the color palette method to display a pallete of colours, along with their respective HEX codes.
The `addColorPalette` method accepts an `array` of colors identified by `#` and their hex code in the form of a `string`.

```javascript
exampleSection.addColorPalette("#f77062", "#fe5196");
```

![Color palette]({{ site.baseurl }}/assets/color-palette.png "Color pallete")

**Add a sub-heading**

Use the h2 header method to add subheadings to the document. Subheadings are useful to break up sections into multiple parts.
The `addH2Header` method accepts a `string` as a parameter, which will be represented as a subheading.

```javascript
exampleSection.addH2Header("A subheading");
```

**Add an ordered list**

Use the ordered list method to represent content in an ordered list.
The `addOrderedList` method accepts an `array` of `strings` as a parameter, with each string populating a new list item.

```javascript
exampleSection.addOrderedList(
  "List item 1",
  "List item 2",
  "List item 3"
)
```

**Add an ordered list**

Use the unordered list method to represent content in an unordered list.
The `addUnorderedList` method accepts an `array` of `strings` as a parameter, with each string populating a new list item.

```javascript
exampleSection.addUnorderedList(
  "List item 1",
  "List item 2",
  "List item 3"
)
```

**Add a code block**

Use the code block method to add code blocks to the document. Syntax highlighting can be achieved by specifying the syntax language as an input parameter.
The `addCodeBlock` method accepts two parameters:
1. A `string` representing the language of the code to be displayed. For a list of supported languages and their identifiers, see the [Prism supported language documentation](http://prismjs.com/#languages-list).
2. A `String` representing the code block to be displayed.

```javascript
exampleSection.addCodeBlock("JavaScript", `
var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
    text += cars[i] + "<br>";
}
```

**Add inline code**

Use the inline code functionality to add inline code to section Paragraphs. Inside the `addParagraph` method parameter, use `<code>inline text</code>`to add inline code.

```javascript
sectionName.addParagraph("This paragraph contains <code>inline code</code>");
```

### Generate PDF
1. Update `config.js`
2. Update `content.js`
3. Run the `run.sh` bash script
4. The PDF will be generated and saved in the `/output` folder as `output.pdf`.
