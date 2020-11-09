import Axios from "axios";
import React, { useState } from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = () => {
    Axios.post("https://api.untukdunia.com/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        const { api_token, email, name } = res.data.data;
        localStorage.setItem("token", api_token);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        history.push("/admin");
      })
      .catch((err) => {
        message.error("pastikan email dan password benar");
      });
  };

  if (localStorage.getItem("token")) {
    history.push("/admin");
  }
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center font-weight-bold">Login</h2>
                <div class="form-group">
                  <label>email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Masukan email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label>password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Masukan password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button onClick={login} className="btn btn-primary w-100">
                  login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
