try {
    const result = 10 / 0; // This will throw a "Division by zero" error
    console.log("OK");
} 
catch(error) {
    console.error("An error occurred:", error.message);
}