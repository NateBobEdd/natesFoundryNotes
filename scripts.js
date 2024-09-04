function enterPassword() {
var password;
var pass1="#LetMeIn2024"
    password =prompt('Please enter your password to view this website.','');
    if (password==pass1)
        return
    else 
    {
        window.location="/pages/noEntry.html"
    }
}