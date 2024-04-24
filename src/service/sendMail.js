import axios from "axios";
import { toast } from "sonner";

const SEND_MAIL_API = process.env.NEXT_PUBLIC_BASE_URL + '/sendmail';

export async function sendMail(email, title, body) {
    toast.promise(
        async() => await axios.post(SEND_MAIL_API, {email, title, body}),
        {
            loading: "Loading...",
            success: "Message Send Successfully",
            error: "Server Error",
        }
    )
}