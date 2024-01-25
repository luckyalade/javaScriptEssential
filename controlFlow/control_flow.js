let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

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