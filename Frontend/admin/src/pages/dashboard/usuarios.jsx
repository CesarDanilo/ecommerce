import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Typography,
  Button,
  IconButton,
  Alert
} from "@material-tailwind/react";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import { authorsTableData } from "@/data";

export function Usuarios() {
  const basedUrl = "http://localhost:3001/users/";
  const [dadosUsuarios, setDadosUsuarios] = useState([]);
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [admin, setAdmin] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [color, setColor] = useState('');

  const buscarUsuariosCadastrados = async () => {
    try {
      const response = await axios.get(basedUrl);
      const { data: produto } = response.data;
      setDadosUsuarios(produto);
      console.log("dados retornados: ", dadosUsuarios);
    } catch (error) {
      console.log("Não foi possível buscar os dados: ", error);
    }
  };

  const enviarDadosUsuario = async () => {
    const url = "http://localhost:3001/users/auth/createuser";

    try {
      const dadosRecebidos = {
        "nome": nome,
        "email": email,
        "senha": senha,
        "admin": admin
      };

      console.log("Dados que seriam enviados: ", dadosRecebidos);

      const response = await axios.post(url, dadosRecebidos);
      buscarUsuariosCadastrados();
      setAlertMessage('Usuário cadastrado com sucesso!');
      setColor("green")
      setShowAlert(true);
      limparCadastroUsuarios()

    } catch (error) {
      if (error.response.status === 422) {
        setColor("red")
        setAlertMessage('Usurario já existe!');
      } else {
        setAlertMessage('Ops! Ocorreu um erro!');
      }
      setShowAlert(true);
    }
  };

  const deletarUsuarios = async (id) => {
    try {
      const response = await axios.delete(basedUrl + id);
      console.log(basedUrl + id);
      console.log("Excluído com sucesso:", response.status);
      buscarUsuariosCadastrados(); // Atualiza a lista após excluir o usuário
    } catch (error) {
      console.log("Não foi possível excluir", error.response);
    }
  }

  const editarDadosUsuario = async (id) => {
    try {
      const response = await axios.get(`${basedUrl}?id=${id}`);
      const { data } = response.data;

      setId(data[0].id);
      setNome(data[0].nome);
      setEmail(data[0].email);
      setSenha("");
      setAdmin(data[0].admin);

      console.log("dados retornados: ", data);
    } catch (error) {
      console.log("Não foi possível buscar os dados: ", error);
    }
  };


  const atualizarDadosUsuario = async (id) => {
    try {

      const dadosRecebidos = {
        "nome": nome,
        "email": email,
        "senha": senha,
        "admin": admin
      };

      const response = await axios.put(`${basedUrl}${id}`, dadosRecebidos);
      buscarUsuariosCadastrados();
      setId('')
      console.log("dados salvos com sucesso: ", response.status)

    } catch (error) {
      console.log("Não foi possivel altualizar os dados: ", error)
    }
  };

  const limparCadastroUsuarios = () => {
    setId('');
    setNome('');
    setEmail('');
    setSenha('');
    setAdmin(false);
  };

  useEffect(() => {
    buscarUsuariosCadastrados();
  }, []);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        {/* FORMULARIO DE CADASTRO DO USUARIO */}
        <Typography className="mt-5 ml-5" variant="h4" color="blue-gray">
          Usuarios Cadastrados
        </Typography>
        <CardBody className="flex justify-center p-4">
          <Card className="flex flex-col w-full max-w-screen-lg mx-4 border border-blue-gray-100">
            <CardBody>
              <Typography className="mt-5 ml-5" variant="h4" color="blue-gray">
                Cadastro de Usuário
              </Typography>
              <form className="mt-8 flex flex-col lg:flex-row gap-4 mb-2 w-full">
                {/* Nome */}
                <div className="flex flex-col gap-4 w-full lg:w-[100%] mb-4">
                  <label className="text-blue-gray-700 text-sm font-semibold">Nome</label>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-full"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-4 w-full lg:w-[90%] mb-4">
                  <label className="text-blue-gray-700 text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-full"
                  />
                </div>

                {/* Senha */}
                <div className="flex flex-col gap-4 w-full lg:w-[90%] mb-4">
                  <label className="text-blue-gray-700 text-sm font-semibold">Senha</label>
                  <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-full"
                  />
                </div>

                {/* Usuário é Admin */}
                <div className="flex flex-col gap-4 w-full lg:w-96 mb-4">
                  <label className="text-blue-gray-700 text-sm font-semibold">Admin?</label>
                  <select
                    onChange={(e) => setAdmin(e.target.value === "true")}
                    value={admin ? "true" : "false"} // Mantém o valor padronizado de acordo com o estado
                    className="border border-blue-gray-200 focus:border-gray-900 rounded-lg p-2 w-full"
                  >
                    <option value={"false"}>Não</option>
                    <option value={"true"}>Sim</option>
                  </select>
                </div>
              </form>
              <div className="flex gap-2 flex-col lg:flex-row mb-2 w-full">
                <div className="w-full lg:w-1/2">
                  <Button onClick={() => {
                    if (id > 0) {
                      atualizarDadosUsuario(id)
                    } else {
                      enviarDadosUsuario();
                    }
                  }
                  } className="flex items-center justify-center h-11 w-full gap-2" variant="gradient">
                    Gravar
                  </Button>
                </div>
                <div className="w-full lg:w-1/2">
                  <Button onClick={limparCadastroUsuarios} className="flex items-center h-11 w-full gap-2 justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                    <IconButton className="p-2 shadow-none bg-transparent text-white">
                      <i className="fas fa-plus shadow-none" />
                    </IconButton>
                    Novo
                  </Button>
                </div>
              </div>
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
                    {["nome", "e-mail", "admin", "actions"].map((el) => (
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
                  {dadosUsuarios.map(({ id, nome, email, admin }, key) => {
                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={id}>
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
                        <td className={className}>
                          <IconButton onClick={() => { editarDadosUsuario(id) }} className="flex-row mr-1">
                            <PencilIcon className="h-5 w-5 mr-1 text-white" />
                          </IconButton>
                          <IconButton onClick={() => { deletarUsuarios(id) }} className="flex-row mr-1">
                            <TrashIcon className="h-5 w-5 mr-1 text-white" />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div >
      </Card >

      {/* Alerta */}
      {
        showAlert && (
          <div className="fixed bottom-4 right-4 z-50">
            <Alert color={color} size={16} className="w-80">
              {alertMessage}
            </Alert>
          </div>
        )
      }
    </>
  );
}

export default Usuarios;
