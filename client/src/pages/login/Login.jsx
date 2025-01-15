import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.scss";

const Login = () => {
    const [inputs, setInputs] = useState({ name: "", password: "" });
    
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (err) {
            if (err.response && err.response.data) {
                setErr(err.response.data);
            } else {
                setErr("An error occurred during login.");
            }
        }
    };


    return (
        <div className="login">
            <div className="card">
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        {err && <div className="error-message">{err}</div>}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;