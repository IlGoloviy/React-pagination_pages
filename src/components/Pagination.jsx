import React from 'react';
import style from 'styled-components'

const Div = style.div`
  margin: 15px 25px;
  > span {
    margin-left: 10px;
    color: #929292;
  }
  > button {
    font-size: 16px;
  }
`;
const Active = style.button`
  background-color: #a2a2a2;
  border: 2px solid #a2a2a2;
`;

class Pagination extends React.Component {
  constructor(props) {
    super();

  }

  render() {
    const { current, total, setNumberPage } = this.props;
    let arrBtns = [];
    for (let i = 1; i <= Math.ceil(total / 4); i++) {
      arrBtns.push(i);
    }
     
    if (total === 0) {
      return (
        <Div><span>{total} одиниць товару</span></Div>
      )
    }
    return (
      <Div>
        <button
          onClick={() => {
            if (current !== 1) {
              setNumberPage(current - 1) 
            }
          }}
        >{`<`}</button>
        {arrBtns.map((btn, i) => {
          if (btn === current) {
            return <Active key={i}>{btn}</Active>
          } else {
            return <button onClick={() => setNumberPage(btn)} key={i}>{btn}</button>
          }
        })}
        <button 
          onClick={() => {
            if (arrBtns[arrBtns.length-1] !== current) {
              setNumberPage(current + 1) 
            }
          }}
        >{`>`}</button>
        <span>{total} одиниць товару</span>
      </Div>
    )
  }
}

export default Pagination;