import React from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import Items from "../components/Items";
import './Shop.scss'

export default class Shop extends React.Component {
  constructor() {
    super();
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
    this.state = { page: "", loading: true };
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
        const path=(type[0].type.toLowerCase()=="accessories")?"":type[0].type.toLowerCase()
        console.log(path,type[0].type.toLowerCase())
        return (
          <Route
            path={`/shop/${path}`}
            render={() => <Items  items={type} />}
          />
        );
      });
      return (
        <div className="Shop">
          <div className="links">
            <NavLink exact to="/shop/">Accessories</NavLink>
            <NavLink to="/shop/pets">Pets</NavLink>
            <NavLink to="/shop/backgrounds">Backgrounds</NavLink>
          </div>
          <SwipeableRoutes resistance replace enableMouseEvents>
            {renderItems}
          </SwipeableRoutes>
        </div>
      );
    }
  }
}
