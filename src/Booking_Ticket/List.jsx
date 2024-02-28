import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

class List extends Component {
    renderList = () => {
        return this.props.listArr.map((item) => {
            return (<Item sheatArr={item} />)
        })

    }
    render() {
        return (
            <div className='list col-8'>
                <h1>ĐẶT VÉ XEM PHIM CYPERLEARN.VN</h1>
                <h4 style={{ color: "white" }}>MÀN HÌNH</h4>
                <div className="screen"></div>
                <div className='list_item'>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        listArr: state.data,
    }
}
export default connect(mapStateToProps)(List)
