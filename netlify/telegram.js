// Conceptual Node.js Serverless Function (This file is NOT script.js)

const TELEGRAM_BOT_TOKEN = '8571222040:AAE530rMjwvdNcJPuK20G9Jua-pys0ZA9f8'; // Set as environment variable
const TELEGRAM_CHAT_ID = '1896494104'; // <--- IT GOES HERE

exports.handler = async (event) => {
    // ... (rest of the function setup) ...
    
    // Construct the Telegram API URL
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        // Send the message
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID, // <--- AND IT IS USED HERE
                text: text,
                parse_mode: 'Markdown'
            })
        });
        
        // ... (rest of the function logic) ...
    } catch (e) {
        // ... (error handling) ...
    }
};
