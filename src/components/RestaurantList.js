import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateList, loadMore } from '../actions/updateList'  
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


class RestaurantList extends Component {

  

  
  componentDidMount() {
    this.props.updateList()
  }

  render() {
    let listItems = this.props.list.restaurants.map(item => (
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

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps, {updateList, loadMore })(RestaurantList);