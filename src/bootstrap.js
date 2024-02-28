import teacherRouter from "./modules/teacher/teacher.routes.js"

export function bootstrap(app){
    app.get('/', (req, res) => res.send('Hello World!'))  

    app.use("/api/v1/teacher",teacherRouter)



}



