import Axios from "axios";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
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
                <br />
                <Form
                  name="normal_login"
                  className="login-form"
                  onFinish={login}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined className="site-form-item-icon" />}
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      block
                      loading={loading}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
