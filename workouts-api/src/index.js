const express = require("express");

//const v1Router = require("./v1/routes");
//connecting v1 workout router
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

//app.get("/", (req, res) => {
//    res.send("<h1>This is now working!</h1>");
//});

//app.use("/api/v1", v1Router);
//connecting v1 workout router
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is now listening on port ${PORT}`);
});