# 🚀 Personal Portfolio Website

A modern, professional portfolio website built with Next.js 14, showcasing my journey as an AI/ML Engineer. Features a dark purple theme, smooth animations, and a clean, mature design perfect for international freelance clients.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)

## ✨ Features

- **🎨 Modern Design**: Dark theme with purple gradients, professional and clean aesthetic
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Performance**: Built with Next.js 14 for lightning-fast page loads
- **🎭 Smooth Animations**: Framer Motion powered animations and transitions
- **📊 Dynamic Sections**:
  - Hero section with profile photo and social links
  - About me with education and leadership highlights
  - LinkedIn-style career progression (showing promotions at IRIS)
  - Project showcase with demo videos and GitHub links
  - Skills section with authentic brand-colored tech icons
  - Contact form with validation
- **🔗 External Resume**: Resume hosted on Google Drive for easy updates without redeployment
- **🎯 SEO Optimized**: Meta tags and Open Graph tags for social sharing

## 🛠️ Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework

### UI & Animations
- **Framer Motion** - Smooth animations and page transitions
- **React Icons** - Icon library with authentic brand colors

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/anushrevankar24/personal-portfolio-website.git
cd personal-portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory (already gitignored):

```env
# Personal Information
NEXT_PUBLIC_EMAIL="your.email@example.com"
NEXT_PUBLIC_PHONE="+91 XXXXXXXXXX"

# Resume URL (Google Drive recommended)
NEXT_PUBLIC_RESUME_URL="your-google-drive-link"

# Social Links
NEXT_PUBLIC_GITHUB="https://github.com/yourusername"
NEXT_PUBLIC_LINKEDIN="https://linkedin.com/in/yourusername"
NEXT_PUBLIC_TWITTER="https://x.com/yourusername"

# Contact Form (EmailJS - optional)
EMAILJS_SERVICE_ID="your_service_id"
EMAILJS_TEMPLATE_ID="your_template_id"
EMAILJS_PUBLIC_KEY="your_public_key"
```

4. **Run the development server**
```bash
npm run dev
# or use the convenience script
./start.sh
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/        # Contact form API endpoint
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Project showcase
│   ├── Skills.tsx          # Skills grid
│   └── Contact.tsx         # Contact form
├── lib/
│   ├── config.ts           # Site configuration
│   └── utils.ts            # Utility functions
├── public/
│   └── profile.png         # Profile photo
├── start.sh                # Start dev server script
├── stop.sh                 # Stop all servers script
└── .env.local              # Environment variables (not in git)
```

## 🎨 Customization

### Update Personal Information

Edit `lib/config.ts` or use environment variables in `.env.local`:
- Name, title, tagline (hardcoded in config.ts)
- Email, phone, social links (from .env.local)
- Resume link (Google Drive recommended)

### Modify Sections

Each component in `components/` is self-contained and can be easily modified:

- **Experience**: Update `experiences` array in `Experience.tsx`
- **Projects**: Update `projects` array in `Projects.tsx`
- **Skills**: Update `skillCategories` array in `Skills.tsx`
- **About**: Edit the bio text in `About.tsx`

### Change Theme Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  purple: {
    primary: "#8B5CF6",  // Change these values
    accent: "#A78BFA",
    dark: "#6D28D9",
  },
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Build command: `npm run build`  
Start command: `npm start`

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Sign up for [EmailJS](https://www.emailjs.com/) (free tier available)
2. Create an email service and template
3. Add credentials to `.env.local`:
   ```env
   EMAILJS_SERVICE_ID="your_service_id"
   EMAILJS_TEMPLATE_ID="your_template_id"
   EMAILJS_PUBLIC_KEY="your_public_key"
   ```
4. Uncomment EmailJS code in `app/api/contact/route.ts`

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint

# Convenience scripts
./start.sh       # Start dev server (checks dependencies)
./stop.sh        # Stop all running Next.js servers
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 👨‍💻 Author

**Anush Revankar**
- GitHub: [@anushrevankar24](https://github.com/anushrevankar24)
- LinkedIn: [Anush Revankar](https://linkedin.com/in/anushrevankar24)
- Email: anushrevankar07@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org/)

---

⭐ If you found this helpful, consider giving it a star!
