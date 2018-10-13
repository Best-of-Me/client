import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Shop extends React.Component {
  constructor() {
    super();
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
    this.state = { page: "accessory", loading: true };
  }
  componentWillMount() {
    this.service("/items")
      .then(e => {
        console.log(e.data);
        this.setState({ items: e.data, loading: false });
      })
      .catch(e => console.log(e.response));
  }
  render() {
    let type = this.props.match.params.id;
    console.log(this.state.items);
    if (this.state.loading) {
      return <div className={this.state.loading && "App-logo"}>Shop</div>;
    } else {
      let items = this.state.items.filter(i => {
        console.log(i.type.toLowerCase());
        return i.type.toLowerCase() === type;
      });

      return (
        <div>
          <ul>
            <li>
              <NavLink to="/shop/accessories">Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/shop/pets">Pets</NavLink>
            </li>
            <li>
              <NavLink to="/shop/backgrounds">Backgrounds</NavLink>
            </li>
          </ul>
          <ul>
            {items.map(item => {
              return (
                <li>
                  <img src={item.image} alt="" />
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}
