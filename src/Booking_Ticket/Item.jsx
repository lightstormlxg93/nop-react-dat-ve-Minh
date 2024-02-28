import React, { Component} from 'react'
import { connect } from 'react-redux'





class Item extends Component {
    // handelChangeColor=() => { 
    //     const element = document.querySelector(".ghe_chua_dat");
    //     element.classList.replace("ghe_chua_dat", "ghe_da_dat");
    //  }
    render() {
        let numberSheatArr = this.props.sheatArr.danhSachGhe
        
        return (
            <div className='col-12 row hang_ghe' style={{ color: "yellow" }}>
                <div className='col' style={{ fontWeight: "bold" }}>{this.props.sheatArr.hang}</div>

                {numberSheatArr.map((item, index) => {


                    return (
                        <div style={{ color: "white" }} className='so_ghe col'>
                            <button
                                
                                onClick={() => {
                                    this.props.handelAddToCart(item);
                                    // this.props.handelChangeColor(item);
                                }}
                                className={item.daDat ? "ghe_da_dat" : "ghe_chua_dat" }


                            >
                               <input type='checkbox'  id='my-checkbox'/> 
                                {/* {index + 1} */}
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
        },
        // handelChangeColor: (ghe) => {
        //     let action = {
        //         type: "Change",
        //         payload: ghe
        //     }
        //     dispatch(action)
        // }



    }
}

export default connect(null, mapDispatchToProps)(Item)