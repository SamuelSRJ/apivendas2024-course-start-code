import { env } from "../env/index";
import { app } from "./app";

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}!`)
    console.log('API docs available at GET /docs')
})
