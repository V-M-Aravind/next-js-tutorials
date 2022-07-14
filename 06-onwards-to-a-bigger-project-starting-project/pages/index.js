import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'random',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'address1',
    description: 'ajsjda sdasjdnajsd asd da ;dja ',
  },
  {
    id: 'm2',
    title: 'random',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'address1',
    description: 'ajsjda sdasjdnajsd asd da ;dja ',
  },
  {
    id: 'm3',
    title: 'random',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'address1',
    description: 'ajsjda sdasjdnajsd asd da ;dja ',
  },
];

const HomePage = ({ meetups }) => {
  //   const [state, setState] = useState([]);
  //   useEffect(() => {
  //     setState(DUMMY_MEETUP);
  //   }, []);

  return <MeetupList meetups={meetups} />;
}; // export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUP
//     }
//   };
// }
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUP,
      revalidate: 1,
    },
  };
}
export default HomePage;
