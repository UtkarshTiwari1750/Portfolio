const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const mailSender  = require("./utils/mailSender");
const { contactMe } = require("./utils/mailFormat");

const app = express();
dotenv.config();
app.use(express.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)

const PORT = process.env.PORT;

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.post("/sendmail", async(req, res) => {
    const {email, title, body} = req.body;
    try {
        const emailResponse = await mailSender(email, title, contactMe(email, body));
        return res.status(200).json({
            success: true,
            message: "Email Sent Successfully",
        })
    }catch(error) {
        console.log("Error...", error);
        return res.status(400).json({
            success: false,
            message: "Error while sending mail",
            error: error,
        })
    }
})

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});