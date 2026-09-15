# TOUGH HAULERS Backend

Backend API for the public website and admin dashboard.

## Setup

1. Copy `.env.example` to `.env` and fill in the real values locally or in the hosting provider.
2. Run `npm install`.
3. Set `ADMIN_EMAIL` and a unique `ADMIN_PASSWORD` of at least 12 characters, then create the first administrator with `node src/utils/createAdmin.js`.
4. Start development with `npm run dev`.

Never commit `.env`. Rotate any database or SMTP credentials that were previously shared or committed.

## Catalog API

- `GET /api/categories` public active categories
- `POST /api/categories` protected create
- `PATCH /api/categories/:id` protected update
- `DELETE /api/categories/:id` protected archive
- `GET /api/products` public active products with pagination
- `GET /api/products/:identifier` public product by id or slug
- `POST /api/products` protected create
- `PATCH /api/products/:id` protected update
- `DELETE /api/products/:id` protected archive
- `POST /api/media/images` protected multipart upload (`images`, max 12, 5 MB each)
- `DELETE /api/media/images` protected Cloudinary image removal

Protected endpoints accept the secure `admin_token` cookie. Bearer tokens remain supported temporarily while the old dashboard is migrated.

## Public Enquiry API

- `POST /api/contact` saves a Contact Us message
- `POST /api/build-requests` saves a Let's Build request
- `POST /api/project-briefs` saves a production-line project brief
- `GET /api/admin/project-briefs` lists project briefs (admin only)
- `PATCH /api/admin/project-briefs/:id/status` updates follow-up status (admin only)

Public forms are validated and rate-limited. Database saving is independent from
SMTP delivery, so a temporary email-provider failure does not lose the request
or keep the website submit button waiting.
