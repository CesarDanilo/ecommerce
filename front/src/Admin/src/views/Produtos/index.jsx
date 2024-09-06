import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Produto = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "start", alignItems: "start" }}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Produtos" />
                        <Tab label="Cadastro" />
                    </Tabs>
                </Box>
            </div>
        </>
    )
}

export default Produto;