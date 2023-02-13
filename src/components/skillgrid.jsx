import { Box, Img, SimpleGrid, useColorMode } from "@chakra-ui/react";


const Skillgrid = ({skills})=>{
    const { colorMode, toggleColorMode } = useColorMode()
console.log(skills)
    return(
        <Box >
     
      

      <Box width="80%"  margin="auto" marginBottom="40px" >
        <SimpleGrid columns={[2, 3, 4, 6]} spacing="30px" >
          {skills?.map((elem) => (
            <Box key={elem.name} _hover={{"box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px","borderRadius":"10%"}} >
              <Box
              backgroundColor={colorMode == "dark"
              ? "#0f1624"
              : "#D5E6F9"}
              borderRadius="12%"
                paddingTop="15px"
                paddingBottom="10px"
              >
                <Box width="65%"  margin="auto" >
                  <Img height="90px" src={elem.url} alt="skills_logo" />
                </Box>

                <Box marginTop="5px">
                  <h3>{elem.name}</h3>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

   
    </Box>
    )
}

export default Skillgrid
