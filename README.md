# Locus Delivery Platform — Phase 1

A simple, secure MVP for Locus Delivery Solution.

## Included now
- Landing page
- Customer and rider self-registration
- Login asks account type: Customer, Rider, Dispatcher or Admin
- Password hashing with bcrypt
- Secure HTTP-only SameSite sessions
- CSRF protection on state-changing forms
- Helmet security headers
- Authentication rate limiting
- Customer booking flow: Delivery, Errand, Parcel
- Rider job flow with Accept / Reject
- Admin dashboard
- Dispatcher dashboard
- Admin-only manual dispatcher registration
- Admin-only manual rider assignment
- SQLite database for the MVP

## Run locally
1. Install Node.js 20+.
2. Copy `.env.example` to `.env`.
3. Set a unique `SESSION_SECRET` of 32+ characters.
4. Set `ADMIN_EMAIL` and a strong `ADMIN_PASSWORD` of 12+ characters.
5. Run `npm install`.
6. Run `npm start`.
7. Open `http://localhost:3000`.

The initial admin account is created automatically the first time the server starts when ADMIN_EMAIL and ADMIN_PASSWORD are set.

## Before production
Use HTTPS, a managed PostgreSQL database, a secret manager, automated backups, monitoring, email/phone verification, password reset, 2FA for admin, audit logs, and a vetted payment provider. Never expose database credentials or admin secrets in browser code.
