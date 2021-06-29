// ----------------------------------------------------------------------
export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: 'white' }
          }
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: 'transparent',
            marginLeft: '20px'
          },
          '&:hover': {
            borderBottom: 'none'
          }
        },
        underline: {
          '&:hover': {
            borderBottom: 'none'
          },
          '&&:after': {
            borderBottom: 'none'
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56]
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: 'white',
          '&:hover': {
            borderBottomColor: 'transparent'
          },
          '&.Mui-focused': {
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            color: 'white'
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            color: 'white'
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: 'transparent'
          },
          '&:hover': {
            borderBottomColor: 'transparent',
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            backgroundColor: 'transparent'
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
              backgroundColor: 'transparent'
            }
          }
        }
      }
    }
  };
}
