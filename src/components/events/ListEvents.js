import React from 'react';

const ListEvents = ({ events }) => (
  events.map(event => {
    return (
      <article key={ event.id }>
        <h2>{ event.title }</h2>
        <p>{ event.resume }</p>
        <a href={ event.site }>Site</a>
      </article>
    );
  })
);

export default ListEvents;