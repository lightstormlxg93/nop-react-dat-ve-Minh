import React, { Component } from 'react'
import { connect } from 'react-redux'



class Item extends Component {

    render() {
        let numberSheatArr = this.props.sheatArr.danhSachGhe
        return (
            <div className='col-12 row hang_ghe' style={{ color: "yellow" }}>
                <div className='col' style={{ fontWeight: "bold" }}>{this.props.sheatArr.hang}</div>

                {numberSheatArr.map((item, index) => {
                    let soGhe=item.soGhe

                    return (
                        <div style={{ color: "white" }} className='so_ghe col'>
                            <button
                                style={{ fontWeight: "bold" }}
                                className='ghe'
                                id={{soGhe}}
                                onClick={() => { this.props.handelAddToCart(item) }}
                            >
                                {index + 1}
                            </button>

                        </div>
                    )
                })}


            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handelAddToCart: (ghe) => {
            let action = {
                type: "Add",
                payload: ghe
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Item)