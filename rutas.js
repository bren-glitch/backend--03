import { Router } from "express";
const router = Router();

// Array de ejemplo
const artistas = ["Bethoven", "Van Gogh", "Mozart", "Picasso"];

// Página principal
router.get("/", (req, res) => {
    res.render("home", { titulo: "Inicio", artistas });
});

// Página de información
router.get("/info/:c", (req, res) => {
    const c = req.params.c;
    res.render("info", { titulo: "Información", c });
});

// Página de contacto (GET)
router.get("/contacto", (req, res) => {
    res.render("contacto", { titulo: "Contacto" });
});

// Procesar formulario (POST)
router.post("/contacto", (req, res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    res.render("respuesta", { titulo: "Respuesta", nombre, edad });
});

// Página de respuesta directa (GET) – opcional
router.get("/respuesta", (req, res) => {
    res.render("respuesta", { titulo: "Respuesta" });
});

export default router;
