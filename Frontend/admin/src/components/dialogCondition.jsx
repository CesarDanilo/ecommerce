import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const DialogCondition = ({ open, handleOpen, titleName, setDeletar }) => {
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Excluir</DialogHeader>
            <DialogBody>
                Deseja mesmo excluir o {titleName}?
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                    aria-label="Cancelar"
                >
                    <span>Cancelar</span>
                </Button>
                <Button
                    variant="gradient"
                    color="green"
                    onClick={setDeletar} // Chama diretamente a função que lida com a exclusão
                    aria-label="Confirmar exclusão"
                >
                    <span>Confirmar</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default DialogCondition;
