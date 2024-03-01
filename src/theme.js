import {createTheme} from "@mui/material"

export const colors ={
    gradientOne: '#D62689',
    gradientTwo: '#952792',
    primary:'#FEEBE7',
    secondary:'#66183F',
    tetiary:'#FFF7F6',
}

const theme = createTheme({
    palette:{
        // primary:{
        //     main: '#000000',
        // }
        customColor:{
            primary:'#FEEBE7',
            secondary:'#66183F',
            tetiary:'#FFF7F6',

            gradientOne:colors.gradientOne,
            gradientTwo:colors.gradientTwo,
            
        }
    },
    typography:{
        fontFamily: 'Inter, sans-serif',
        v1:{
            fontSize:'6rem',
            fontFamily: 'Inter, sans-serif',
            background: `linear-gradient(to bottom right, ${colors.gradientOne}, ${colors.gradientTwo})`,
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight:'bolder'
        },
        v2:{
            fontSize:'1.2rem',
            fontFamily: 'Inter, sans-serif',
            background: `linear-gradient(to bottom right, ${colors.gradientOne}, ${colors.gradientTwo})`,
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight:'light',
            textAlign:'left'
        },
        navItem:{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            color: colors.secondary,
            
        }
    }

})




export default theme;