const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, "src", "uploads")); // Caminho atualizado para garantir que a imagem seja salva na pasta correta
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        callback(null, `${time}_${file.originalname}`);
    }
});

const upload = multer({ storage });

module.exports = upload;
