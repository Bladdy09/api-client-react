//import logo from './logo.svg';
import './App.css';
import NewsList from './Components/NewsList';
import SearchBox from './Components/SearchBox';

import React, {component} from 'react'
import axios from 'axios'
import Category from './Components/Category';
import Pais from './Components/Pais';


class App extends React.Component{

  state = {
    isLoading:true,
    articles:[],
    errorMessage:""
  }


  componentDidMount(){
    this.search(null)
  }

  handleSearBoxSearch = (value)=>{
    this.search(value)
  }

  search = (value) =>{

    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=66fddc52cbf3467bab43785456e4074c&pageSize=100"
    if(value != null){
      apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=66fddc52cbf3467bab43785456e4074c&pageSize=100&q=" + value
    }

    axios.get(apiURL)
      .then((res)=>{
        this.setState({
          articles: res.data.articles,
          isLoading: false
      
        })
    })

    .catch(err=>{
      this.setState({
        isLoading:false,
        articles:[],
        errorMessage:err.response.data.message
      })
    })

  }

  handleSearListSearch = (value)=>{
    this.selecategory(value)
  }

  selecategory = (value) =>{

    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=66fddc52cbf3467bab43785456e4074c&pageSize=100"
    if(value != null){
      apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=66fddc52cbf3467bab43785456e4074c&pageSize=100&category=" + value
    }

    axios.get(apiURL)
      .then((res)=>{
        this.setState({
          articles: res.data.articles,
          isLoading: false
      
        })
    })
  }



  handleSearPaisSearch = (value)=>{
    this.paiselect(value)
  }

  paiselect = (value) =>{

    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=66fddc52cbf3467bab43785456e4074c&pageSize=100"
    if(value != null){
      apiURL = "https://newsapi.org/v2/top-headlines?apiKey=66fddc52cbf3467bab43785456e4074c&pageSize=100&country=" + value
    }

    axios.get(apiURL)
      .then((res)=>{
        this.setState({
          articles: res.data.articles,
          isLoading: false
      
        })
    })
  }


  render(){
    return (
      <div className="App container">
        <header>
          <h1>API-CLIENTE-REACT</h1>
        </header>
        <SearchBox onSearch = {this.handleSearBoxSearch}/>
        <Category onSearch = {this.handleSearListSearch}/>
        <Pais onSearch = {this.handleSearPaisSearch}/>
        {this.state.errorMessage ? <div className="alert alert-danger mt-3">{this.state.errorMessage}</div> : null}
        <NewsList isLoading={this.state.isLoading} articles={this.state.articles}/>
      </div>
    )
  }
}



export default App;
