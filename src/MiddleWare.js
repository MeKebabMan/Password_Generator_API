import dotenv from "dotenv"
dotenv.config()

const APIKEY = process.env.KEY || "1234" || undefined

function CHECK_API_KEY(KEY) {
	if (APIKEY == undefined) {return false}
	return KEY ===  APIKEY;
}

export default function MiddleWare(req, res, next) {
	const key = req.query.key;
	
	if (!key || !CHECK_API_KEY(key)) {
		return res.status(401).json({ error: "Invaild API Key!" })
	}

	next();
}
