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

const CadastroMaterial = () => {
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
}

export default CadastroMaterial;
