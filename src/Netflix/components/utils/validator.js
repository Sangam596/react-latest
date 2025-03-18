const validator = (name, email,phone, password, isSignIn) => {
    const isNameValid = !isSignIn && /^[A-Za-z\s]{2,50}$/.test(name);
    const isEmailValid = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);
    const isPhoneValid = /^\+?[1-9]\d{1,14}$/.test(phone)
    if (isSignIn && (!isEmailValid || !isPasswordValid)) return " * Email or Password is Not Valid...!"

    if (!isSignIn && !isNameValid) return " * Enter a valid Name...!"
    if (!isEmailValid) return " * Enter a valid Email...!"
    if (!isPhoneValid) return " * Enter a valid Phone Number...!"
    if (!isPasswordValid) return " * Enter a valid Password...!"

    return null;

}

export default validator;