import  React, {Component } from 'react'




export default function NewsList(props){
    return(
        <div className="mt-3">
                {/*condition rendering*/}
                {props.isLoading ? <div>Data is loading...</div>:null}
                
                <div className="row">
                {
                props.articles.map(item=>{
                    return(

                        <div className="col-md-3">
                            <div className="card mb-3">
                                <img src={item.urlToImage ??"logo de sonic.png"} class="card-img-top" alt={item.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.content}</p>
                                    <a href={item.url} target="blank" className="btn btn-primary">Show more...</a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                </div>     
            </div>
    )
}





