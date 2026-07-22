const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A full-stack portfolio built with React and Express.",
    tech: ["React", "Node.js", "Express", "CSS"],
    github: "https://github.com/tauhidhossain8899/portfolio-workshop",
    demo: "https://your-vercel-link.vercel.app",
  },
  {
    id: 2,
    title: "Supply Chain Inventory Analytics",
    description: "A data analytics project created using SQL and Power BI.",
    tech: ["SQL", "Power BI", "Data Analytics"],
    github: "https://github.com/tauhidhossain8899/Supply-Chain-Inventory-Analytics",
    demo: "https://github.com/tauhidhossain8899",
  },
];
app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});
app.get("/projects", (req, res) => {
  res.json(projects);
});
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }
  console.log("Contact form submitted:", {
    name,
    email,
    message,
  });
  return res.status(200).json({
       message: "Message received successfully",
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});