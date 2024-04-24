exports.contactMe = (
    email,
    message,
) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Me</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }

        </style>
    </head>

    <body>
        <div class="container">

            <div class="message">Contact Me</div>
            <div class="body">
                <p>
                    Message from 
                    <a href="mailto:${email}">${email}</a>
                </p>
                <p>Message: ${message}</p>
            </div>
        </div>
    </body>

    </html>`
}