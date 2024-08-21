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

    const [nome, setNome] = useState();
    const [preco, setPreco] = useState();
    const [estoque, setEstoque] = useState();
    const [descricao, setDescricao] = useState();
    const [img, setImg] = useState();

    const baseUrl = "http://localhost:3001/produto";

    const SalvarDados = async () => {

        let dados = {
            nome: nome,
            preco: preco,
            descricao: descricao,
            estoque: estoque,
            img: img
        }

        try {
            let url = baseUrl
            const res = await axios.post(url, dados, {
                headers: {
                    'Content-Type': 'aplication/json'
                }
            }); // Aguarda a resposta da requisição
            console.log("Dados gravado com sucesso", res.data);

        } catch (error) {
            console.log("Erro ao buscar dados:", error); // Exibe o erro no console
        }
    }

    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Cadastro de Material</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Configurações
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Informações do Material
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
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
                                                        onChange={(e) => { setNome(e.target.value) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
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
                                                        onChange={(e) => { setPreco(e.target.value) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
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
                                                        onChange={(e) => { setEstoque(e.target.value) }}
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
                                                        id="input-imagem"
                                                        type="file"
                                                        onChange={(e) => { setImg(e.target.value) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
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
                                                        onChange={(e) => { setDescricao(e.target.value) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Button color="primary" type="submit" onClick={() => { SalvarDados() }}>
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
}

export default CadastroMaterial;
