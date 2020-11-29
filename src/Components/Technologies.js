import React, { Component } from "react";
import MorphShape from "./MorphShape";

class Technologies extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li key={testimonials.user}>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="technologies">
        <div className="text-container">
          <div className="row">
            <div align="center" className="header-col">
              <h1>
                <span>Technologies that I use.</span>
                <MorphShape />
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Technologies;
