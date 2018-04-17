# pdf-portfolio-template
A template using HTML5, CSS3 and JavaScript (ES6) to create and stylise exportable PDF documents for projects in my portfolio.

## Setup guide for MacOS
*Refer to the [WeasyPrint Documentation](http://weasyprint.readthedocs.io/en/latest/install.html "WeasyPrint Documentation") for installing WeasyPrint on other operating systems.*

### Requirements
- [Homebrew](https://brew.sh/ "Homebrew")
- [pip](https://pip.pypa.io/en/stable/installing/#installing-with-get-pip-py "pip")
- [Google Chrome](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md "Google Chrome")

**1. Install WeasyPrint**

`pip3 install WeasyPrint`

**2. Install WeasyPrint dependencies**

`brew install python3 cairo pango gdk-pixbuf libffi`

**3. Download sample files**

`cd` into your working directory.

`git clone https://github.com/hellomattio/pdf-portfolio-template.git`

**4. Generate sample PDF**

`cd pdf-portfolio-template/`

`bash run.sh`

`open output_sample.pdf`

## How to use

TODO

## Documentation

TODO
