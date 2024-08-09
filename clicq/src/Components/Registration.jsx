import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [number, setNumber] = useState('');

    function signUp() {
        const item = { name, pass, number };
        console.log(item);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <h1 className="text-center mb-4">Register Here</h1>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="number">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="Email">Email</label>
                            <input
                                type="email"
                                className="email"
                                id="email"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Enter your email "
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="pass">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="pass"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="cpass">confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="cpass"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>

                        <button type="button" className="btn btn-primary w-100" onClick={signUp}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
