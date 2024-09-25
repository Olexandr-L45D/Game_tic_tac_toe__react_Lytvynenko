import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
// import { selecFilter, changeFilter } from '../../redux/filtersSlice'
import { setChangeFilter, selectStatusFilterName } from '../../redux/filters/slice'

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectStatusFilterName);
    // const handleFilterChange = (filter) => dispatch(setChangeFilter(filter));

    // const dispatch = useDispatch();
    // const filter = useSelector(selecFilter);
    const handleFilterChange = e => dispatch(setChangeFilter(e.target.value));

    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
}


