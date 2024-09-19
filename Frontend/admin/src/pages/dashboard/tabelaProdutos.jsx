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
  IconButton
} from "@material-tailwind/react";

import { authorsTableData, projectsTableData } from "@/data";
import axios from "axios";
import { useEffect, useState } from "react";

export function TabelaProdutos() {
  const basedUrl = "http://localhost:3001/produto"
  const [dadosProdutos, setDadosProdutos] = useState([]);

  const buscarProdutosCadastrados = async () => {
    try {
      const response = await axios.get(basedUrl);
      const { data: produto } = response.data
      setDadosProdutos(produto);
      console.log("dados retornados: ", dadosProdutos);

    } catch (error) {
      console.log("Não foi possivel buscar os dados: ", error);
    }
  }

  useEffect(() => {
    buscarProdutosCadastrados();
  }, [])

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
                  <Card className=" shadow-none flex-row">
                    <CardBody>
                      <form className=" shadow-none mt-2 flex flex-col lg:flex-col mb-1 w-full max-w-full">
                        <Card className=" shadow-none">
                          <CardBody className=" shadow-none flex flex-col sm:w-96 -mb-7">
                            <Typography variant="h6" color="blue-gray" className="-mb-0">
                              Produto
                            </Typography>
                            <Input
                              size="lg"
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
                        <CardBody className="shadow-none mb-1 flex  flex-col gap-2  max-w-[290px]">
                          <img
                            className="h-48 mb-3 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                          />
                          <Input
                            size="lg"
                            type="file"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full max-w-[290px]"
                            labelProps={{
                              className: "before:content-none after:content-none",
                            }}
                          />
                        </CardBody>
                        <CardBody className="flex gap-6 flex-col lg:flex-row mb-2 w-full max-w-full">
                          <Button className="flex items-center h-11 w-[110px] gap-2" variant="gradient">Gravar</Button>
                          <Button className="flex items-center h-11 w-[110px] gap-2 justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300" variant="gradient">
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
                  ({ nome, descricao, preco, estoque, imagem }, key) => {
                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={nome}>
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
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Card>
    </div>
  );
}

export default TabelaProdutos;
