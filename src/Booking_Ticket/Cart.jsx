import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Cart extends Component {
  render() {
    return (
      <div className='cart col-4'>
        <br />
        <h2 >DANH SÁCH GHẾ BẠN ĐÃ CHỌN</h2>
        <br /><br />

        <div className="ghe_da_dat"></div> <span>Ghế đã đặt</span> <br />
        <div className="ghe_dang_chon"></div> <span>Ghế đang chọn</span> <br />
        <div className="ghe_chua_dat"></div> <span>Ghế chưa đặt</span> <br />
        <br />
      
        <table className='table'>
            <thead>
                    <tr>
                        <th>Số Ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
            </thead>
            <tbody>
                    {this.props.cart.map((item) => { 
                        return(
                            <tr>
                                <td>{item.soGhe}</td>
                                <td>{item.gia}</td>
                                <td>{item.soGhe}</td>
                            </tr>
                        )
                     })}
            </tbody>
        </table>

      </div>
    )
  }
}

let mapStateToProps=(state) => { 
    return {
        cart:state.cart
    }
 }


export default connect(mapStateToProps)(Cart)