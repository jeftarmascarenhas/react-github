import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationSystem from 'react-notification-system';

import * as EventsActions from '../../actions/events';

import ListEvents from '../../components/events/List';
import BannerEvents from '../../components/events/Banner'

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this._notificationSystem = null;
  }
  
  componentDidMount() {
    this.props.getEvents();
    if (this._notificationSystem) {
      this._notificationSystem.addNotification({
        message: 'Notification message',
        level: 'success'
      });
    }
  }

  teste = (event) => {
    event.preventDefault();
    if (this._notificationSystem) {
      this._notificationSystem.addNotification({
        message: 'Notification message tow',
        level: 'success'
      });
    }
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        <BannerEvents />
        <h2>Event list</h2>
        <button onClick={this.teste}>Notification</button>
        <NotificationSystem ref={n => this._notificationSystem = n} />
        <ListEvents
          events={events}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ events: state.events });


const mapDispatchToProps = dispatch =>
  bindActionCreators(EventsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage)