import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Element from './element'
import { startGame, setAnswer } from '../redux/reducer';

const Game = (props) => {
   useEffect(() => {
      props.startGame();
      // eslint-disable-next-line
   }, []);
   return (
      <Element {...props}/>
   )
}

const mapStateToProps = (state) => {
   return {
      field: state.indexData.gameSettings.field,
      way: state.indexData.gameSettings.way,
      posStart: state.indexData.gameSettings.posStart,
      posEnd: state.indexData.gameSettings.posEnd,
      posAnswer: state.indexData.gameSettings.posAnswer,
      isWin: state.indexData.gameSettings.isWin,
   }
}

export default connect(mapStateToProps, { startGame, setAnswer })(Game);