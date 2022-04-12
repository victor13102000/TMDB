import { SimpleGrid, GridItem, Box, } from "@chakra-ui/react";
import Card from "./Card";



function GridGeneral() {

  return (
  
        <Box p={3}>
          <SimpleGrid bgGradient='linear(to-r, rgba(51,47,83,1), pink.500)' spacing="30px" minChildWidth="300px">
          <GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem><GridItem>
            <Card></Card>
          </GridItem>
          </SimpleGrid>
        </Box>

  );
}

export default GridGeneral;