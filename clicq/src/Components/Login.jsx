import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill in all fields!");
            return;
        }
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div
                className="card shadow-lg p-4"
                style={{ width: "400px", borderRadius: "12px" }}
            >
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-black">Welcome to Amazon</h2>
                    <p className="text-muted">Log in to your account</p>
                </div>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="fw-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="fw-bold">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                            />
                            <label
                                htmlFor="rememberMe"
                                className="form-check-label"
                            >
                                Remember Me
                            </label>
                        </div>
                        <a
                            href="/forgot-password"
                            className="text-decoration-none text-primary"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary w-100 fw-bold"
                        onClick={handleLogin}
                    >
                        Log In
                    </button>
                </form>
                <div className="text-center mt-4">
                    <small className="text-muted">
                        Don’t have an account?{" "}
                        <a
                            href="/user_registation"
                            className="text-primary fw-bold"
                        >
                            Register
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Login;
