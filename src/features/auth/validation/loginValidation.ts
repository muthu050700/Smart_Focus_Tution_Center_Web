export const validateLoginEmailAndPassword = (email: string, password: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isEmailValid = emailRegex.test(email ?? "");

    const isPasswordValid = passwordRegex.test(password ?? "");

    return (isEmailValid && isPasswordValid);
}