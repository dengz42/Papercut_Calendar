function handleClientLoad(){
    gapi.load('client:auth2', initClient);
}
function initClient(){
    gapi.client.init({
        apiKey: "AIzaSyBkE-rQQJ-uWpda7Ax3tulbcT18rz3FWqI",
        clientId: "760407733920-jp8qptmqeog83j3gi2206vft68uips1l.apps.googleusercontent.com",
        discoveryDocs: "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        scope: "https://www.googleapis.com/auth/calendar.events",
    }).then(function (){
        // Listen for sign-in state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}
function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}
function handleAuthClick(event){
    gapi.auth2.getAuthInstance().signIn();
}
function handleSignoutClick(event){
    gapi.auth2.getAuthInstance().signOut();
}
function updateSigninStatus(isSignedIn){
    if(isSignedIn){
        listUpcomingEvents();
    } else{
        // Prompt user to sign in
    }
}
