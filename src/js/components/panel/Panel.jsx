import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import { SnackbarContent } from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as actions from '../../actions';


class Panel extends React.Component {
  constructor(){
    super();
    this.localhandler = this.localhandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  localhandler(id){
    console.log(id)
    const { data, saveStudentAction} = this.props;
    data.forEach((val)=>{

      if(val.computerNumber === id){
        saveStudentAction(val);

      }
    });
  }
  resetHandler(){
    const {resetSaveAction} = this.props;
    resetSaveAction();
  }
  render() {
    const { saveData,data} = this.props;
    const {isLoading1, error1 , msg} = saveData;
    let content;

    if (isLoading1 === true) {
      content = <div>Saving Videos.....</div>;
    } else if (error1 !== null) {
      content = <div>{error1.message}</div>;
    } else if (msg !== null){
      content = <div>{ msg }<br /><button onClick={this.resetHandler}>Ok </button></div>;
    } else {
      content = ''
    }
    const resp = data.map((item)=>{
      return (
        <ExpansionPanel className="root">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="heading">{item.studentHR.studentDetails.studentName}</Typography>
            <Typography className="secondaryHeading">{item.studentHR.studentDetails.bForm}</Typography>
            <Typography className="heading">{item.studentHR.studentDetails.dob}</Typography>
            <Typography className="secondaryHeading">{item.studentHR.studentDetails.idMark}</Typography>
            <Typography className="secondaryHeading">{item.studentHR.studentDetails.hafiz && 'hafiz'}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className="heading">{item.studentHR.fatherDetails.fatherName}</Typography>
            <Typography className="heading">{item.studentHR.fatherDetails.fatherCnic}</Typography>
            <Typography className="heading">{item.studentHR.fatherDetails.fatherMobile}</Typography>
            <Typography className="heading">{item.studentHR.fatherDetails.fatherAddress}</Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography className="heading">{item.studentHR.classDetails.admissionNumber}</Typography>
            <Typography className="heading">{item.studentHR.classDetails.computerNumber}</Typography>
            <Typography className="heading">{item.studentHR.classDetails.selectClass + item.studentHR.classDetails.selectSection}</Typography>
            <Typography className="heading">{item.studentHR.classDetails.selectSubject}</Typography> 
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography className="heading">{item.studentHR.emergencyDetails.emergencyName}</Typography>
            <Typography className="heading">{item.studentHR.emergencyDetails.emergencyRelation}</Typography>
            <Typography className="heading">{item.studentHR.emergencyDetails.emergencyNumber}</Typography>
            <Typography className="heading">{item.studentHR.emergencyDetails.medicalNotes}</Typography>   
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small" color="primary" onClick={()=>{this.localhandler(item.computerNumber)}}>
              Save
            </Button>
          </ExpansionPanelActions>
      </ExpansionPanel>
      );

    });

    return (
      <div className="">
        {resp}
        { msg && 
        <div className="des">
         <SnackbarContent className="snackbar" message={msg} action="" />
         <Button variant="raised" color="secondary" className="button" onClick={this.resetHandler}>
          Ok
         </Button>
        </div>
        }
      </div>
      
    );
  }
}

Panel.propTypes = {
};
function mapStateToProps({ data , saveData }) {
  return {
    data: data.data,
    saveData
  };
}
export default connect(mapStateToProps,{
  saveStudentAction:actions.saveStudentAction,
  resetSaveAction: actions.resetSaveAction})(Panel);
