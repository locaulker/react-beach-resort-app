import React, { Component } from "react"
import items from "./data"

const RoomContext = React.createContext()
/**
 * 1. Create a Context API.
 * - That will gives you immediate access to two components:
 * -- A Provider and A Consumer component
 *
 */

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  }

  // getData -- (external data)

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items)
    // console.log(rooms)
    let featuredRooms = rooms.filter(room => room.featured === true)
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    })
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)
      let room = { ...item.fields, images, id }

      return room
    })
    return tempItems
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer

export { RoomContext, RoomProvider, RoomConsumer }
