let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let dietaryServicesRole = "enrolled";
let isAuthorized = true;

// Check user role
if (userRole === "admin") {
    accessLevel = "Full access granted!";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted!";
} else {
    accessLevel = "No access granted!";
}

console.log("Access Level:", accessLevel)

// Check if user is logged in
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!"
    } else {
        userMessage = "Welcome, User!"
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// check user authentication

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Dietary Services Program

switch (dietaryServicesRole) {
    case "employees":
        isAuthorized = "Full access to Dietary Services";
        break;
    case "enrolled":
        isAuthorized = "Full access to Dietary Services and one-to-one interaction with a dietrician."
        break;
    case "subscriber":
        isAuthorized = "Partial access to Dietary Services only";
        break;
    case "non-subscriber":
        isAuthorized = "Need to enroll or subscribe to use this services";
        break;
    default:
        isAuthorized = "Unknown";
}

console.log("Authorization Status:", isAuthorized)