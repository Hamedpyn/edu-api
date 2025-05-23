const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
// const { setHeaders } = require("./middlewares/headers");
const { errorHandler } = require("./middlewares/errors");
const cors = require('cors');

//*routes import
const usersRoutes = require("./routes/v1/user");
const articlesRoutes = require("./routes/v1/article");
const authRoutes = require("./routes/v1/auth");
const courseRoutes = require("./routes/v1/course");
const menuRoutes = require("./routes/v1/menu");
const categoryRoutes = require("./routes/v1/category");
const commentsRoutes = require("./routes/v1/comment");
const newslettersRoutes = require("./routes/v1/newsletter");
const contactRoutes = require("./routes/v1/contact");
const searchRoutes = require("./routes/v1/search");
const notificationRoutes = require("./routes/v1/notification");
const infosRoutes = require("./routes/v1/infos");
const offsRoutes = require("./routes/v1/off");
const ordersRoutes = require("./routes/v1/order");
const ticketsRoutes = require("./routes/v1/ticket");

const app = express();

//* CORS Middleware
app.use(cors({
  origin: ["https://edu-web-client.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
}))


//* BodyPaser
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use(express.json())


//* Routes
app.use("/v1/articles", articlesRoutes);
app.use("/v1/auth", authRoutes);
app.use("/v1/category", categoryRoutes);
app.use("/v1/comments", commentsRoutes);
app.use("/v1/contact", contactRoutes);
app.use("/v1/courses", courseRoutes);
app.use("/v1/infos", infosRoutes);
app.use("/v1/menus", menuRoutes);
app.use("/v1/newsletters", newslettersRoutes);
app.use("/v1/notifications", notificationRoutes);
app.use("/v1/offs", offsRoutes);
app.use("/v1/orders", ordersRoutes);
app.use("/v1/search", searchRoutes);
app.use("/v1/tickets", ticketsRoutes);
app.use("/v1/users", usersRoutes);

//* Error Controller
app.use((req, res) => {
  console.log("this path is not available:", req.path);
  res.status(404).json({ message: "404 OOPS! PATH NOT FOUND" });
});
app.use(errorHandler);

module.exports = app;
