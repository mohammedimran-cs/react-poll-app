 // Function to perform form validation
 const validation = (data) => {

    let name = data.uName;
    let country = data.country
    let email = data.email;
    let favorite = data.favoritePlayer;

    // Function to validate email using a regular expression
    function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

    if (name.trim() === "" || country.trim() === "" || email.trim() === "" || !favorite) {
        alert("Please fill in all the fields.");
        return false;
    } 
    else if (!isNaN(name)) {
        alert("Name should not be a number.");
        return false;
    }
     else if (!isNaN(country)) {
        alert("Name should not be a number.");
        return false;
    }
     else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    } 
    else if (!favorite) {
        alert("Please choose your favorite (Messi or Ronaldo).");
        return false;
    } 
    else {
       return true;
    }
};

export default validation
