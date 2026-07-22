# Full-Stack Portfolio Website
A responsive portfolio website built with React, Vite, Node.js, and Express.
## Features- About and skills sections- Projects loaded from an Express backend- Contact form connected to the backend- Responsive design- Copyright footer- Frontend deployed on Vercel- Backend deployed on Render
## Project Structure
portfolio-workshop/- client/ - React frontend- server/ - Express backend
## Run the Backend
cd server
npm install
npm run dev
## Run the Frontend
Create client/.env:
VITE_API_URL=http://localhost:5000
Then run:
cd client
npm install
npm run dev
## API Endpoints- GET /- GET /projects- POST /contact
## Submission Links- GitHub Repository: Add after uploading- Vercel Frontend: Add after deployment- Render Backend: Add after deployment