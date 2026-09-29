# A Space Play Resident Service

Resident support + condominium operations prototype. Thai is the default UI with English support.

## Included
- `/` Resident Portal
- `/report` issue intake: resident, room/area, contact, channel, category, P1-P4, details, room-access consent, convenient time
- `/track` ticket tracking
- `/status` privacy-safe public status (Progress / Pending / Finished)
- `/admin` operations dashboard with SLA, TAT/Aging, pending time, repeat issue, RCA/CAPA and CSAT fields
- `/api/tickets` prototype ticket API
- `/api/line/webhook` LINE Messaging API webhook with HMAC-SHA256 `x-line-signature` verification against the raw request body

LINE OA: `@808cvyau`

## Run
```bash
npm install
npm run dev
```

## Vercel
1. Import this GitHub repository into Vercel.
2. Add `LINE_CHANNEL_SECRET` and `LINE_CHANNEL_ACCESS_TOKEN` in Vercel Environment Variables. Never commit real secrets.
3. Deploy.
4. Set LINE Messaging API Webhook URL to `https://YOUR-DOMAIN/api/line/webhook`.
5. Use LINE Console Verify. Verification requests with an empty `events` array are accepted when the signature is valid.

## Data layer
Current V0.1 uses demo/in-memory data so UI + deployment + webhook can be verified first. Production persistence is prepared for Supabase/PostgreSQL. Google Sheets should be an operational/reporting view rather than the transaction database.

## KPI baseline
Dashboard design supports Total/Open Tickets, P1-P4, SLA response pass %, repeat issues, CSAT, open RCA and critical incidents. Operational targets can be configured for SLA >=95%, CSAT >=4.2/5, repeat issues <=10%, PM on-time >=95%, vendor score >=80%. P1 acknowledgement target: <=5 minutes.

## Next production phase
Supabase schema + RBAC, authenticated admin, real ticket persistence, attachments/before-after photos, LINE replies/notifications, audit log, SLA escalation, RCA/CAPA workflow, CSAT collection, daily inspections, PM/engineering, emergency, security/CCTV, cleaning/common areas, vendor and utility modules.
