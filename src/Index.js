import express from "express";
import dotenv from "dotenv";
import MiddleWare from "./MiddleWare.js";
import helmet from "helmet";
import cors from "cors";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    // ORIGIN SHOULDNT BE SEE ABLE!!
    origin: "http://271.0.0.1:5000/",
    optionsSuccessStatus: 200,
  }),
);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["self", "https:"],
      "script-src": ["'self'", "https:", "https://apis.google.com"],
      "style-src": ["'none'"],
      "img-src": ["'none'"],
      "font-src": ["'none'"],
      "connect-src": ["'self'", "https:"],
    },
  }),
);

app.use(MiddleWare);

app.get("/", (req, res) => {
	res.json({
		message: "Password Generator API!"
	});
});

app.listen(PORT, () => {
  console.log(`[API]: Connected to:\n http://localhost:${PORT}/`);
});
