import { globalError } from "./middleware/globalErrorMiddleware.js";
import teacherRouter from "./modules/teacher/teacher.routes.js"
import { AppError } from "./utils/AppError.js";

export function bootstrap(app){
    app.get('/', (req, res) => res.send('Hello World!'))  

    app.use("/api/v1/teacher",teacherRouter)

  // url error
  app.use("*", (req, res, next) => {
    next(new AppError(`invalid url ${req.originalUrl}`, 404));
  });

  // globalError
  app.use(globalError);
}
