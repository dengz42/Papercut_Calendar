function onSignIn(googleResponse) {
    // The response contains the credential (ID token)
    const credential = googleResponse.credential;

    // You can send the credential to your backend for verification
    console.log("Google ID Token: ", credential);

    // Example of getting user info from the token (after verification)
    const userInfo = parseJwt(credential);
    console.log('User Info:', userInfo);
}
// Function to parse JWT token and get user info
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
}

const API_KEY = "AIzaSyB42LKfP7LUtFzYozr1HJlPE4j0RA6AfwI"; 
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY;

async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    
    const requestBody = {
        contents: [{ parts: [{ text: userInput }] }]
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        document.getElementById("response").innerText = data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("response").innerText = "Error fetching response.";
    }
}


