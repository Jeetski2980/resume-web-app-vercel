# Jeet Anil - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark/light theme toggle
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS transitions and keyframe animations
- **Project Showcase**: Individual project pages with detailed information
- **Contact Form**: Functional contact form with mailto integration
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Theme)
├── data/              # Static data (projects)
├── pages/             # Page components
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles

public/
├── _redirects         # Netlify/Vercel redirects
└── robots.txt         # SEO robots file
```

## 🚀 Deployment on Vercel

### Option 1: Deploy from Git Repository

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts and your site will be deployed!

## 🔧 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Projects Data
Edit `src/data/projects.js` to add/modify projects:

```javascript
export const projects = [
  {
    id: 'project-id',
    title: 'Project Title',
    shortDescription: 'Brief description',
    // ... more project data
  }
];
```

## 📞 Contact

- **Email**: jeetanil28@gmail.com
- **GitHub**: [Jeetski2980](https://github.com/Jeetski2980)
- **Website**: [PrepMind](https://prepmind.org)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
