# pdf-portfolio-template
A template using HTML5, CSS3 and JavaScript (ES6) to create and stylise exportable PDF documents for projects in my portfolio.

## Setup guide for MacOS (requires [Homebrew](https://brew.sh/ "Homebrew"))
*Refer to the [WeasyPrint Documentation](http://weasyprint.readthedocs.io/en/latest/install.html "WeasyPrint Documentation") for installing WeasyPrint, and the [PhantomJS Download Page](http://phantomjs.org/download.html "PhantomJS Download Page") for installing PhantomJS on other operating systems.*

**1. Install WeasyPrint**

`pip3 install WeasyPrint`

**2. Install WeasyPrint dependencies**

`brew install python3 cairo pango gdk-pixbuf libffi`

**3. Install PhantomJS**

`brew install phantomjs`

**4. Download sample files**

`cd` into your working directory.

`git clone https://github.com/hellomattio/pdf-portfolio-template.git`

**5. Generate sample PDF**

`cd pdf-portfolio-template/`

`weasyprint ./portfolio_sample.html ./output_sample.pdf`

`open output_sample.pdf`

## How to use

TODO

## Documentation

TODO
