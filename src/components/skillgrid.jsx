import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";

// Same column widths as the old SimpleGrid (2/3/4/6 columns, 30px gap), but as a centered flex-wrap
// so an incomplete last row sits in the middle instead of the left
const itemWidth = [
  "calc((100% - 30px) / 2)",
  "calc((100% - 60px) / 3)",
  "calc((100% - 90px) / 4)",
  "calc((100% - 150px) / 6)",
];


const Skillgrid = ({skills})=>{
    const { colorMode, toggleColorMode } = useColorMode()
    return(
        <Box >
     
      

      <Box width="80%"  margin="auto" marginBottom="40px" >
        <Flex wrap="wrap" justifyContent="center" gap="30px" >
          {skills?.map((elem) => (
            <Box key={elem.name} width={itemWidth} _hover={{"box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px","borderRadius":"10%"}} >
              <Box
              backgroundColor={colorMode == "dark"
              ? "#0f1624"
              : "#D5E6F9"}
              borderRadius="12%"
                paddingTop="15px"
                paddingBottom="10px"
              >
                <Box width="65%"  margin="auto" >
                  <Image
                    height="90px"
                    margin="auto"
                    src={elem.url}
                    alt="skills_logo"
                    filter={elem.invertOnDark && colorMode == "dark" ? "invert(1)" : undefined}
                  />
                </Box>

                <Box marginTop="5px">
                  <h3>{elem.name}</h3>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

   
    </Box>
    )
}

export default Skillgrid
