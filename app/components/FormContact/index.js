import React from 'react';
import PropTypes from 'prop-types';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    margin: '20px 30%',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 10px ',
    },
  },
  buttonSubmit: {
    margin: '20px 35%',
    backgroundColor: '#d3a476',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 40px ',
    },
  },
  input: {
    color: '#ffffff',
  },
  buttonPolice: {
    color: '#ffffff',
    fontSize: '17px',
    fontFamily: 'Cairo, sans-serif',
    fontWeight: 'bold',
    margin: '5px',
  },
});

const themeBocalGourmand = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        fontFamily: 'Cairo, sans-serif',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#ffffff',
        '&$focused': {
          // increase the specificity for the pseudo class
          color: '#ffffff',
        },
      },
    },
    MuiInput: {
      underline: {
        borderBottom: '1px solid #ffffff',
        '&$focused': {
          // increase the specificity for the pseudo class
          borderBottom: '2px solid #ffffff',
        },
      },
    },
    MuiInputBase: {
      input: {
        color: '#d3a476',
      },
    },
    MuiSnackbarContent: {
      root: {
        fontFamily: 'Cairo, sans-serif',
        fontWeight: 'bold',
        fontSize: '17px',
        backgroundColor: '#4caf50',
      },
    },
  },
});

class FormContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      textArea: '',
      openSuccess: false,
      openFailed: false,
    };
    this.valueChange = this.valueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'https://bocal-gourmand.herokuapp.com/contact',
      data: this.state,
    }).then(response => {
      if (response.statusText === 'OK') {
        this.setState({ openSuccess: true });
        this.resetForm();
      } else {
        this.setState({ openFailed: true });
      }
    });
  }

  resetForm() {
    this.setState({ fullName: '', phone: '', email: '', textArea: '' });
  }

  handleClose = () => {
    this.setState({ openSuccess: false });
    this.setState({ openFailed: false });
  };

  render() {
    const { classes } = this.props;
    const { email, phone, fullName, textArea } = this.state;

    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
        className={classes.formContainer}
      >
        <MuiThemeProvider theme={themeBocalGourmand}>
          <TextValidator
            className={classes.field}
            label="Nom"
            onChange={this.valueChange}
            name="fullName"
            value={fullName}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <TextValidator
            className={classes.field}
            label="Email"
            onChange={this.valueChange}
            name="email"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
          <TextValidator
            className={classes.field}
            label=" numéro de téléphone"
            onChange={this.valueChange}
            name="phone"
            value={phone}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <TextValidator
            className={classes.field}
            multiline
            rows={4}
            rowsMax="10"
            label="Votre demande"
            onChange={this.valueChange}
            name="textArea"
            value={textArea}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <Fab
            variant="extended"
            type="submit"
            size="small"
            aria-label="add"
            className={classes.buttonSubmit}
          >
            <SendIcon className={classes.sendIcon} />
            <Typography
              component="span"
              align="center"
              className={classes.buttonPolice}
            >
              Envoyer
            </Typography>
          </Fab>
          <Snackbar
            style={{
              backgroundColor: '#4caf50',
              color: '#ffffff',
              width: '50%',
            }}
            anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            open={this.state.openSuccess}
            onClose={this.handleClose}
            message="Votre message a bien était envoyer , nous vous contacterons trés rapidement"
          />
          <Snackbar
            open={this.state.openFailed}
            onClose={this.handleClose}
            message="I love snacks"
          />
        </MuiThemeProvider>
      </ValidatorForm>
    );
  }
}

FormContact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormContact);
