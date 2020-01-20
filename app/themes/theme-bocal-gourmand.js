import { createMuiTheme } from '@material-ui/core/styles';
// import { common } from '@material-ui/core/colors';
const inputText = '#000000';
const primaryColorHex = '#d3a476';
const primaryColorRGB = '0, 167, 159';
const secondaryColorHex = '#ffffff';
const secondaryColorRGB = '255, 255, 255';
const textColorHex = '#ffffff';
const fontFamilyTitle = 'Montserrat, sans-serif';
const fontFamilyText = 'Roboto, sans-serif';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
}); // get default theme to access breakpoints
const themeBocalGourmand = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: primaryColorHex },
    secondary: { main: secondaryColorHex },
    action: {
      active: `rgba(${secondaryColorRGB}, 0.2)`,
      hover: `rgba(${secondaryColorRGB}, 0.08)`,
      hoverOpacity: 0.08,
      selected: `rgba(${secondaryColorRGB}, 0.14)`,
      disabled: `rgba(${secondaryColorRGB}, 0.26)`,
      disabledBackground: `rgba(${secondaryColorRGB}, 0.12)`,
    },
  },
  typography: {
    useNextVariants: true, // https://material-ui.com/style/typography/#migration-to-typography-v2
    fontFamily: fontFamilyText,
    color: textColorHex,
    // body2: {
    //   fontFamily: fontFamilyText,
    //   fontWeight: 600,
    //   fontSize: '17px',
    // },
    h6: {
      fontFamily: fontFamilyText,
      fontWeight: 200,
      fontSize: '17px',
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '14px',
      //   fontWeight: 600,
      //   marginLeft: theme.spacing.unit * 4,
      //   marginRight: theme.spacing.unit * 4,
      // },
    },
    h5: {
      fontFamily: fontFamilyText,
      fontWeight: 600,
      fontSize: '20px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        fontWeight: 600,
      },
    },
    h4: {
      fontFamily: fontFamilyText,
      fontSize: '25px',
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        fontFamily: fontFamilyText,
        fontSize: '22px',
        fontWeight: 800,
        display: 'flex',
        justifyContent: 'center',
      },
    },
    h3: {
      fontFamily: fontFamilyText,
      fontSize: '22px',
      fontWeight: 600,
    },
    h2: {
      fontFamily: fontFamilyTitle,
      fontSize: '2.8rem',
      fontWeight: 600,
    },
    h1: {
      fontFamily: fontFamilyTitle,
      fontSize: '2rem',
      fontWeight: 600,
    },
    button: {
      fontFamily: fontFamilyTitle,
      fontWeight: 800,
      fontSize: '20px',
      [theme.breakpoints.down('sm')]: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 800,
      },
    },
    body1: {
      fontFamily: fontFamilyText,
      fontWeight: 300,
      fontSize: '30px',
    },
    body2: {
      fontFamily: fontFamilyText,
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: fontFamilyText,
      fontWeight: 300,
      fontSize: '16px',
    },
  },
  text: {
    primary: textColorHex,
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        fontFamily: fontFamilyTitle,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
        color: secondaryColorHex,
        fontWeight: 600,
        fontSize: '1.3rem',
        lineHeight: 1.4,
        textAlign: 'center',
        '&.small': {
          fontSize: '0.8rem',
          lineHeight: 1.2,
          padding: theme.spacing.unit,
        },
        '&.medium': {
          fontSize: '1rem',
          lineHeight: 1.2,
          padding: theme.spacing.unit,
        },
        '&:$disabled': {
          color: 'rgba(255,255,255,0.5)',
          backgroundColor: 'rgba(0,167,159,0.5)',
        },
      },
      containedSecondary: {
        backgroundColor: secondaryColorHex,
        border: `${primaryColorHex} 2px solid`,
        color: primaryColorHex,
        fontSize: '1rem',
      },
      root: {
        fontFamily: fontFamilyText,
        color: textColorHex,
        minWidth: 'none',
      },
      contained: {
        '&$disabled': {
          color: 'rgba(255,255,255,0.5)',
          backgroundColor: 'rgba(0,167,159,0.5)',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: textColorHex,
      },
    },
    MuiFormLabel: {
      root: {
        color: '#ffffff',
      },
    },
    MuiListItemIcon: {
      root: {
        color: primaryColorHex,
      },
    },
    MuiListItemText: {
      primary: {
        color: textColorHex,
      },
      root: {
        color: textColorHex,
      },
    },
    MuiMenuItem: {
      root: {
        color: textColorHex,
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: `rgb(${primaryColorRGB})`,
        justifyContent: 'center',
      },
    },
    MuiStepConnector: {
      line: {
        color: `#31a7d4`,
      },
    },
    MuiStepIcon: {
      text: {
        fill: `white`,
      },
    },
    MuiToolbar: {
      regular: {
        backgroundColor: 'transparent',
        [theme.breakpoints.up('xs')]: {
          minHeight: theme.spacing.unit * 7,
        },
        [theme.breakpoints.up('md')]: {
          minHeight: theme.spacing.unit * 8,
        },
        boxShadow: theme.shadows[1],
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'transparent',
      },
      // root: {
      //   maxHeight: theme.spacing.unit * 7,
      //   backgroundColor: '#ebf5ff',
      //   [theme.breakpoints.up('md')]: {
      //     maxHeight: theme.spacing.unit * 8,
      //   },
      //   boxShadow: theme.shadows[1],
      // },
    },
    MuiTab: {
      textColorPrimary: {
        color: '#858585',
        '&:hover': {
          color: '#00a79f',
        },
      },
      root: {
        width: 141,
        maxHeight: 60,
        [theme.breakpoints.down('md')]: {
          fontSize: '12px',
        },
      },
      labelContainer: {
        [theme.breakpoints.down('md')]: {
          borderBottom: 'solid',
        },
      },
      wrapper: {
        minWidth: '200px',
      },
    },
    MuiTabs: {
      flexContainer: {
        [theme.breakpoints.down('md')]: {
          flexWrap: 'wrap',
        },
      },
      root: {
        [theme.breakpoints.up('md')]: {
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },
    MuiPrivateTabIndicator: {
      root: {
        height: '5px',
        [theme.breakpoints.down('md')]: {
          position: 'relative',
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: `rgba(${secondaryColorRGB}, 0.8)`,
      },
    },
    MuiTypography: {
      root: {
        color: textColorHex,
      },
      colorInherit: {
        color: '#858585',
      },
      subtitle1: {
        color: textColorHex,
      },
    },
    MuiCardHeader: {
      title: {
        fontSize: '1.3rem',
        540: {
          fontSize: '1.5rem',
          fontWeight: 400,
          fontFamily: 'Roboto, sans-serif',
          color: '#777777',
        },
      },
    },
    MuiInputBase: {
      root: {
        color: inputText,
      },
      input: {
        fontFamily: fontFamilyText,
        fontSize: '1rem',
        width: '300px',
        [theme.breakpoints.down('md')]: {
          width: 200,
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 16px) scale(1)',
        '&$shrink': {
          transform: 'translate(14px, 2px) scale(0.75)',
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        zIndex: 2,
        padding: '8px 14px',
        '&::placeholder': {
          opacity: 1,
        },
      },
      root: {
        '&$disabled $notchedOutline': {
          backgroundColor: 'rgba(0,0,0,0)',
        },
      },
      disabled: {},
      notchedOutline: {},
    },
    MuiFormHelperText: {
      root: {
        color: primaryColorHex,
        '&$error': { color: primaryColorHex },
      },
      contained: {
        margin: '4px 14px 0',
      },
    },
    MuiFormControlLabel: {
      root: {
        marginRight: 0,
        alignItems: 'unset',
      },
      label: {
        '&$disabled': {
          color: 'rgba(255,255,255,0.5)',
        },
      },
    },
    MuiCheckbox: {
      root: {
        alignItems: 'unset',
        padding: '0 12px 0 12px',
      },
    },
    MuiExpansionPanel: {
      root: {
        backgroundColor: primaryColorHex,
        '&$disabled': {
          backgroundColor: 'rgba(0,167,159,1)',
        },
      },
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        top: theme.spacing.unit * 3,
      },
      content: {
        alignSelf: 'baseline',
        '&$expanded': {
          marginTop: theme.spacing.unit * 1.5,
          marginBottom: 0,
        },
        marginTop: theme.spacing.unit * 1.5,
        marginBottom: 0,
      },
      expanded: {},
      root: {
        minHeight: theme.spacing.unit * 8,
        '&$disabled': {
          opacity: 0.85,
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: '16px 16px 0 24px',
      },
    },
    MuiCollapse: {
      container: {
        backgroundColor: '#E8E9ED',
      },
    },
    MuiCardContent: {
      root: {
        padding: '36px',
        minHeight: 240,
        '&:last-child': 0,
      },
    },
    MuiMenu: {
      paper: {
        marginTop: 30,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
      },
    },
    MuiLink: {
      underlineHover: {
        textDecoration: 'none',
        color: 'secondary',
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        maxHeight: 'calc(100% - 80px)',
      },
      paper: {
        width: '550px',
        margin: 40,
        [theme.breakpoints.down('md')]: {
          width: 400,
        },
      },
      MuiTextField: {
        root: {
          color: '#ffffff',
        },
      },
      // MuiDialogTitle: {
      //   root: {
      //     display: 'flex',
      //     flexDirection: 'row',
      //     flexWrap: 'no-wrap',
      //     justifyContent: 'space-between',
      //   },
      // },
      paperWidthSm: {
        maxWidth: 'none',
      },
    },
    // MuiFormControl: {
    //   marginNormal: {
    //     marginTop: '0px',
    //     marginBottom: '0px',
    //   },
    // },
  },
});

export default themeBocalGourmand;
