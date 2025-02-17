import React from 'react';
import useFetchProduct from './Hooks/useFetchProduct';
import LoadingOrError from './components/LoadingOrError';
import { Box, Typography } from '@mui/material';
function App() {
  const { products, isLoading,  error,  isDrawerOpen, handleDrawerOpen, handleDrawerClose } = useFetchProduct();
  if(isLoading || error) {
    return <LoadingOrError isLoading={isLoading} error={error} /> 
  }
  return (
    <Box sx={{ display: 'flex' }}>
        <div>
           {products.map(product => (
               <Typography variant="body1" color="text.secondary">{product.title}.</Typography>
           ))}
        </div>
    </Box>
  );
}

export default App;
