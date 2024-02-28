import React, { Component } from 'react'



export default class Item extends Component {

    render() {
        let numberSheatArr = this.props.sheatArr.danhSachGhe
        return (
            <div className='col-12 row hang_ghe' style={{ color: "yellow" }}>
                <div className='col' style={{ fontWeight: "bold" }}>{this.props.sheatArr.hang}</div>

                {numberSheatArr.map((item, index) => {


                    return (
                        <div style={{ color: "white" }} className='so_ghe col'>
                            <button style={{fontWeight:"bold"}} className='ghe' >{index + 1}</button>
                            
                        </div>
                    )
                })}


            </div>
        )
    }
}
