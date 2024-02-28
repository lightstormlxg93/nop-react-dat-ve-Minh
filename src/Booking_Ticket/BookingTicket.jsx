import React, { Component } from 'react'
import List from './List'
import Cart from './Cart'

export default class BookingTicket extends Component {
  render() {
    return (
      <div className='background_img_ticket'>
        <div className='background_color_ticket '></div>
        <div className="booking_ticket row">
            <List/>
            <Cart/>
        </div>

      </div>
    )
  }
}
