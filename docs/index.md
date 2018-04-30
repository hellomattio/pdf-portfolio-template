## Running sample files

## Usage
### Configure document metadata
Open `config.js` and enter the following information:

1. `projectTitle` = Project title
2. `projectSubtitle` = Project subtitle
3. `projectAuthor` = Project author
4. `projetPhone` = Contact number of the project author
5. `authorEmail` = Contact email of the project author
6. `coverImageSource` = Path to the cover page feature image

Save the file before closing.

### Configure content
#### Tool Display
Open `content.js` and add the tools used to create your project inside the `createToolDisplay()` function.

{{ "{% highlight javascript " }}%}  
/* Create a list of tools used */
createToolDisplay([
  'devicon-html5-plain-wordmark',
  'devicon-css3-plain-wordmark',
  'devicon-javascript-plain'
]);
{{ "{% endhighlight " }}%}



### Generate PDF
