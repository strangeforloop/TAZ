Ready for review
Select text to add comments on the plan
Plan: TAZ Peer-to-Peer Mutual Aid Matcher (Section 2.2)
Context
Building the lean MVP for section 2.2 of the TAZ OS blueprint: the "Give & Take" board — a peer-to-peer mutual aid matcher that surfaces neighborhood surplus offers ("skills") against active supply requests ("needs"). This is the only feature being built now. The UI uses the brutx neo-brutalist component library (copy-paste Radix + Tailwind components). Data is persisted in flat JSON files on the server.

File Structure
TAZ/
├── client/                         # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/                 # brutx components (installed via `npx brutx@latest add`)
│   │   │       ├── button.jsx
│   │   │       ├── card.jsx
│   │   │       ├── badge.jsx
│   │   │       ├── input.jsx
│   │   │       ├── textarea.jsx
│   │   │       └── select.jsx
│   │   ├── GiveBoard.jsx           # renders list of skill/offer cards
│   │   ├── TakeBoard.jsx           # renders list of need/request cards
│   │   ├── PostForm.jsx            # single form to post a Give or Take entry
│   │   ├── App.jsx                 # two-column layout: GiveBoard | TakeBoard + PostForm
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                         # Node/Express backend
│   ├── data/
│   │   ├── skills.json             # array of offer entries (what people can give)
│   │   └── needs.json              # array of need entries (what people are requesting)
│   ├── routes/
│   │   └── matcher.js              # all API route handlers
│   ├── index.js                    # Express entry point
│   └── package.json
│
└── README.md
Data Shapes
skills.json (offers / "Give" side):

[
  {
    "id": "uuid",
    "offeredBy": "Alex",
    "category": "medical | food | tools | labor | other",
    "title": "Can splint a broken limb",
    "description": "Optional details",
    "postedAt": "ISO timestamp"
  }
]
needs.json (requests / "Take" side):

[
  {
    "id": "uuid",
    "requestedBy": "Sam",
    "category": "medical | food | tools | labor | other",
    "title": "Need water purification tablets",
    "description": "Optional details",
    "urgent": true,
    "postedAt": "ISO timestamp"
  }
]
API Endpoints
All routes in server/routes/matcher.js, mounted at /api in server/index.js.

Method	Path	Action
GET	/api/skills	Return all entries from skills.json
POST	/api/skills	Append a new offer to skills.json
GET	/api/needs	Return all entries from needs.json
POST	/api/needs	Append a new need to needs.json
No matching algorithm — the board is a simple visual display. Users self-match by reading both columns.

Frontend UI
App.jsx: Two-column layout (brutx Card components). Left = GiveBoard, Right = TakeBoard. PostForm below or in a modal.
GiveBoard / TakeBoard: Each renders a scrollable list of entries as brutx Cards with a Badge for category and an "urgent" tag on needs.
PostForm: A form with a toggle (Give / Take), name field, category select, title input, description textarea, urgent checkbox (Take only). Submits to the appropriate API endpoint.
Fetch data on mount; re-fetch after each POST.
Setup Steps
Init server: cd server && npm init -y && npm install express cors uuid
Init client: cd client && npm create vite@latest . -- --template react && npm install
Install Tailwind in client: npm install -D tailwindcss @tailwindcss/vite
Install brutx components: npx brutx@latest init && npx brutx@latest add button card badge input textarea select
Configure Vite proxy (/api → localhost:3001) to avoid CORS in dev.
Seed skills.json and needs.json as empty arrays [].
Verification
node server/index.js starts Express on port 3001, serves JSON from the data files.
npm run dev in client starts Vite dev server; the two-column board renders with empty state.
Submit a Give entry via PostForm → appears in GiveBoard without page reload.
Submit a Take (urgent) entry → appears in TakeBoard with urgent badge.
Restart server → data persists (JSON files on disk).
Add Comment