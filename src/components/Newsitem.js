import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
   let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{left:'90',zIndex:"1"}}>
              {source}
            </span>
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
              <a rel="noreferrer" href={newsUrl}target='_blanck' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
