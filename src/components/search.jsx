import { FaSearch } from "react-icons/fa";
import '../styles/components/search.css';

const Search = () => {

    return (

        <div className='search-container'>
            <input type='text' placeholder={'Pesquisar...'}></input>
            <label className='search-icon'><FaSearch /></label>
        </div>
    );

}

export default Search;