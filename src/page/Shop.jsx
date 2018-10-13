import React from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import Item from "../components/Item";

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
      let items = {};
      this.state.items.forEach(item => {
        if (!items[item.type]) items[item.type] = [];
        items[item.type].push(item);
      });
      const renderItems = Object.values(items).map(type => {
        return (
          <Route
            path={`/shop/${type[0].type.toLowerCase()}`}
            render={() => <Item items={type} />}
          />
        );
      });
      return (
        <div>
          <NavLink to="/shop/accessories">Accessories</NavLink>
          <NavLink to="/shop/pets">Pets</NavLink>
          <NavLink to="/shop/backgrounds">Backgrounds</NavLink>
          <SwipeableRoutes resistance replace enableMouseEvents>
            {renderItems}
          </SwipeableRoutes>
        </div>
      );
    }
  }
}
