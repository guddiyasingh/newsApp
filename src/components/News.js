import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
      <h2>NewsMonky - Top Headlines</h2> 
      <div className='row'>
      <div className='col-md-4'>
        <Newsitem title="myTitle" description='mydesc'
              imageUrl="https://cdn.vox-cdn.com/thumbor/8k7JPu5PSipDoLQ5SJhtTvOxiYQ=/0x0:2040x1362/1200x628/filters:focal(1020x681:1021x682)/cdn.vox-cdn.com/uploads/chorus_asset/file/25825968/Installer_66.png" />
     </div>
          <div className='col-md-4'>
            <Newsitem title="myTitle" description='mydesc' /></div>
          <div className='col-md-4'>
            <Newsitem title="myTitle" description='mydesc' /></div>         
      </div>
      </div>
    )
  }
}

export default News
