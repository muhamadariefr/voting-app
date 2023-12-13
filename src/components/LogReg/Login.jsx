import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // To track password visibility
  const navigate = useNavigate();
  let verif = 0;

  // Simulate admin login logic
  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      // Redirect to the admin dashboard
      navigate("/admin");
    } else if (email === "user@gmail.com" && password === "user123") {
      // useEffect(() => {
      localStorage.setItem("keyLogin", JSON.stringify((verif = 1)));
      //  }, [verif]);

      navigate("/");
    } else {
      // Handle login failure (e.g., show an error message)
      alert("Login Gagal. Username atau Password tidak valid!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 text-light pt-5">
      <div
        className="shadow p-5 rounded-5 bg-white login-form"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <form>
          <h1 className="text-center mb-2 fw-bold title-form">Masuk</h1>
          <div className="login-icon">
            <i className="fa-solid fa-circle-user user-login"></i>
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
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Ingat saya
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-info" onClick={handleLogin}>
              Masuk
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#" className="text-decoration-none text-light">
              Lupa Password?
            </a>
          </p>
          <div className="text-center d-grid">
            <button className="btn btn-outline-info">
              <Link
                to="/signup"
                className="text-decoration-none text-light fw-bold"
              >
                Daftar Akun
              </Link>
            </button>
          </div>

          <p className="text-start mt-4">
            <Link to="/" className="text-decoration-none ms-2 text-light">
              <i class="fa-solid fa-arrow-left"></i> Back to Home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
