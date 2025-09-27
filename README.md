# Portfolio Website

A modern, responsive portfolio website built with React. This project showcases a clean, professional design with separate CSS files for each component, following best practices for maintainable code.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Separate CSS Files**: Each component has its own CSS file for better organization
- **React Router**: Client-side routing for smooth navigation
- **Contact Form**: Functional contact form with form validation
- **Project Showcase**: Display your projects with links to GitHub and live demos
- **Skills Section**: Highlight your technical skills and experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── styles/
│   │   │   ├── Header.css
│   │   │   ├── Home.css
│   │   │   ├── About.css
│   │   │   ├── Projects.css
│   │   │   ├── Contact.css
│   │   │   └── Footer.css
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── global.css
│   │   └── App.css
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **CSS3**: Modern CSS with Flexbox and Grid
- **HTML5**: Semantic markup
- **JavaScript ES6+**: Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Header.js**: Update the logo text
2. **Home.js**: Update name, title, and description
3. **About.js**: Update your story, stats, and skills
4. **Projects.js**: Add your actual projects
5. **Contact.js**: Update contact information and social links
6. **Footer.js**: Update footer content and social links

### Styling
Each component has its own CSS file in `src/components/styles/`:
- Modify colors, fonts, and spacing as needed
- The design uses CSS custom properties for easy theming
- Responsive breakpoints are defined for mobile-first design

### Images
Add your images to the `src/assets/images/` folder and update the image paths in the components.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-react",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- Minified CSS and JavaScript in production
- Modern CSS with efficient selectors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me through the contact form on the website

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- React community for excellent documentation
- CSS Grid and Flexbox for responsive layouts

---

**Happy Coding! 🚀**
