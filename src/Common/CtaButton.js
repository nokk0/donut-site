import React from 'react';
import {Button,styled} from '@mui/material'
import { purple } from '@mui/material/colors';
import { colors } from '../theme';


export const CtaButton = styled(Button)(({ theme }) => ({

    color: colors.gradientTwo,
    backgroundColor: 'none',
    borderWidth:'small',
    borderStyle:'solid',
    borderColor:colors.gradientOne,
    borderRadius:'0px',
    width:'35%',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '800',
    fontSize: '0.9rem',
    padding: '5px',
    
    '&:hover': {
        // backgroundColor: colors.gradientOne,
        
    },

  }));




