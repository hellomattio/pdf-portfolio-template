#!/bin/bash

# Pre-process JavaScript
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --dump-dom ./sample_index.html > ./sample_output.html

# Generate PDF from HTML and CSS
weasyprint ./sample_output.html ../output/sample_output.pdf

# Cleanup
rm ./sample_output.html

# Open generated PDF
open ../output/sample_output.pdf
