import React, { Component } from 'react'
import Zomato from 'zomato.js'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  getData(zomato, start){
    zomato.search({
      city_id: 297,
      start: start,
      count: 20,
    })
    .then(data => {
      console.log(data)
      this.setState({ list: [...this.state.list, ...data.restaurants]})
      if ( start <= 80) {
        this.getData(zomato, start + 20)
      }
    })
    .catch(err => { 
      console.error(err)
      return null
    });
  }

  
  componentDidMount() {
    const zomato = new Zomato('d9ab5b5022882f3c6585c36d1d1766bd');
    this.getData(zomato, 0);
  }

  render() {
    let listItems = this.state.list.map(item => (
      <ListItem button key={item.id}>
         <ListItemText primary={item.name} />
      </ListItem>
    ));

    return (
      <List style={{
        maxHeight: '300px', 
        width:'300px', 
        overflowX:'hidden', 
        overflowY: 'auto' }} 
      >  
        {listItems}
      </List>
    )
  }
}
