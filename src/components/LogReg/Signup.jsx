import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  let navigate = useNavigate();
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
            <i class="fa-solid fa-circle-user user-login"></i>
          </div>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Masukan Username"
              className="form-control"
            />
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
          <div className="d-grid">
            <button className="btn btn-info" onClick={() => navigate("/login")}>
              Daftar
            </button>
          </div>
          <p className="text-end mt-2">
            Sudah Punya Akun?{" "}
            <Link
              to="/login"
              className="text-decoration-none ms-2 text-light fw-bold"
            >
              Masuk
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
