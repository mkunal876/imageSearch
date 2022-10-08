const SearchBoxBuilder = ({handleOnChange, value}) => {

    return (
        <div className="search-box-container text-center">
            <input value = {value} className="form-control" placeholder="Search Image....." type = "text" onChange={handleOnChange}/>
        </div>
    )
}

export default SearchBoxBuilder;