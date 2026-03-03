# Frank's Friendly Fixing

Frank is a P2P currency exchange facilitator targeting the France-Switzerland cross-border community (EUR/CHF). This Minimum Viable Product (MVP) provides a fair, mid-market rate calculator to remove friction from direct currency swaps between peers and allows users to sign up for a waitlist for future features.

**Note**: Frank is a tool for finding fair exchange rates. It is not a bank, broker, or financial institution, and it does not hold or move funds.

---

## 🛠 Tech Stack

*   **Frontend & API**: [Next.js](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Exchange Rates**: [Frankfurter API](https://www.frankfurter.app/) (Free open-source API for European Central Bank rates)
*   **Database**: [Supabase](https://supabase.com/) (PostgreSQL for the waitlist)

---

## 🚀 Getting Started Locally

### 1. Requirements
*   [Node.js](https://nodejs.org/) (v18 or newer recommended)
*   A [Supabase](https://supabase.com/) account and project.

### 2. Database Setup
Execute the following SQL commands in your Supabase project's SQL Editor to set up the waitlist table:

```sql
-- Create the waitlist table
create table public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Create policy to allow anyone to insert emails (for the form)
create policy "Allow anonymous inserts"
  on public.waitlist
  for insert
  to anon
  with check (true);
```

### 3. Environment Variables
Create a file named `.env.local` in the root of the directory and add your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Run the Development Server
Install the dependencies and start Next.js:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal, e.g., 3002) in your browser to view the application.

---

## 🌍 Deployment

You can deploy this project easily via [Vercel](https://vercel.com).
When deploying, make sure to add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to your Vercel project's Environment Variables.
