import app from "./app.js";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDb} from "./config/db.js"
const port =process.env.PORT||80
connectDb()
app.use("/api/",notesRoutes)

app.listen(port,()=>{
    console.log(`App running on localhost ${port}`)
});