import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


const News=(props)=>{

const [articles, setArticles] = useState([])
const [loading , setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults , setTotalResults] = useState(0)  
  const capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
 
  
 const updateNews = async()=>{
props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
   setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    console.log(parsedData);  
    props.setProgress(100)   
  }

useEffect(() =>{
  updateNews();
}, [props.category, props.country])

//  const handlePreviousClick= async()=>{
//    setPage(page - 1)
//    updateNews();
//     }
//  const handleNextClick = async() => {
//     setPage(page+1)
//    updateNews()
//    }

 const fetchMoreData = async() => {
   setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page==${page}&pageSize=${props.pageSize}`;
  //  this.setState({loading:true});
   setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
  };

 
    console.log("render check")
    return (
      <>
        <h1 className='text-center' style={{margin:"40px 0px" , marginTop:"90px"}}>NewsMonkey - Top  {capitalizeFirstLetter(props.category)}  Headlines </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
      <div className='row'>
      { articles.map((element)=>{
        return <div className='col-md-4' key={element.url}>
          <Newsitem title={element.title ? element.title: ""} description={element.description ? element.description: ""}
            imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} 
             source={element.source.name}/>

        </div>
       
      })}
      </div>
      </div>
          
          </InfiniteScroll>
     
      
    </>
    )
  }


 News.defaultProps = {
  country: "us",
  // pageSize: 8 ,
  category: 'general',
}

  News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
