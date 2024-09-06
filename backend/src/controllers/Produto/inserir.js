const { Produto } = require('../../database/models/');
const path = require('path');

const inserirProduto = async (req, res, next) => {
    try {
        const { nome, preco, descricao, estoque } = req.body;

        // Verificar se um arquivo foi enviado
        if (!req.file) {
            return res.status(400).json({ message: "Nenhuma imagem enviada" });
        }

        const imagem_name = req.file.path.replace(/\\/g, "/");
        const imagem = path.basename(imagem_name);
        console.log("Nome da imagem:", imagem);

        // Criar um objeto produto com as informações recebidas
        const produto = { nome, preco, descricao, estoque, imagem };

        // Salvar o produto no banco de dados
        const savedProduct = await Produto.create(produto);

        // Enviar resposta
        res.json(savedProduct);

        // Logar sucesso após o envio da resposta
        console.log("Sucesso ao salvar produto:", savedProduct);
    } catch (error) {
        console.error("Erro ao salvar produto:", error);
        res.status(500).json({ message: "Erro ao salvar produto" });
    }
}

module.exports = inserirProduto;
