import  React, {Component } from 'react'


export default class SearchBox extends Component{
    
    constructor(props){
        super(props)

        //this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }


    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(event.target.elements["search"].value)
        

    }
    
    render(){
        return(
            <form className="d-flex" onSubmit={this.handleFormSubmit}>
                <div className="flex-grow-1">
                    <input type="text" className="form-control mb-2" placeholder="news search" name="search"/>
                </div>
                <div className="d-grid gap-2 ms-3" style={{width:"120px"}}>
                    <button className="btn btn-primary  d-block" type="submit">
                        Search

                    </button>
                </div>

            </form>
        )
    }
}


/**/ 