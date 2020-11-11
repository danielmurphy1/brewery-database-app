import React from "react";
import states from "../states-data"

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
                    <form className="mx-auto" style={{maxWidth: 600}} onSubmit={props.searchCityName}>
                        <div className="form-group">
                            <label className="form-label"> Search by City: </label>
                            <input type="text" className="form-control" value={props.breweryCity} onChange={props.handleCityChange}></input>    
                        </div>
                        <button className="btn btn-primary">Search by City</button>
                    </form>
                    <form className="mx-auto" style={{maxWidth: 600}} onSubmit={props.searchBreweryState}>
                    <div className="form-group">
                            <label className="form-label"> Search by State: </label>
                            <select className="form-control" value={props.breweryState} onChange={props.handleStateChange}>
                                <option value="">Select State</option>
                                {states.map((state, idx) => <option key={idx} value={state}>{state}</option>)}
                            </select>    
                        </div> 
                        <button className="btn btn-primary">Search by State</button>
                    </form>
                    {props.page === 1 ? 
                        <button className="btn btn-outline-primary" onClick={props.decreasePage} disabled>Previous</button> : 
                        <button className="btn btn-outline-primary" onClick={props.decreasePage}>Previous</button>}
                    {props.breweries.length < 20 ? 
                        <button className="btn btn-outline-primary" onClick={props.increasePage} disabled>Next</button> : 
                        <button className="btn btn-outline-primary" onClick={props.increasePage}>Next</button>} 
                </div>

    )
}

export default SearchForm;