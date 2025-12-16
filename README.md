# Dwello Website

A modern, fast website for Dwello — Phoenix's California relocation specialists. Built with [Eleventy](https://www.11ty.dev/) and [Decap CMS](https://decapcms.org/).

## Features

- ✅ **Automatic blog post listings** — Homepage updates when you add posts
- ✅ **Visual content editor** — Write posts at `yoursite.com/admin`
- ✅ **Fast & SEO-friendly** — Static HTML, no JavaScript required for visitors
- ✅ **Fully responsive** — Looks great on mobile, tablet, and desktop
- ✅ **Dwello brand styling** — Nunito font, terracotta accents, cream backgrounds

---

## 🚀 Quick Start: Deploy to Netlify

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `dwello-site`)
2. Push this project to that repository:

```bash
cd dwello-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dwello-site.git
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub account and select the `dwello-site` repository
4. Netlify will auto-detect the build settings (from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `_site`
5. Click **"Deploy site"**

Your site will be live in ~2 minutes at a URL like `random-name-123.netlify.app`

### Step 3: Enable the CMS

To use the admin panel at `/admin`, you need to enable **Netlify Identity** and **Git Gateway**:

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Under **Registration**, choose **"Invite only"** (recommended)
4. Go to **Identity** → **Services** → **Git Gateway**
5. Click **"Enable Git Gateway"**

### Step 4: Invite Yourself

1. Go to **Identity** → **Invite users**
2. Enter your email address
3. Check your email and click the invite link
4. Set your password

### Step 5: Access the CMS

1. Go to `yoursite.netlify.app/admin`
2. Click **"Login with Netlify Identity"**
3. Enter your email and password
4. Start writing posts! 🎉

---

## 📝 Writing Blog Posts

### Using the CMS (Recommended)

1. Go to `yoursite.com/admin`
2. Click **"Blog Posts"** → **"New Blog Post"**
3. Fill in the fields:
   - **Title**: Your post headline
   - **Publish Date**: When to publish
   - **Category**: Select from dropdown
   - **Excerpt**: Brief summary for previews
   - **Body**: Your main content (Markdown supported)
4. Click **"Publish"**

The site automatically rebuilds and your post appears on the homepage!

### Using Markdown Files (Alternative)

Create a new `.md` file in `src/blog/posts/`:

```markdown
---
title: "Your Post Title"
date: 2025-12-20
category: "Relocation Guide"
excerpt: "A brief description of your post."
---

Your content here. Use **bold**, *italics*, and [links](https://example.com).

## Headings Work Too

- Bullet points
- Are supported
```

Then commit and push to GitHub — Netlify will rebuild automatically.

---

## 🏗️ Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Setup

```bash
# Install dependencies
npm install

# Start local development server
npm start
```

Your site will be available at `http://localhost:8080`

The site auto-refreshes when you make changes!

### Build for Production

```bash
npm run build
```

Output goes to the `_site` folder.

---

## 📁 Project Structure

```
dwello-site/
├── src/
│   ├── _data/
│   │   └── site.json          # Site-wide settings
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk       # Base HTML template
│   │   │   └── post.njk       # Blog post template
│   │   └── partials/
│   │       ├── header.njk     # Site header
│   │       └── footer.njk     # Site footer
│   ├── admin/
│   │   ├── index.html         # CMS admin page
│   │   └── config.yml         # CMS configuration
│   ├── blog/
│   │   ├── posts/             # Blog post markdown files
│   │   │   ├── posts.json     # Default settings for posts
│   │   │   └── *.md           # Individual posts
│   │   └── index.njk          # Blog listing page
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── images/                # Image assets
│   ├── index.njk              # Homepage
│   ├── about.njk              # About page
│   ├── contact.njk            # Contact page
│   └── neighborhoods.njk      # Neighborhoods page
├── .eleventy.js               # Eleventy configuration
├── netlify.toml               # Netlify build settings
├── package.json               # Node.js dependencies
└── README.md                  # This file
```

---

## 🎨 Customization

### Colors

Edit the CSS variables in `src/css/styles.css`:

```css
:root {
    --color-primary-dark: #2D3E40;
    --color-terracotta: #C67B5C;
    --color-terracotta-hover: #d4917a;
    --color-cream: #FDFBF7;
    --color-gray-dark: #8a9a9c;
    --color-gray-light: #6b7c7e;
}
```

### Site Info

Edit `src/_data/site.json`:

```json
{
  "name": "Dwello",
  "tagline": "Find your place. Home starts here.",
  "description": "Phoenix's relocation specialists...",
  "url": "https://dwello.com"
}
```

### Blog Categories

Edit `src/admin/config.yml` to add/change category options:

```yaml
- label: "Category"
  name: "category"
  widget: "select"
  options:
    - "Relocation Guide"
    - "Tax Comparison"
    - "Your New Category"
```

---

## 🔧 Troubleshooting

### CMS login not working?

1. Make sure Identity is enabled in Netlify
2. Check that Git Gateway is enabled
3. Verify you've accepted the invite email
4. Try clearing your browser cache

### Posts not appearing?

1. Check the date isn't in the future
2. Verify the post is in `src/blog/posts/`
3. Make sure the frontmatter is valid YAML
4. Check the Netlify build logs for errors

### Styles not updating?

Clear your browser cache or do a hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

---

## 📄 License

Private project for Dwello.

---

## 🆘 Need Help?

Check the documentation:
- [Eleventy Docs](https://www.11ty.dev/docs/)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Docs](https://docs.netlify.com/)
