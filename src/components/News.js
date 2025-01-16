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
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a472465cf0ab48bd9c896feb59d00e82&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalArticles: parsedData.totalResults})
  }
 handlePreviousClick= async()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a472465cf0ab48bd9c896feb59d00e82&page=
    ${this.state.page -1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
   this.setState({
    page: this.state.page -1,
    articles: parsedData.articles
   })
   }
  handleNextClick = async() => {
   console.log("Next");
   if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

   }
   else  {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a472465cf0ab48bd9c896feb59d00e82&page=
    ${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })}
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
        <div className='conatainer d-flex justify-content-between'>
 
          <button disable={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

   </div>
    </div>
    )
  }
}

export default News
