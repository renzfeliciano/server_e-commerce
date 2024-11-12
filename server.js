import app from "./app.js"

const PORT = process.env.PORT ?? 3000
const ENVIRONMENT = process.env.NODE_ENV ?? 'development'

app.listen(PORT, () => {
    console.log(`Server is now running in ${ENVIRONMENT} mode on port ${PORT}`)
})