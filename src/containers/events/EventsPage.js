import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as EventsActions from '../../actions/events';

import ListEvents from '../../components/events/ListEvents';
import BannerEvents from '../../components/events/BannerEvents';

class EventsPage extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events } = this.props;
    return (
      <div>
        <BannerEvents />
        <h2>Event list</h2>
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