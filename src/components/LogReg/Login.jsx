import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();

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
            <i class="fa-solid fa-circle-user user-login"></i>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Masukan Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Masukan Password"
              className="form-control"
            />
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
            <button className="btn btn-info" onClick={() => navigate("/admin")}>
              Masuk
            </button>
          </div>
          <p className="text-end mt-2">
            <a href="#" className="text-decoration-none text-light">
              Lupa Password?
            </a>{" "}
            <Link
              to="/signup"
              className="text-decoration-none ms-2 text-light fw-bold"
            >
              Daftar Akun
            </Link>
          </p>
          <p className="text-center">
          <Link
              to="/"
              className="text-decoration-none ms-2 text-light fw-bold"
            >
              Kembali ke Beranda
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
