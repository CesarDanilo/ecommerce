import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Input,
  IconButton,
  Alert
} from "@material-tailwind/react";

import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import { authorsTableData, projectsTableData } from "@/data";
import axios from "axios";
import { useEffect, useState } from "react";

export function TabelaProdutos() {
  const basedUrl = "http://localhost:3001/produto/"
  const [dadosProdutos, setDadosProdutos] = useState([]);

  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [estoque, setEstoque] = useState();
  const [preco, setPreco] = useState();
  const [imagem, setImagem] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [color, setColor] = useState('');

  const buscarProdutosCadastrados = async () => {
    try {
      const response = await axios.get(basedUrl);
      const { data: produto } = response.data
      setDadosProdutos(produto);

    } catch (error) {
      console.log("Não foi possivel buscar os dados: ", error);
    }
  }

  const enviarNovoProduto = async () => {
    const url = "http://localhost:3001/produto/";
    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("preco", preco);
    formData.append("estoque", estoque);
    formData.append("imagem", imagem); // Certifique-se de que 'imagem' é um arquivo

    try {
      console.log({ nome, descricao, preco, imagem });
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      buscarProdutosCadastrados();
      setAlertMessage('Produto cadastrado com sucesso!');
      setColor("green")
      setShowAlert(true);
      console.log("Dados enviados com sucesso: ", response.status);
    } catch (erro) {
      console.log("Não foi possível cadastrar o produto: ", erro);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setPreviewUrl(URL.createObjectURL(file)); // Gerar URL de pré-visualização
    }
  };

  const deletarProduto = async (id) => {
    try {
      const response = await axios.delete(basedUrl + id);
      console.log(basedUrl + id);
      console.log("Excluído com sucesso:", response.status);
      buscarProdutosCadastrados(); // Atualiza a lista após excluir o usuário
    } catch (error) {
      console.log("Não foi possível excluir", error.response);
    }
  }

  const limparCadastroUsuarios = () => {
    setId('');
    setNome('');
    setDescricao('');
    setEstoque('');
    setPreco('');
    setImagem('');
  };

  useEffect(() => {
    buscarProdutosCadastrados();
  }, [])


  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        {/* cadastro de produto */}
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <CardBody>
          <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
            <Typography className="mt-5 ml-5" variant="h4" color="blue-gray">
              Cadastro de produtos
            </Typography>
            <CardBody className="  flex justify-center p-4">
              <Card className="  flex flex-col w-full max-w-screen-lg mr-4">
                <CardBody>
                  <Card className="shadow-none mt-0 flex flex-col lg:flex-row mb-1 w-full max-w-full p-4">
                    <CardBody>
                      <form className=" shadow-none mt-2 flex flex-col lg:flex-col mb-1 w-[380px] max-w-full">
                        <Card className=" shadow-none">
                          <CardBody className=" shadow-none flex flex-col sm:w-96 -mb-7">
                            <Typography variant="h6" color="blue-gray" className="-mb-0">
                              Produto
                            </Typography>
                            <Input
                              size="lg"
                              onChange={(e) => { setNome(e.target.value) }}
                              value={nome}
                              placeholder="Produto"
                              className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full max-w-[600px]"
                              labelProps={{
                                className: "before:content-none after:content-none",
                              }}
                            />
                          </CardBody>
                          <CardBody className=" shadow-none flex flex-col sm:w-96">
                            <Typography variant="h6" color="blue-gray" className="-mb-0">
                              Descrição
                            </Typography>
                            <Input
                              size="lg"
                              placeholder="Descrição"
                              value={descricao}
                              onChange={(e) => { setDescricao(e.target.value) }}
                              className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full max-w-[600px]"
                              labelProps={{
                                className: "before:content-none after:content-none",
                              }}
                            />
                          </CardBody>
                        </Card>
                        <Card className=" shadow-none flex flex-row">
                          <CardBody className=" shadow-none flex flex-col sm:w-26">
                            <Typography variant="h6" color="blue-gray" className="-mb-0">
                              Estoque
                            </Typography>
                            <Input
                              size="lg"
                              placeholder="0"
                              value={estoque}
                              onChange={(e) => { setEstoque(e.target.value) }}
                              type="number"
                              className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full max-w-[90px]"
                              labelProps={{
                                className: "before:content-none after:content-none",
                              }}
                            />
                          </CardBody>
                          <CardBody className=" shadow-none flex flex-col sm:w-26">
                            <Typography variant="h6" color="blue-gray" className="-mb-0">
                              Preço
                            </Typography>
                            <Input
                              size="lg"
                              placeholder="0.00"
                              value={preco}
                              onChange={(e) => { setPreco(e.target.value) }}
                              type="number"
                              step="0.01"
                              className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full max-w-[90px]"
                              labelProps={{
                                className: "before:content-none after:content-none",
                              }}
                            />
                          </CardBody>
                        </Card>
                      </form>
                    </CardBody>
                    <CardBody>
                      <Card className="shadow-none">
                        <CardBody className="shadow-none mb-1 flex  flex-col gap-2  max-w-[250px]">
                          <img
                            className="h-48 mb-3 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                            src={imagem ? previewUrl : "http://localhost:3001/uploads/imgs.png"}
                            alt="nature image"
                          />
                          <Input
                            size="lg"
                            type="file"
                            value={imagem}
                            onChange={handleImageChange}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full max-w-[290px]"
                            labelProps={{
                              className: "before:content-none after:content-none",
                            }}
                          />
                        </CardBody>
                        <CardBody className="flex gap-6 flex-row lg:flex-row mb-2 w-full max-w-full">
                          <Button onClick={enviarNovoProduto} className="flex items-center h-11 w-[90px] gap-2" variant="gradient">Gravar</Button>
                          <Button onClick={limparCadastroUsuarios} className="flex items-center h-11 w-[90px] gap-2 justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300" variant="gradient">
                            <IconButton className="p-2 bg-transparent text-white">
                              <i className="fas fa-plus" />
                            </IconButton>
                            Novo
                          </Button>
                        </CardBody>
                      </Card>
                    </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </CardBody>
          </Card>

        </CardBody>

        {/* tabela de produtos */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Produtos cadastrado
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["imagem", "produto", "descrição", "estoque", "preço", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dadosProdutos.map(
                  ({ id, nome, descricao, preco, estoque, imagem }, key) => {
                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={id}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={`http://localhost:3001/uploads/${imagem}`} alt={nome} size="xl" variant="rounded" />
                            {/* <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div> */}
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {nome}
                          </Typography>
                          {/* <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography> */}
                        </td>
                        <td className={className}>
                          {/* <Chip
                            variant="gradient"
                            color={online ? "green" : "blue-gray"}
                            value={online ? "online" : "offline"}
                            className="py-0.5 px-2 text-[11px] font-medium w-fit"
                          /> */}
                          {descricao}
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {estoque}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {preco}
                          </Typography>
                        </td>

                        <td className={className}>
                          <IconButton onClick={() => { editarDadosUsuario(id) }} className="flex-row mr-1">
                            <PencilIcon className="h-5 w-5 mr-1 text-white" />
                          </IconButton>
                          <IconButton onClick={() => { deletarProduto(id) }} className="flex-row mr-1">
                            <TrashIcon className="h-5 w-5 mr-1 text-white" />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Card>
      {
        showAlert && (
          <div className="fixed bottom-4 right-4 z-50">
            <Alert color={color} size={16} className="w-80">
              {alertMessage}
            </Alert>
          </div>
        )
      }
    </div>
  );
}

export default TabelaProdutos;
