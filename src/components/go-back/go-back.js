import React from 'react';
import { withRouter } from 'react-router-dom';
import './go-back.css';

function GoBack ({ history }) {
  return <button className = 'btn' onClick = {() => history.goBack()} title = 'Назад'></button>
}

export default withRouter(GoBack);