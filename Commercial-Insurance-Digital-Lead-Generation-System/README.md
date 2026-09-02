# MarketReady Risk Diagnostic

A deployable Next.js MVP for an industry-adaptive commercial insurance and risk-management readiness assessment.

## What is included
- Public landing page
- Company/industry profile
- 18 core questions plus industry branches
- Deterministic six-category scoring
- Immediate prospect result before meeting capture
- Three compliant areas to investigate
- Downloadable text summary
- Optional lead webhook
- Optional booking link
- Responsive UI and deployment configuration

## Deploy through GitHub and Vercel
1. Extract this ZIP.
2. Copy all files into the root of your GitHub repository and commit them.
3. In Vercel, confirm the repository is connected and Framework Preset is Next.js.
4. Add environment variables from `.env.example` in Vercel Project Settings.
5. Redeploy.

## Environment variables
- `IMA_ACCESS`: reserved secret for future producer-only routes. It does not connect GitHub to Vercel.
- `LEAD_WEBHOOK_URL`: optional endpoint that receives assessment lead JSON. Without it, the app runs in preview mode and logs submissions server-side.
- `NEXT_PUBLIC_BOOKING_URL`: optional booking link displayed on the results page.

## Local run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Important launch note
Before public use, obtain IMA approval for branding, disclaimers, privacy language, storage, marketing consent, lead routing and any insurance-specific findings. This MVP intentionally does not interpret policies, recommend coverage, calculate premium or claim that the prospect is overpaying.
