# Creative Agency Portfolio

A modern portfolio website for a creative agency built with Next.js, Tailwind CSS, and Shadcn UI components.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Automatic Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys your site to GitHub Pages whenever you push to the main branch.

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Under "Pages", select the "gh-pages" branch as the source
4. Your site will be deployed automatically

### Manual Deployment

You can also deploy manually using the following steps:

1. Install dependencies:
   ```
   npm install
   ```

2. Build and deploy:
   ```
   npm run deploy
   ```

### Configuration

The project is currently configured for deployment to `liampierc3.github.io-youtube`. If you want to deploy to a different GitHub repository, make sure to update the following:

1. Update the `homepage` field in `package.json` with your GitHub username and repository name:
   ```
   "homepage": "https://liampierc3.github.io/liampierc3.github.io-youtube"
   ```

2. Update the `basePath` and `assetPrefix` in `next.config.mjs` with your repository name:
   ```
   basePath: process.env.GITHUB_ACTIONS ? '/liampierc3.github.io-youtube' : '',
   assetPrefix: process.env.GITHUB_ACTIONS ? '/liampierc3.github.io-youtube/' : '',
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
```

The static output will be generated in the `dist` directory. 