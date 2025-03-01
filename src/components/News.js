import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  // static defaultProps = {
  //   country: "us",
  //   pageSize: 8 
  // }

  // static propTypes = {
  // country:PropTypes.string,
  // pageSize: propTypes.string
  // }

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a472465cf0ab48bd9c896feb59d00e82&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalArticles: parsedData.totalResults})
  }
 handlePreviousClick= async()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=a472465cf0ab48bd9c896feb59d00e82&page=
    ${this.state.page -1}&pageSize=${this.props.pageSize}`;
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
   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/15))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a472465cf0ab48bd9c896feb59d00e82&page=
    ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false

    })}
  }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"40px 0px"}}>NewsMonky - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
      <div className='row'>
      {!this.state.loading && this.state.articles.map((element)=>{
        return <div className='col-md-4'>
          <Newsitem key={element.url}title={element.title?element.title:""} description={element.description?element.description:""}
            imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
       
      })}
          

   </div>
        <div className='conatainer d-flex justify-content-between'>
 
          <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

   </div>
    </div>
    )
  }
}

export default News
