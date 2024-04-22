const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const { data } = require("jquery");
const cors = require("cors");

const app = express();
const port = 8081;

// MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login",
});

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối đến cơ sở dữ liệu: " + err.stack);
    return;
  }
  console.log("Kết nối thành công đến cơ sở dữ liệu MySQL");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  const sql = "INSERT INTO users (email, password, name) VALUES (?, ?, ?)";
  connection.query(sql, [email, password, name], (error, results, fields) => {
    if (error) {
      console.error("Lỗi thêm dữ liệu vào cơ sở dữ liệu: " + error.stack);
      return res
        .status(500)
        .json({ message: "Lỗi thêm dữ liệu vào cơ sở dữ liệu" });
    }
    console.log("Tạo tài khoản thành công");
    res.status(200).json({ message: "Tạo tài khoản thành công" });
    console.log(req.body);
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  connection.query(sql, [email, password], (error, results, fields) => {
    if (error) {
      console.error("Lỗi truy vấn cơ sở dữ liệu: " + error.stack);
      return res.status(500).json({ message: "Lỗi truy vấn cơ sở dữ liệu" });
    }
    if (results.length === 0) {
      console.log("Đăng nhập không thành công");
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không chính xác" });
    }
    console.log("Đăng nhập thành công");
    res.status(200).json({ message: "Đăng nhập thành công" });
  });
});

app.get("/", (req, res) => {
  res.send("Server đang hoạt động");
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
