import React from 'react';
import LoadingOrError from './components/LoadingOrError';
import {
  Box,

} from '@mui/material';
import useFetchProduct from './Hooks/useFetchProduct';
import Container from './components/Container';
import NavigationHeader from './components/NavigationHeader';



function App() {
  const { products, isLoading,  error,  isDrawerOpen, handleDrawerOpen, handleDrawerClose } = useFetchProduct();
  if(isLoading || error) {
    return <LoadingOrError isLoading={isLoading} error={error} /> 
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <NavigationHeader isDrawerOpen={isDrawerOpen} handleDrawerOpen={handleDrawerOpen}/>
      <Container products={products} />
    </Box>
  );
}

export default App;
