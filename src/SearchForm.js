import React from "react"

function SearchForm (props){
    return(
            <div className="jumbotron">
                <h1 className="text-center">Brewery Database App</h1>
                    <form className="mx-auto" style={{maxWidth: 600}} onSubmit={props.searchBreweryName}>
                        <div className="form-group">
                            <label className="form-label"> Search by Brewery Name: </label>
                            <input type="text" className="form-control" value={props.breweryName} onChange={props.handleNameChange}></input>    
                        </div>
                        <button className="btn btn-primary">Search by Name</button>
                    </form>
                    <form className="mx-auto" style={{maxWidth: 600}} onSubmit={props.searchBreweryState}>
                    <div className="form-group">
                            <label className="form-label"> Search by State: </label>
                            <select className="form-control" value={props.breweryState} onChange={props.handleStateChange}>
                                <option value="">Select State</option>
                                <option value="California">California</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Texas">Texas</option>
                            </select>    
                        </div> 
                        <button className="btn btn-primary">Search by State</button>
                    </form> 
                </div>

    )
}

export default SearchForm;