import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const DialogSimple = ({ open, handleOpen, titleName, deletar }) => {
    return (
        <>
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
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={() => { handleOpen, deletar=true }}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default DialogSimple;