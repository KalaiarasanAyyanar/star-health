import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../App.css"
import StepButton from '@material-ui/core/StepButton';
const termsAndConditions = "Terms & conditions Privacy Policy";
var emailEntered = "";
var phnNumberEntered = "";


const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['', '', '', ''];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'We may know your mobile number and email adresss  email adresss email adresss?';
    case 1:
      return 'What is an ad group anyways tell use to help you help you ?';
    case 2:
      return 'This is the bit I really care about yourself and family help you !';
    case 3:
      return 'This is the bit tell this so that we can help you with this help you ';
    default:
      return 'Unknown step';
  }
}

class Register extends React.Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
    checkTerms: false,
  };

  isStepOptional = step => step === 1;

  validator(regex, string) {
    return regex.test(string)
  }

  handleNext = () => {
    var emailValidationRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,3}$/g;
    var phnNumberValidator = /[789][0-9]{9}/g;
    var validEmail = this.validator(emailValidationRegex, emailEntered);
    let { skipped } = this.state;
    var validPhone = this.validator(phnNumberValidator, phnNumberEntered);
    (validPhone) ?
      ((validEmail) ?
        this.setState({
          activeStep: this.state.activeStep + 1,
          skipped,
        }) :
        alert("Invalid Email id")) :
      alert("Invalid Phone Number")
  };

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };
  handleCheckTerms = () => {
    this.setState({
      checkTerms: !this.state.checkTerms,
    })
  }

  handleEmailChange = (event) => {
    emailEntered = event.target.value;
  }

  handlePhnChange = (event) => {
    phnNumberEntered = event.target.value;
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
      checkTerms: false,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <div className="register-heading">
          plan for my family
      </div>


        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption" ></Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}
              >
                <StepButton
                  onClick={this.handleStep(index)}
                  completed={this.isStepComplete(index)}
                  {...labelProps}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>

              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>

              <div className="BottomButton">
                <Button onClick={this.handleReset} className={classes.button}>
                  Reset
              </Button>
              </div>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-mobile fa-1x mailIcon"></i>
                    </div>
                    <div className="input-group-addon">
                      <center ><p style={{marginBottom:"0px"}}>+91</p></center>
                    </div>
                    <input className="form-control" id="phnNumber" name="email" type="text" required
                      placeholder="Mobile Number" onChange={this.handlePhnChange} />
                  </div>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-envelope mailIcon" aria-hidden="true"></i>
                    </div>
                    <input className="form-control" id="email" onChange={this.handleEmailChange} name="email" type="email" placeholder="Email Address" required />
                  </div>
                </div>
                <label className="checkbox"><input type="checkbox" name="checkbox" value="value" checked={this.state.checkTerms} onChange={this.handleCheckTerms} />I agree to the <a href="https://www.starhealth.in/terms"> {termsAndConditions} </a></label>
                <div className="BottomButton">
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Back
                </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                    disabled={!this.state.checkTerms}
                    type="button"
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Continue→'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Register);

