# Jaya Vishnu Portfolio

A premium recruiter-focused portfolio for Jaya Vishnu, built for Claims Processor, Data Analyst, and Business Development applications.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Shadcn/UI-inspired components

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Resume PDF

Add your resume PDF here:

`public/resume/Jaya-Vishnu-Resume.pdf`

The **Download Resume** buttons already point to that file.

If your resume has a different filename, either rename it to `Jaya-Vishnu-Resume.pdf` or update `resumePath` in `components/portfolio-client.tsx`.

## Adding Projects

Projects are currently stored in `components/portfolio-client.tsx` inside the `projects` array.

For each project, send or add:

- Project title
- Short summary
- Tools used
- Main features
- GitHub link or live link, if available
- Screenshot, if available

## Hosting

Recommended hosting: Vercel.

Before deploying:

```bash
npm run lint
npm run build
```

The contact section uses direct links for Email, WhatsApp, Phone, and LinkedIn.
