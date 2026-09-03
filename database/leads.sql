-- Run this once in the Aiven cybelinx PostgreSQL service.
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(320) NOT NULL,
  company VARCHAR(160) NOT NULL,
  interest VARCHAR(160) NOT NULL,
  message TEXT NOT NULL,
  source VARCHAR(120) NOT NULL DEFAULT 'direct',
  medium VARCHAR(120),
  campaign VARCHAR(160),
  content VARCHAR(160),
  landing_page VARCHAR(500),
  status VARCHAR(32) NOT NULL DEFAULT 'new',
  notes TEXT,
  follow_up_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (LOWER(email));
CREATE INDEX IF NOT EXISTS leads_interest_idx ON leads (interest);
CREATE INDEX IF NOT EXISTS leads_status_created_idx ON leads (status, created_at DESC);
CREATE INDEX IF NOT EXISTS leads_campaign_idx ON leads (campaign);

ALTER TABLE leads ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS follow_up_at TIMESTAMPTZ;
