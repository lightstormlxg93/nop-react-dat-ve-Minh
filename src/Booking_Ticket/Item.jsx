import React, { Component } from 'react'



export default class Item extends Component {
  render() {
    let numberSheatArr=this.props.sheatArr.danhSachGhe
    return (
      <div className='col-12 row'>
        <div className='col'>{this.props.sheatArr.hang}</div>
        {numberSheatArr.map((item) => { 
            let soGhe=item.soGhe
            
            return(
                <div className='col'>{soGhe}</div>
            )
         })}

      </div>
    )
  }
}
