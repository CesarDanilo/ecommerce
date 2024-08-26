import axios from "axios";
import Header from "../../components/Headers/Header.js";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";
import { useState } from "react";

const CadastroMaterial = () => {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [descricao, setDescricao] = useState("");
    const [img, setImg] = useState(null); // Inicialize como null

    const baseUrl = "http://localhost:3001/produto/";

    const SalvarDados = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        let formData = new FormData(); // Cria um novo objeto FormData
        formData.append("nome", nome);
        formData.append("preco", preco);
        formData.append("descricao", descricao);
        formData.append("estoque", estoque);
        formData.append("imagem", img); // Adiciona a imagem ao FormData

        try {
            const res = await axios.post(baseUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Definido corretamente para uploads de arquivo
                }
            });
            console.log("Dados gravados com sucesso", res.data);
            alert("Gravado com Sucesso!");
        } catch (error) {
            console.log("Erro ao salvar dados:", error); // Exibe o erro no console
            // Exibe o erro no console
            alert("Erro ao salvar dados. Verifique o console para mais detalhes.");
        }
    };

    return (
        <>
            <Container className="mt--7" fluid >
                <Row style={{ marginTop: "20px"}}>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center" >
                                    <Col xs="12" >
                                        <h3 className="mb-0" >Cadastro de Material</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={SalvarDados}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Informações do Material
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="8">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-nome"
                                                    >
                                                        Nome
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-nome"
                                                        placeholder="Nome do material"
                                                        type="text"
                                                        value={nome}
                                                        onChange={(e) => setNome(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="2">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-preco"
                                                    >
                                                        Preço
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-preco"
                                                        placeholder="Preço"
                                                        type="number"
                                                        step="0.01"
                                                        value={preco}
                                                        onChange={(e) => setPreco(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="2">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-estoque"
                                                    >
                                                        Estoque
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-estoque"
                                                        placeholder="Quantidade em estoque"
                                                        type="number"
                                                        value={estoque}
                                                        onChange={(e) => setEstoque(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="8">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-descricao"
                                                    >
                                                        Descrição
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-descricao"
                                                        placeholder="Descrição do material"
                                                        type="textarea"
                                                        rows="4"
                                                        value={descricao}
                                                        onChange={(e) => setDescricao(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-imagem"
                                                    >
                                                        Imagem
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="imagem"
                                                        name="imagem"
                                                        type="file"
                                                        onChange={(e) => setImg(e.target.files[0])}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>


                                    </div>
                                    <Button color="primary" type="submit">
                                        Salvar Material
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CadastroMaterial;
