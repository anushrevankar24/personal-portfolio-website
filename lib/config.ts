export const siteConfig = {
  name: "Anush Revankar",
  title: "AI/ML Engineer",
  tagline: "From India",
  email: process.env.NEXT_PUBLIC_EMAIL || "anushrevankar.work@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 9482597386",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "https://drive.google.com/file/d/1dPKRDGxBetM1rio24KnXXMb9WsZNfamX/view?usp=sharing",
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/anushrevankar24",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "http://www.linkedin.com/in/anushrevankar24",
    twitter: process.env.NEXT_PUBLIC_TWITTER || "https://x.com/anushrevankar24",
  },
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  },
};
