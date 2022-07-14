import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetupHandler = (eneteredData) => {
    console.log(eneteredData);
  };
  return <NewMeetupForm onAddMeetUp={addMeetupHandler} />;
};

export default NewMeetupPage;
