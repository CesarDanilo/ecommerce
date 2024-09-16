import React from "react";
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


export function Usuarios() {

  const basedUrl = "http://localhost:3001/users/"
  const [dadosUsuarios, setDadosUsuarios] = useState([]);

  const buscarProdutosCadastrados = async () => {
    try {
      const response = await axios.get(basedUrl);
      const { data: produto } = response.data
      setDadosUsuarios(produto);
      console.log("dados retornados: ", dadosUsuarios);

    } catch (error) {
      console.log("Não foi possivel buscar os dados: ", error);
    }
  }

  useEffect(() => {
    buscarProdutosCadastrados();
  }, [])

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">

        {/* FORMULARIO DE CADASTRO DO USUARIO */}
        <Typography className="mt-5 ml-5" variant="h4" color="blue-gray">
          Usuarios Cadastrados
        </Typography>
        <CardBody className="  flex justify-center p-4">
          <Card className="  flex flex-col w-full max-w-screen-lg mr-4">
            <CardBody>
              <Card className=" shadow-none">
                <CardBody>
                  <form className="shadow-none mt-8 flex flex-col lg:flex-row gap-4 mb-2 w-full max-w-full">
                    {/* Nome */}
                    <div className="shadow-none mb-4 flex flex-col gap-4 w-full lg:w-[50%]">
                      <label className="text-blue-gray-700 text-sm font-semibold">Nome</label>
                      <input
                        type="text"
                        placeholder="Nome completo"
                        className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-full"
                      />
                    </div>

                    {/* Email */}
                    <div className="shadow-none mb-4 flex flex-col gap-4 w-full lg:w-[50%]">
                      <label className="text-blue-gray-700 text-sm font-semibold">Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-full"
                      />
                    </div>

                    {/* Senha */}
                    <div className="shadow-none mb-4 flex flex-col gap-4 w-full lg:w-96">
                      <label className="text-blue-gray-700 text-sm font-semibold">Senha</label>
                      <input
                        type="password"
                        placeholder="Senha"
                        className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-full"
                      />
                    </div>

                    {/* Usuário é Admin */}
                    <div className="shadow-none mb-4 flex flex-col gap-4 w-full lg:w-96">
                      <label className="text-blue-gray-700 text-sm font-semibold">Admin?</label>
                      <select
                        className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-[100px]"
                      >
                        <option value="false">Não</option>
                        <option value="true">Sim</option>
                      </select>
                    </div>
                  </form>
                  <div className="flex gap-1 flex-col lg:flex-row mb-2 w-full max-w-full">
                    <div className="w-full lg:w-96">
                      <Button className="flex items-center justify-center h-11 w-full gap-2" variant="gradient">Gravar</Button>
                    </div>
                    <div className="w-full lg:w-96">
                      <Button className="flex items-center h-11 w-full gap-2 justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300" variant="gradient">
                        <IconButton className="p-2 bg-transparent text-white">
                          <i className="fas fa-plus" />
                        </IconButton>
                        Novo
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </CardBody>

        {/* TABELA DE USUARIOS CADASTRADOS */}
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
            <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
              <Typography variant="h6" color="white">
                Usuarios cadastrados
              </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {["nome", "e-mail", "admin"].map((el) => (
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
                  {dadosUsuarios.map(
                    ({ nome, email, admin }, key) => {
                      const className = `py-3 px-5 ${key === authorsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                        }`;

                      return (
                        <tr key={nome}>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {nome.toUpperCase()}
                            </Typography>
                          </td>
                          <td className={className}>
                            {email}
                          </td>
                          <td className={className}>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {admin ? "SIM" : "NÃO"}
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
        </div>
      </Card>
    </>
  );
}

export default Usuarios;
