import * as types from "../constants/actionTypes";

export const getEvents = events => ({
  type: types.GET_EVENTS,
  payload: [
    {
      id: 1,
      title: 'Event Title',
      resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
      site: 'http://www.google.com.br',
      tags: ['JavaScript', 'React', 'Redux'],
      location: {
        country: 'Brasil',
        state: 'PE',
        city: 'Recife',
        address: 'Av. Miguel Arrais',
        number: 13
      },
      hours: {
        start: '18:30',
        end: '21:00',
      },
      eventClose: '2018-06-20 08:00:00',
    },
    {
      id: 2,
      title: 'Event New Title',
      resume: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
      site: 'http://www.youtube.com.br',
      tags: ['Nodejs', 'React', 'Redux'],
      location: {
        country: 'Brasil',
        state: 'PE',
        city: 'Recife',
        address: 'Av. Miguel Arrais',
        number: 13
      },
      hours: {
        start: '15:30',
        end: '20:00',
      },
      eventClose: '2018-06-20 08:00:00',
    },
  ]
})