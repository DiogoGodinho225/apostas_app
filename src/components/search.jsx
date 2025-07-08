import { FaSearch } from "react-icons/fa";
import '../styles/components/search.css';

const Search = ({setSearch}) => {


    return (

        <div className='search-container'>
            <input type='text' placeholder={'Pesquisar...'} onChange={(e) => setSearch(e.target.value)}></input>
            <label className='search-icon'><FaSearch /></label>
        </div>
    );

}

export default Search;