import React, { Component } from "react"
import { RoomContext } from "../Context"

class FeaturedRooms extends Component {
  static contextType = RoomContext

  render() {
    const { featuredRooms: rooms } = this.context
    console.log(rooms)

    return <div>Featured Rooms</div>
  }
}

export default FeaturedRooms
