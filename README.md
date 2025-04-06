# Ejaz Ali's Portfolio Website

A personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark theme with neon accents
- Animated sections using Framer Motion
- Project filtering by category
- Contact form

## How to Update Your Portfolio

This portfolio is designed to be easily updatable through the `src/data.json` file. You can modify your personal information, skills, and projects without touching the code.

### Updating Personal Information

Edit the `personalInfo` section in `src/data.json`:

```json
"personalInfo": {
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio text here...",
  "age": 16,
  "location": "Your Location",
  "education": "Your Education",
  "email": "your.email@example.com",
  "socialLinks": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

### Updating Skills

Edit the `skills` section in `src/data.json`:

```json
"skills": {
  "technical": [
    {
      "name": "JavaScript",
      "icon": "SiJavascript",
      "level": "Intermediate"
    },
    // Add more skills here...
  ],
  "professional": [
    {
      "name": "Problem Solving",
      "percentage": 90
    },
    // Add more professional skills here...
  ]
}
```

### Updating Projects

Edit the `projects` section in `src/data.json`:

```json
"projects": [
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description...",
    "image": "/path/to/image.jpg",
    "tags": ["React", "TypeScript", "API"],
    "category": "frontend", // Options: frontend, backend, fullstack
    "githubUrl": "https://github.com/yourusername/project",
    "liveUrl": "https://project-demo.com"
  },
  // Add more projects here...
]
```

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/ejaz-developer/portfolio.git
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Build for production
   ```
   npm run build
   ```

## Customization

- Colors: Edit the CSS variables in `src/index.css`
- Layout: Modify the components in `src/components/`
- Add new sections: Create new components in `src/components/sections/`

## Image Handling

All images are stored in the `public/images` folder for better build compatibility. When referencing images in your code or data.json file, use paths like `/images/filename.png`.

To add new images:

1. Place the image file in the `public/images` folder
2. Reference it in your code or data.json using the path `/images/filename.png`

This approach ensures that images are properly served in both development and production environments.

## Email Configuration

The contact form uses EmailJS to send emails. To configure it:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the following in `src/components/sections/Contact.tsx`:
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - The service ID is set to: `service_sk29hlj`
   - The template ID is set to: `template_vyzeauc`

Make sure your EmailJS template has the following variables:

- `user_name`: Sender's name
- `user_email`: Sender's email
- `subject`: Email subject
- `message`: Email message
