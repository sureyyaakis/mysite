# Lemon-Purple-Pink Developer Portfolio 🚀

A beautiful, responsive developer portfolio template featuring a unique lemon-purple-pink color scheme, clean design, and modern animations.

![Portfolio Preview](public/portfolio-preview.png)

## ✨ Live Demo

[View Live Demo](https://sureyya-portfolio.vercel.app)

## 📌 Features

- **Striking Color Palette**: Lemon yellow, purple, and pink combination for a unique look
- **Animated Hero Section**: With typing animation and social links
- **Interactive Timeline**: Color-coded professional experience timeline
- **Project Showcase**: Display your projects with descriptions and technologies
- **Responsive Design**: Fully mobile-friendly layout
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI Elements**: Gradient texts, decorative blurs, and smooth animations
- **Accessibility Focused**: High contrast and readable text

## 🛠 Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Styling**: Tailwind CSS v3
- **Building**: Vite
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Fork this repository
2. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/your-portfolio.git
   cd your-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   # or with yarn
   yarn install
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or with yarn
   yarn dev
   ```
5. Open your browser at http://localhost:5173

## 🎨 Customization Guide

### Changing Personal Information

1. **Profile Details**: Edit your name, title, and description in `src/components/sections/Hero.vue`
2. **Experience**: Update your work experience in `src/components/sections/Experience.vue`
3. **Projects**: Add your projects in `src/components/sections/Projects.vue`
4. **Skills**: Modify your skills in `src/components/sections/About.vue`
5. **Social Links**: Update social media URLs in `Hero.vue` and `Footer.vue`

### Customizing Colors

The color scheme can be modified in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#EFD958', // Lemon yellow - Change this to your preferred primary color
      'primary-dark': '#D6C14F', // Darker primary shade
      secondary: '#A15FAD', // Purple - Change this to your preferred secondary color
      tertiary: '#F2809F', // Pink - Change this to your preferred tertiary color
      // Other colors...
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `App.vue`

## 📤 Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Set the build command to `npm run build`
4. Set the output directory to `dist`

### Building for Production

```bash
npm run build
# or with yarn
yarn build
```

This will generate a `dist` folder with production-ready assets.

## 📋 Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── assets/        # Project assets
│   ├── components/    
│   │   ├── layout/    # Layout components (navbar, footer)
│   │   ├── sections/  # Main page sections
│   │   └── ui/        # Reusable UI components
│   ├── App.vue        # Main application component
│   ├── main.js        # Application entry point
│   └── style.css      # Global styles
├── index.html         # HTML template
└── tailwind.config.js # Tailwind CSS configuration
```

## 📝 License

This project is open source and available under the MIT License.

## 🧡 Contribute

Contributions are always welcome! Please feel free to open issues or submit pull requests.

## 💬 Contact

If you have any questions or feedback, feel free to reach out:

- GitHub: [sureyyaakis](https://github.com/sureyyaakis)
- LinkedIn: [Sureyya Akis](https://linkedin.com/in/sureyyaakis)
- Email: sureyya.akis@example.com

---

### Made with 💖 by Sureyya Akis
