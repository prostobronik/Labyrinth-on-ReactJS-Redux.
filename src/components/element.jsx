import React from 'react';
import style from './index.module.scss';
import { enumDirections } from '../utils/utils';

import arrow from '../assets/images/arrow.svg';
import start from '../assets/images/start.png';
import win from '../assets/images/win.svg';
import error from '../assets/images/error.svg';
import rightAnswer from '../assets/images/right-answer.svg';

const Element = (props) => {
   const getDirection = (o) => {
      switch (o) {
         case enumDirections.LEFT:
            return style.left;
         case enumDirections.UP:
            return style.up;
         case enumDirections.DOWN:
            return style.down;
         default:
            return '';
      }
   }

   return (
      <>
         <section>
            {
               props.field.map(function (oRow, iRow) {
                  return (
                     <div className={style.row} key={iRow}>
                        {
                           oRow.map(function (oCol, iCol) {
                              return (
                                 <div className={style.row__col} key={iCol} onClick={() => props.setAnswer({ x: iCol, y: iRow })}>
                                    {props.posAnswer.x === -1 &&
                                       props.posAnswer.y === -1 &&
                                       props.posStart.x === iCol &&
                                       props.posStart.y === iRow ? <img src={start} alt='Старт' /> : ''}
                                    {props.posAnswer.x === iCol &&
                                       props.posAnswer.y === iRow &&
                                       props.isWin ? <img src={win} alt='Вы ответили правильно!' /> : ''}
                                    {props.posAnswer.x === iCol &&
                                       props.posAnswer.y === iRow &&
                                       !props.isWin ? <img src={error} alt='Вы ответили не правильно!' /> : ''}
                                    {props.posAnswer.x !== -1 &&
                                       props.posAnswer.y !== -1 &&
                                       !props.isWin &&
                                       props.posEnd.x === iCol &&
                                       props.posEnd.y === iRow ? <img src={rightAnswer} alt='Правильный ответ!' /> : ''}
                                 </div>
                              );
                           })
                        }
                     </div>
                  )
               })
            }
         </section>
         <section>
            <div className={style.way_section}>
               {
                  props.way.map(function (o, i) {
                     return (
                        <div key={i} className={style.way_section__item}>
                           <img src={arrow} className={getDirection(o)} alt='' />
                        </div>
                     )
                  })
               }
            </div>
            <div>
               <input className={style.btn} type='button' value='Новая игра' onClick={props.startGame} />
            </div>
         </section>
      </>
   )
}

export default Element;