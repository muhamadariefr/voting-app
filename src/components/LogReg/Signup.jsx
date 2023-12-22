import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // To track password visibility
  const navigate = useNavigate();

  const handleRegistration = () => {
    // Simulate user registration logic (no actual data storage)
    // You can add validation or save user data to a state or context if needed
    // For simplicity, we're just showing an alert and redirecting to the login page
    alert("Anda berhasil daftar akun");
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 text-light pt-5">
      <div
        className="shadow p-5 rounded-5 bg-white signup-form"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <form>
          <h1 className="text-center mb-2 fw-bold title-form">Buat Akun</h1>
          <div className="login-icon">
            <i className="fa-solid fa-circle-user user-login"></i>
          </div>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Masukan Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Masukan Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukan Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-group-text">
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-info" onClick={handleRegistration}>
              Daftar
            </button>
          </div>
          <p className="text-end mt-2">
            Sudah Punya Akun?{" "}
            <Link to="/login" className="text-decoration-none ms-2 text-light fw-bold">
              Masuk
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
