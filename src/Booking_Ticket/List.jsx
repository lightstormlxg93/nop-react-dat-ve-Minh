import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'

class List extends Component {
    renderList = () => {
        return this.props.listArr.map((item) => {
            return (<Item sheatArr={item} />)
        })

    }
    render() {
        return (
            <div className='list col-8'>
                <br />
                <h1>ĐẶT VÉ XEM PHIM CYPERLEARN.VN</h1>
                <h4 style={{ color: "white" }}>MÀN HÌNH</h4>
                <div className="screen"></div>

                {/* hàng đầu */}
                <div className='list_item  row '>
                    <div className="col">{this.props.fistChartArr.hang}</div>
                    {this.props.fistChartArr.danhSachGhe.map((item) => {
                        return (
                            <div style={{ color: "yellow",fontWeight:"bold", textAlign:"center" }} className='col'>{item.soGhe}</div>
                        )
                    })}
                </div>
                <br />

                {/* các hàng sau */}
                <div className='list_item2'>
                    {this.renderList()}

                </div>
                    
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        listArr: state.listArr,
        fistChartArr: state.fistChartArr
    }
}
export default connect(mapStateToProps)(List)
