# RentSpace

RentSpace is a premium rental marketplace UI built with Next.js, React, and Tailwind CSS. It includes a modern landing page, featured property cards, advanced search filters, owner and renter dashboards, property details, authentication screens, dark mode, responsive layouts, and SEO metadata.

## Run Locally

Install Node.js 18.17 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Included Routes

- `/` - landing page
- `/properties/skyline-studio-indiranagar` - property details page
- `/dashboard/owner` - property owner dashboard
- `/dashboard/renter` - renter dashboard
- `/auth/login` - login
- `/auth/register` - registration with email verification prompt
- `/auth/forgot-password` - password reset

## Docker

Build and run the production image:

```bash
docker build -t rentspace:local .
docker run --rm -p 3000:3000 rentspace:local
```

## Helm Deployment

Install or upgrade the app in Kubernetes:

```bash
helm upgrade --install rentspace helm/rentspace \
  --namespace rentspace \
  --create-namespace \
  --set image.repository=ghcr.io/YOUR_ORG/rentspace \
  --set image.tag=latest
```

Enable ingress by overriding `ingress.enabled`, `ingress.hosts`, and optional TLS values.

## GitHub Actions CI/CD

The workflow at `.github/workflows/ci-cd.yml` runs lint/build, builds and pushes a Docker image to GHCR, lints the Helm chart, and can deploy with Helm.

To enable automatic deploys:

- Add repository secret `KUBE_CONFIG` containing a base64-encoded kubeconfig.
- Add repository variable `ENABLE_HELM_DEPLOY` with value `true`.
- Push to the default branch.
