import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const Login = ({ show, handleClose, handleLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State để lưu thông báo lỗi

  const handleLogin = async () => {
    try {
      const response = await fetch("https://api-demo-4gqb.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Gọi callback để gửi thông tin người dùng về App.js
      handleLoginSuccess(data.user); 

      // Reset lại form sau khi đăng nhập thành công
      setUsername("");
      setPassword("");
      setError(null);

      // Đóng modal
      handleClose();
    } catch (error) {
      console.error("Login failed:", error);
      setError("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>} {/* Hiển thị thông báo lỗi nếu có */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
