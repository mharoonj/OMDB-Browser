import React from "react"
import styles from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';


type SearchBarProps = {}

const SearchBar: React.FC<SearchBarProps> = () => {
    const [searchVal, setSearchVal] = React.useState('');
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchVal(e.target.value);
    }
    
    const handleClearBtn = () => {
      setSearchVal('');
    }

    return <div>
        <div className={styles.inputWrap}>
       
    <FaSearch className={styles.searchIcon} />
       
        <input 
          onChange={handleInput}
          value={searchVal}
          type="text" 
          name="product-search" 
          id="product-search" 
          placeholder="Search Products"
        />
        
      </div>
    </div>
}

export default SearchBar