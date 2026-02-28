
let statusCode = 401; // Example status code, replace with actual response code
switch (statusCode) {
    case 200:
        console.log(statusCode + " Result :" + " PASS - OK: Request successful");
        break;
    case 201:
        console.log(statusCode + " Result :" + " PASS - Created: Resource created successfully");
        break;
    case 301:
        console.log(statusCode + " Result :" + " WARNING - Moved Permanently: URL has changed");
        break;
     case 400:
        console.log(statusCode + " Result :" + " FAIL - Bad Request: Check request parameters");
        break;
    case 401:
        console.log(statusCode + " Result :" + " FAIL - Unauthorized: Check auth token");
        break;
    case 403:
        console.log(statusCode + " Result :" + " FAIL - Forbidden: Insufficient permissions");
        break;  
    case 404:
        console.log(statusCode + " Result :" + " FAIL - Not Found: Check endpoint URL");
        break;
    case 500:
        console.log(statusCode + " Result :" + " FAIL - Internal Server Error: Backend issue");
        break;
    default:
        console.log("UNKNOWN - Unhandled status code");
}