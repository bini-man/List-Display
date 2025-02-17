import React from 'react';
import LoadingOrError from './components/LoadingOrError';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Alert,
} from '@mui/material';
import useFetchProduct from './Hooks/useFetchProduct';
import Container from './components/Container';



function App() {
  const { products, isLoading,  error,  isDrawerOpen, handleDrawerOpen, handleDrawerClose } = useFetchProduct();
  if(isLoading || error) {
    return <LoadingOrError isLoading={isLoading} error={error} /> 
  }

  return (
    <Box sx={{ display: 'flex' }}>
     <Container products={products} />
    </Box>
  );
}

export default App;
