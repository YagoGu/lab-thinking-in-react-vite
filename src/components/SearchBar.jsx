import { useState } from "react";

function SearchBar(props) {

    const [name, setName] = useState("");

    const searchForIt = (e) => {
        setName(e.target.value)
        props.searchProduct(e.target.value)
    }

    return (
      <>
        <label>Search</label>

        <input name="search" value={name} type="text" onChange={searchForIt} />
      </>
    );
  }

  export default SearchBar;