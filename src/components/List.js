import React, { Component } from 'react'
import Zomato from 'zomato.js'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        restaurants: []
      }
    }
  }

  componentDidMount() {
    const zomato = new Zomato('d9ab5b5022882f3c6585c36d1d1766bd');
    zomato.search({
      enity_id: 297,
      enity_type: 'city',
    })
    .then(data => {
      this.setState({list: data})
      console.log(data)})
    .catch(err => console.error(err));
  }
  
  render() {
    let listItems = this.state.list.restaurants.map(item => (
      <div key={item.id}>
        <h3> {item.name} </h3>
      </div>
    ));

    return (
      <div>
        {listItems}
      </div>
    )
  }
}
