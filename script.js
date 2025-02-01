require('dotenv').config();

const clientId = process.env.CLIENT_ID;
const apiKey = process.env.API_KEY;

console.log("Client ID:", clientId); // Test if variables are loaded
console.log("API Key:", apiKey);    // Test if variables are loaded

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


