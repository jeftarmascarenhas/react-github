import React from 'react';

const List = ({ events }) => (
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

export default List;