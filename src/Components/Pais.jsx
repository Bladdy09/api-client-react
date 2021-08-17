import { Component } from "react";




export default class Pais extends Component{

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(event.target.elements["paiselect"].value)
        
    
    }
    
    render(){
        return(
            <form className="d-flex" onSubmit = {this.handleFormSubmit}>
                <div>
                    <select id="k" name="paiselect" class="form-select" aria-label="Default select example">
                        <option value>Seleccione el pais</option>
                        <option value="ae">AE</option>
                        <option value="ar">AR</option>
                        <option value="at">AT</option>
                        <option value="au">AU</option>
                        <option value="be">BE</option>
                        <option value="bg">BG</option>
                        <option value="br">BR</option>
                        <option value="ca">CA</option>
                        <option value="ch">CH</option>
                        <option value="cn">CN</option>
                        <option value="co">CO</option>
                        <option value="cu">CU</option>
                        <option value="cz">CZ</option>
                        <option value="de">DE</option>
                        <option value="eg">EG</option>
                        <option value="fr">FR</option>
                        <option value="gb">GB</option>
                        <option value="gr">GR</option>
                        <option value="hk">HK</option>
                        <option value="hu">HU</option>
                        <option value="id">ID</option>
                        <option value="ie">IE</option>
                        <option value="il">IL</option>
                        <option value="in">IN</option>
                        <option value="it">IT</option>
                        <option value="jp">JP</option>
                        <option value="kr">KR</option>
                        <option value="lt">LT</option>
                        <option value="lv">LV</option>
                        <option value="ma">MA</option>
                        <option value="mx">MX</option>
                        <option value="my">MY</option>
                        <option value="ng">NG</option>
                        <option value="nl">NL</option>
                        <option value="no">NO</option>
                        <option value="nz">NZ</option>
                        <option value="ph">PH</option>
                        <option value="pl">PL</option>
                        <option value="pt">PT</option>
                        <option value="ro">RO</option>
                        <option value="rs">RS</option>
                        <option value="ru">RU</option>
                        <option value="sa">SA</option>
                        <option value="se">SE</option>
                        <option value="sg">SG</option>
                        <option value="si">SI</option>
                        <option value="sk">SK</option>
                        <option value="th">TH</option>
                        <option value="tr">TR</option>
                        <option value="tw">TW</option>
                        <option value="ua">UA</option>
                        <option value="us">US</option>
                        <option value="ve">VE</option>
                        <option value="za">ZA</option>  
                    </select>
                </div>
                <div className="d-grid gap-2 ms-3" style={{width:"60px"}}>
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div> 
            </form> 
            
            
        )
    }
        
}