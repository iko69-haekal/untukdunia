import Axios from "axios";
import React, { useState } from "react";
import { message, Button } from "antd";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const login = () => {
    setLoading(true);
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
      })
      .finally((e) => setLoading(false));
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

                <Button onClick={login} type="primary" block loading={loading}>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
