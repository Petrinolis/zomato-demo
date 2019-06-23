import React, { Component } from 'react'
import { connect } from 'react-redux';

class Viewer extends Component {
  render() {
    return (
      <div style={{display: 'flex', margin: '40px'}}>
        <div style={{width:'600px', marginRight: '40px'}} >
          <img src={this.props.viewer.image} alt={'Restaurant'} />
        </div>
        <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
          maxHeight: '400px',
          maxWidth: '500px' }}
        > 
          <div>
            <div className={'title'}>
              {this.props.viewer.name}
            </div>
            <div className={'subTitle'}>
              {this.props.viewer.address}
            </div>
          </div>
          <div>
            <div style={{display:'flex', alignItems: 'center'}}>
              <div className={'icon'}>
                {this.props.viewer.booking ? 
                  <img src={require('../icons/tick.svg')} alt={'tick'}/> : <img src={require('../icons/cross.svg')} alt={'cross'}/> }
              </div>
              <div className={'subTitle'}>
                {this.props.viewer.booking ? 'Bookings available' : 'No bookings'}
              </div>
            </div>
            <div style={{display:'flex', alignItems: 'center'}}>
              <div className={'icon'}>
                {this.props.viewer.delivery ? 
                  <img src={require('../icons/tick.svg')} alt={'tick'}/> : <img src={require('../icons/cross.svg')} alt={'cross'}/> }
              </div>
              <div className={'subTitle'}>
                {this.props.viewer.delivery ? 'Delivery available' : 'No deliveries'}
              </div>
            </div>
          </div>
          <div>
            <div className={'title2'}>
              CUISINES
            </div>
            <div className={'description'}>
              {this.props.viewer.cuisines}
            </div>
          </div>
          <div>
            <div className={'title2'}>
              PHONE NUMBER
            </div>
            <div className={'description'}>
              {this.props.viewer.phone}
            </div>
          </div>
          <div>
            <div className={'title2'}>
              OPENING HOURS
            </div>
            <div className={'description'}>
              {this.props.viewer.hours}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  viewer: state.viewer
});

export default connect(mapStateToProps)(Viewer);