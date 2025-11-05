import express from "express"
import rutas from "./rutas.js"

const app = express()

// Para poder leer datos de formularios
app.use(express.urlencoded({ extended: true }))

// Configurar EJS
app.set("view engine", "ejs")
app.set("views", "./views")

// Archivos estáticos (CSS, imágenes, JS del cliente)
app.use(express.static("public"))

// Rutas
app.use("/", rutas)

// Puerto
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Aplicación en http://localhost:" + PORT)
})

