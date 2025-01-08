import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const [showPasswordConf, setShowPasswordConf] = useState("");

    const handleRegister = () => {
        if (!name || !email || !phone || !password || !confirmPassword) {
            alert("Please fill in all fields!");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const newUser = { name, email, phone, password };
        console.log("Registered User:", newUser);
    };

    return (
        <div
            className="container vh-100 d-flex align-items-center justify-content-center "
            style={{ marginTop: "75px", marginBottom: "75px" }}
        >
            <div
                className="card shadow-lg p-4 "
                style={{ width: "400px", borderRadius: "12px" }}
            >
                <div className="text-center mb-4 ">
                    <h2 className="fw-bold text-black">Create Account</h2>
                    <p className="text-muted">Sign up to get started</p>
                </div>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="fw-bold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
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
                        <label htmlFor="phone" className="fw-bold">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
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
                                {password ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="confirmPassword" className="fw-bold">
                            Confirm Password
                        </label>
                        <div className="input-group">
                            <input
                                type={showPasswordConf ? "text" : "password"}
                                className="form-control"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Confirm your password"
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                    setShowPasswordConf(!showPasswordConf)
                                }
                            >
                                {confirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary w-100 fw-bold"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-4">
                    <small className="text-muted">
                        Already have an account?{" "}
                        <a href="/user_login" className="text-primary fw-bold">
                            Log In
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Registration;
