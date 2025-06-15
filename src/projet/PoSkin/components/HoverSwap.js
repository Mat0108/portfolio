import { Collapse, createTheme, ThemeProvider } from "@mui/material"
import { useState } from "react"

const HoverSwap = ({image,div1,div2}) => {
    const [isHover,setIsHover] = useState(false)

    const theme = createTheme({
        components: {
          MuiCollapse: {
            styleOverrides: {
                root:{
                    width: '100% !important', 
                    height:'100% !important', 
                },
                wrapper:{
                    
                    width: '100%', 
                    height:'100%', 
                },
                wrapperInner:{
                    width: '100%', 
                    height:'100%', 
                }
                
            }
          },
        },
      });
    return <div className="w-fit h-full flex center">
            <div className="relative w-fit h-fit flex " onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
            <div>{image}</div>
            {!isHover && div1}
            <div className="absolute w-full h-full">
                <ThemeProvider theme={theme}>
                    <Collapse in={isHover} sx={{width: '100%',height:'100%'}} >
                        {div2}
                    </Collapse>
            </ThemeProvider>

            </div>
        </div>
    </div>
}
export default HoverSwap;