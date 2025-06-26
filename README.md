
# TechCorp - Enterprise Automation Solutions

A modern, responsive corporate website built with React.js showcasing enterprise automation products and services. Features include product showcases, service pages, blog system, use cases, and comprehensive contact forms.

## 🚀 Features

### Core Pages
- **Home**: Hero section with product highlights and service overview
- **Products**: Detailed product showcase (MonetX, SupportX, GreenX, MapX)
- **Services**: Professional services (Cloud & Security, Network Automation, Generative AI)
- **Use Cases**: Real-world implementation examples with filtering
- **About**: Company mission, vision, timeline, and team
- **Blog**: Content management with categories and full article pages
- **FAQ**: Organized frequently asked questions with categories
- **Contact**: Comprehensive contact form with validation

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **React Router**: Client-side routing for SPA experience
- **TypeScript**: Type-safe development
- **Component Library**: shadcn/ui components
- **Data Management**: Local JSON files for content
- **Form Handling**: Advanced form validation and submission
- **Toast Notifications**: User feedback system
- **SEO Ready**: Meta tags and semantic HTML structure

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Context + Hooks
- **Markdown**: react-markdown for blog content

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd techcorp-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/              # shadcn/ui components
├── data/
│   ├── products.json    # Product information
│   ├── blog.json       # Blog posts
│   └── faq.json        # FAQ data
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetail.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── UseCases.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
└── App.tsx
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0B5EF4)
- **Secondary**: Purple gradients
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Green for success states

### Typography
- **Font**: System fonts (San Francisco, Segoe UI, Roboto)
- **Hierarchy**: Responsive text scales with Tailwind classes

### Components
- **Cards**: Rounded corners with soft shadows
- **Buttons**: Primary, secondary, and outline variants
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile hamburger menu

## 📝 Content Management

### Products
Edit `src/data/products.json` to update:
- Product information
- Features and benefits
- Technical specifications
- Use cases

### Blog
Edit `src/data/blog.json` to manage:
- Blog posts with markdown content
- Categories and tags
- Author information
- Publication dates

### FAQ
Edit `src/data/faq.json` to organize:
- Question categories
- Question-answer pairs
- Support information

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on git push

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Other Platforms
The project generates static files in the `dist` folder that can be deployed to any static hosting service.

## 🔧 Customization

### Branding
1. **Logo**: Update logo references in `Navbar.tsx` and `Footer.tsx`
2. **Colors**: Modify Tailwind config in `tailwind.config.ts`
3. **Content**: Update company information in data files

### Adding Pages
1. Create new page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `Navbar.tsx`

### Styling
- Use Tailwind classes for consistent styling
- Extend theme in `tailwind.config.ts` for custom values
- Override component styles in `src/index.css`

## 📱 Mobile Optimization

- **Responsive Grid**: Adapts to all screen sizes
- **Touch-Friendly**: Proper touch targets and spacing
- **Performance**: Optimized images and lazy loading
- **Navigation**: Mobile hamburger menu

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta descriptions and titles
- **Semantic HTML**: Proper heading hierarchy
- **Fast Loading**: Optimized build with Vite
- **Clean URLs**: React Router for SPA navigation

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

## 📈 Performance

- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Removes unused code
- **Optimized Images**: WebP format recommendations
- **Minimal Bundle**: Only necessary dependencies

## 🔐 Security

- **Input Validation**: Form validation on contact forms
- **XSS Protection**: Safe HTML rendering
- **HTTPS Ready**: Secure deployment configuration
- **No Sensitive Data**: Client-side only application

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- Email: support@techcorp.com
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

## 🚧 Roadmap

### Phase 1 (Current)
- ✅ Core website functionality
- ✅ Responsive design
- ✅ Content management system

### Phase 2 (Future)
- [ ] CMS integration (Strapi/Contentful)
- [ ] Newsletter subscription
- [ ] Live chat integration
- [ ] Analytics dashboard

### Phase 3 (Advanced)
- [ ] Multi-language support
- [ ] A/B testing framework
- [ ] Advanced SEO optimization
- [ ] Progressive Web App features

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
