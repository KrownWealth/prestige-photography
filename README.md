# Prestige Photography - README

## Overview

Prestige Photography is a modern, high-performance photography portfolio website designed to showcase my friend's work to a broader audience. The site leverages cloud-based storage (Cloudinary) for media management, ensuring fast delivery and scalability.

**Live Site:** [https://prestige-photography.vercel.app](https://prestige-photography.vercel.app) 

## Key Features

- 🖼️ **Gallery Display**: Beautifully organized photo gallery with responsive mansory grid layout
- ☁️ **Cloudinary Integration**: All media files stored and delivered via Cloudinary CDN
- 🌓 **Dark/Light Mode**: Customizable theme with persistent user preference
- ⚡ **Next.js Performance**: Optimized for speed and SEO
- ✨ **Shadcn UI Components**: Modern, accessible UI elements
- 📱 **Fully Responsive**: Looks great on all devices

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Media Storage**: [Cloudinary](https://cloudinary.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Font**: Proxima Nova (Custom loaded)

## Image Attribution
During development, placeholder images from Pexels were used under their free license. These will be replaced with the photographer's original work in the future.

## Project Structure

```
prestige-photography/
├── public/                  # Static assets
│   ├── fonts/               # Custom font files
│   └── images/              # Static images
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── (gallery)        # Gallery page
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── shared/          # Layout components
│   │   └── ui/              # Shadcn components
│   ├── lib/                 # Utilities/config
│   └── styles/              # Global styles
├── next.config.js           # Next.js config
└── tailwind.config.js       # Tailwind config
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/prestige-photography.git
cd prestige-photography
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
# (Keep API secret server-side only)
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Create a new project on Vercel and import your repository
3. Add your environment variables in Vercel's project settings
4. Deploy!

The site will automatically redeploy on git pushes to the main branch.

## Cloudinary Configuration

1. Create a Cloudinary account if you don't have one
2. Set up a new upload preset with the following settings:
   - Upload mode: Unsigned (or signed with appropriate permissions)
   - Format: Auto (f_auto)
   - Quality: Auto (q_auto)
3. Configure the following in your environment variables

## Future Improvements

- [ ] **Admin Dashboard**: Secure interface for uploading new photos directly to Cloudinary
- [ ] **Photo Tagging**: Categorize photos for better organization
- [ ] **Client Galleries**: Password-protected galleries for clients
- [ ] **Contact Form**: Integrated with email service
- [ ] **Blog**: For behind-the-scenes content and announcements


## License

This project is currently private. All rights reserved by the photographer.

---

<!-- **Photographer Contact:** [photographer@email.com](mailto:photographer@email.com)  
**Developer Contact:** [your@email.com](mailto:your@email.com) -->

*Last updated: {DATE}*