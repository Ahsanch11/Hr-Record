import React from 'react';
import { connect } from 'react-redux';
import { shape, arrayOf, string, bool, any,func } from 'prop-types';

import * as actions from '../../actions';
import Panel from '../panel/Panel';

function getDetail(student){

    return Object.values(student).map((val)=>(

      <p>{val}</p>

    ));
}

export class Hr extends React.Component {
  
  static propTypes = {
    data: arrayOf(any).isRequired,
    saveData:shape({
      isLoading1: bool.isRequired,
      error1: shape({
      message: string
      }),
      msg:bool
    }).isRequired,
    saveStudentAction:func.isRequired,
    resetSaveAction:func.isRequired

  }

  static defaultProps = {
  };
  constructor(){
    super();

    this.localhandler = this.localhandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }
 
  localhandler(e){
    const target = {e};
    const id = { target };
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
    return (
      <div className="hr">
        <Panel />
      </div>
    );
  }
}
 
function mapStateToProps({ data ,saveData }) {
  return {
    data: data.data,
    isLoading: data.isLoading,
    error: data.error,
    saveData
  };
}

export default connect(mapStateToProps,{
  saveStudentAction:actions.saveStudentAction,
  resetSaveAction: actions.resetSaveAction})(Hr);
