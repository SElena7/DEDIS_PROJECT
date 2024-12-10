const Express = require('express');
const app = Express();  // Initialize Express application
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');

//middlewares
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// })
app.use(Express.json());  // Use Express JSON middleware

console.log("Initializing server...");

app.get("/", (req, res) => {
    res.send("Server is running!");
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "../client/public/upload");
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname);
//     },
// });

// const upload = multer({ storage: storage });

// app.post("/api/upload", upload.single("file"), (req, res) => {
//     const file = req.file;
//     console.log("Received file:", file);
//     res.status(200).json(file.filename);
// });

// app.use("/api/users", userRoutes)
// app.use("/api/posts", postRoutes)
// app.use("/api/likes", likeRoutes)
// app.use("/api/comments", commentRoutes)
// app.use("/api/relationships", relationshipRoutes)
// app.use("/api/auth", authRoutes)

app.listen(8800, () => {
    console.log("API working!!")
});
