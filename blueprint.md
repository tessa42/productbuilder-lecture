# Project Blueprint

## Overview
This project is a Lotto Number Generator with a contact form. It uses HTML, CSS, and JavaScript, following modern web development practices. It now also includes Google Analytics for tracking.

## Style, Design, and Features

### Initial Version
-   **Lotto Number Generator:** Generates random lottery numbers.
-   **Theme Switch:** Allows users to toggle between themes.
-   **Contact Form:** A modern-styled contact form that submits data to Formspree.
-   **Responsive Design:** Adapts to different screen sizes.

### Current Version (with Google Analytics)
-   All features from the initial version are retained.
-   **Google Analytics Integration:** Added Google Tag Manager (gtag.js) to `index.html` for tracking user interactions and page views.

## Plan for Current Change: Add Google Tag Manager Script

### Steps
1.  **Find all HTML files:** Use `glob` to locate all `.html` files in the project. (Completed)
2.  **Read file content:** Read the content of each identified HTML file. (Completed for `index.html`)
3.  **Insert GTM script:** Insert the provided Google Tag Manager script just before the `</head>` closing tag in each HTML file. (Completed for `index.html`)