import React from "react";
import LoadingOrError from "./components/LoadingOrError";
import { Box } from "@mui/material";
import useFetchProduct from "./Hooks/useFetchProduct";
import Container from "./components/Container";
import NavigationHeader from "./components/NavigationHeader";
import NavigationDrawer from "./components/NavigationDrawer";

function App() {
  const {
    products,
    isLoading,
    error,
    isDrawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
  } = useFetchProduct();
  if (isLoading || error) {
    return <LoadingOrError isLoading={isLoading} error={error} />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <NavigationHeader
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
      />
      <NavigationDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Container products={products} />
    </Box>
  );
}

export default App;
