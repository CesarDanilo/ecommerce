const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve("uploads/"));
         // Caminho atualizado para garantir que a imagem seja salva na pasta correta
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        callback(null, `${time}_${file.originalname}`);
    }
});

module.exports = storage;
