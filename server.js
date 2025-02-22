const express = require("express");

const app = express();

require("./db/db");
require("dotenv").config();
const path = require("path");
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingsRoute = require("./routes/bookingsRoute");
app.use(express.json());
// Serve static files from the React frontend app
app.use(express.static(path.join("../" + __dirname, "client/public")));
// Anything that doesn't match the above, send back index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);

app.get("/", (req, res) => {
    res.send("hey");
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`node server started using nodemon`));
