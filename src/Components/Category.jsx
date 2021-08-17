import { Component } from "react";




export default class Category extends Component{

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(event.target.elements["selecategory"].value)
        
    
    }
    
    render(){
        return(
            <form className="d-flex" onSubmit={this.handleFormSubmit}>
                <div>
                    <select id="k" name="selecategory" class="form-select" aria-label="Default select example">
                        <option id="8" value>Seleccione la categoria de su preferencia</option>
                        <option id="1" value="business">Business</option>
                        <option id="2" value="entertainment">Entertainment</option>
                        <option id="3" value="general">General</option>
                        <option id="4" value="health">Health</option>
                        <option id="5" value="science">Science</option>
                        <option id="6" value="sports">Sports</option>
                        <option id="7" value="technology">Technology</option>
                        
                    </select>
                </div>
                <div className="d-grid gap-2 ms-3" style={{width:"80px"}}>
                <button type="submit" class="btn btn-primary">Buscar</button>
                </div> 
            </form> 
            
            
        )
    }
        
}
//const api = axios.create({
  //  baseURL:"https://newsapi.org/v2/top-headlines?country=us&apiKey=66fddc52cbf3467bab43785456e4074c&pageSize=100" + Category()
    
//})