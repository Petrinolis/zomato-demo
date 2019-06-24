import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateList, loadMore, loading, updateViewer } from '../actions/updateList'  
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class RestaurantList extends Component {

  handleLoadMore(){ 
    this.props.loading(true)
    this.props.loadMore()
  }

  componentDidMount() {
    this.props.loading(true)
    this.props.updateList()
  }


  render() {
   
    let listItems = []
    this.props.list.restaurants.forEach((item, index) => {
      if(this.props.list.visible[index]) {
        listItems.push(
          <ListItem 
            button 
            key={item.id} 
            style={{borderTop: 'solid 1px #a2a1a1'}}
            onClick={this.props.updateViewer.bind(this, item.id)}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        )
      }
    });

    return (
      <List style={{
        height: 'calc(100vh - 340px)', 
        width:'300px', 
        overflowX:'hidden', 
        overflowY: 'auto',
       }} 
      >  
        <ListItem>
          <ListItemText secondary={'RESULTS'} />
        </ListItem>
        {listItems}
        <ListItem 
          disabled={this.props.list.loading}
          button
          style={{borderTop: 'solid 1px #a2a1a1'}}
          onClick={this.handleLoadMore.bind(this)}
        >
          <ListItemText
            style={{textAlign: 'center'}}
            secondary={this.props.list.loading ? 'LOADING' : 'LOAD MORE' }
          />
        </ListItem>
      </List>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps, {updateList, loadMore, loading, updateViewer})(RestaurantList);