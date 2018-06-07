import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as EventsActions from '../../actions/events';

class EventsPage extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events } = this.props;
    return (
      <div>
        <h2>Event list</h2>
        {
          events.map(event => {
            return (
              <article key={ event.id }>
                <h2>{ event.title }</h2>
                <p>{ event.resume }</p>
                <a href={ event.site }>Site</a>
              </article>
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ events: state.events });


const mapDispatchToProps = dispatch =>
  bindActionCreators(EventsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage)