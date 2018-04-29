#!/bin/bash

# Pre-process JavaScript
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --dump-dom ./index.html > output.html

# Generate PDF from HTML and CSS
weasyprint ./output.html ./output/output.pdf

# Cleanup
rm output.html

# Open generated PDF
open output/output.pdf
