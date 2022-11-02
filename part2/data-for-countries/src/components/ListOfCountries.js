import { Filter } from "./Filter";

const ListOfCountries = ({filter, handleFilter, countries, setFilter}) =>{

    return(
      <div>
        <Filter filter={filter} handleFilter={handleFilter} />    
        {countries[0].map((idcountry, index) => 
        <> <p> {idcountry} </p> <button type="submit" value={idcountry} onClick={(e) => setFilter(e.target.value)}>Show</button> </> 
        )}
      </div>
    )
}

export {ListOfCountries};