import React, { Component } from "react"
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Duis mollis, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
      },
      {
        icon: <FaHiking />,
        title: "Unlimited Hiking",
        info:
          "Duis mollis, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Duis mollis, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
      },
      {
        icon: <FaBeer />,
        title: "Premium Beer",
        info:
          "Duis mollis, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Services
