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

{% highlight javascript %}
/* Some pointless Javascript */
var rawr = ["r", "a", "w", "r"];
{% endhighlight %}

### Generate PDF
