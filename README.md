# pdf-portfolio-template
A template using HTML5 and CSS3 to style exportable PDF documents for my portfolio.

## Quick start guide for MacOS
*Refer to the [WeasyPrint Documentation](http://weasyprint.readthedocs.io/en/latest/install.html "WeasyPrint Documentation") for additional operating systems.*

**1. Install WeasyPrint**

`pip3 install WeasyPrint`

**2. Install WeasyPrint dependencies**

`brew install python3 cairo pango gdk-pixbuf libffi`

**3. Download sample files**

`cd` into your working directory.

`git clone https://github.com/hellomattio/pdf-portfolio-template.git`

**4. Generate PDF**

```cd pdf-portfolio-template/
weasyprint ./portfolio_sample.html ./output_sample.pdf
```
