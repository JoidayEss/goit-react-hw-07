import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { isError, isLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(isLoading);
  const error = useSelector(isError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {loader && !error ? <Loader /> : <ContactList />}
    </div>
  );
};

export default App;
