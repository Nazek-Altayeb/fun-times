import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignInForm from "../SignInForm";
// reference : https://github.com/SandraBergstrom/travel-tickr/blob/main/src/pages/auth/__tests__/LoginForm.test.js
test("renders Signin page", () => {
    render(
        <Router>
            <SignInForm />
        </Router>
    );


    // Check to see if username field is rendered to the user
    const usernameField = screen.getByPlaceholderText("Username");
    expect(usernameField).toBeInTheDocument();

    const passwordField = screen.getByPlaceholderText("Password");
    expect(passwordField).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Sign in" });
    expect(submitButton).toBeInTheDocument();
});