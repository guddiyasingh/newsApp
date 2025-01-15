import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading:false,
      page:1
    }

  }

  async componentDidMount(){
   console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a472465cf0ab48bd9c896feb59d00e82"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
      <h2>NewsMonky - Top Headlines</h2> 
      <div className='row'>
      {this.state.articles.map((element)=>{
        return <div className='col-md-4'>
          <Newsitem key={element.url}title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
            imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
  })}
   </div>
   <div className='conatainer'>
          <button type="button" class="btn btn-dark">Previous</button>
          <button type="button" class="btn btn-dark">Next</button>

   </div>
    </div>
    )
  }
}

export default News
