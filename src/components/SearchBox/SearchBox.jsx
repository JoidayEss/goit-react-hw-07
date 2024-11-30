import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const filterValue = e.target.value;
    console.log("Filter value:", filterValue);

    dispatch(changeFilter(filterValue));
  };
  return (
    <>
      <div className={s.search}>
        <p className={s.search_p}>Find contacts by name</p>
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
          value={filter}
        />
      </div>
    </>
  );
};

export default SearchBox;
