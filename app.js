import express from 'express';
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import "dotenv/config";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
// import session from "express-session";
const app = express()
app.use(cors());
app.use(express.json());
Hello(app)
CourseRoutes(app);
ModuleRoutes(app)
Lab5(app)
app.listen(process.env.PORT || 4000);