import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  articles =[
    {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "David Pierce",
    "title": "The best actually real stuff at CES 2025",
    "description": "From the Frame Pro and the StanbyME 2 to the Wonder Petal and Roam SodaTop, here’s the best stuff we saw in Vegas this year.",
    "url": "https://www.theverge.com/2025/1/12/24340864/ces-2025-tvs-nvidia-ai-gaming-installer",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/8k7JPu5PSipDoLQ5SJhtTvOxiYQ=/0x0:2040x1362/1200x628/filters:focal(1020x681:1021x682)/cdn.vox-cdn.com/uploads/chorus_asset/file/25825968/Installer_66.png",
    "publishedAt": "2025-01-12T13:00:00Z",
    "content": "The best actually real stuff at CES 2025\r\nThe best actually real stuff at CES 2025\r\n / From overly fancy TVs to tiny AI supercomputers, heres the best stuff I saw in Vegas.\r\nByDavid Pierce, editor-at… [+12167 chars]"
        },

{

  "source": {
    "id": null,
      "name": "Android Central"
  },
  "author": "derrek.lee@futurenet.com (Derrek Lee)",
    "title": "I love the Motorola Razr and Galaxy Z Flip 6, but there's still room to make flip phones better",
      "description": "Android OEMs are improving flip phones every year, but how can they get better going forward?",
        "url": "https://www.androidcentral.com/phones/how-android-oems-can-improve-flip-phones",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/WsYqAzjELbWFDVbmJRLf4N-1200-80.jpg",
            "publishedAt": "2025-01-12T07:00:00Z",
              "content": "Flip phones like the Motorola Razr Plus 2024 and Galaxy Z Flip 6 have more or less proven that the form factor isn't just a gimmick and that these phones are here to stay. Unlike their larger foldabl… [+11810 chars]"
},

{

  "source": {
    "id": "business-insider",
      "name": "Business Insider"
  },
  "author": "John Paul Titlow",
    "title": "Take it from me: never, ever get a new phone number",
      "description": "I switched phone plans. Suddenly I was locked out of everything from Amazon to unemployment benefits.",
        "url": "https://www.businessinsider.com/never-get-a-new-phone-number-multi-factor-authentication-security-2025-1",
          "urlToImage": "https://i.insider.com/677427569de00e389eb40073?width=1200&format=jpeg",
            "publishedAt": "2025-01-12T09:02:02Z",
              "content": "Getty Images; Chelsea Jia Feng/BI\r\nTwo years ago, I got a new phone number. In the eyes of my social media and ride-hailing apps, Amazon, my bank, and the state of Pennsylvania, that effectively mean… [+11802 chars]"
},

{

  "source": {
    "id": null,
      "name": "Hackaday"
  },
  "author": "Maya Posch",
    "title": "Bad Apple but it’s 6,500 Regex Searches in Vim",
      "description": "In the world of showing off, there is alongside ‘Does it play Doom?’ that other classic of ‘Does it play Bad Apple?’. Whereas either would be quaint in the context …read more",
        "url": "https://hackaday.com/2025/01/11/bad-apple-but-its-6500-regex-searches-in-vim/",
          "urlToImage": "https://hackaday.com/wp-content/uploads/2025/01/vim_bad_apple_nolen_royalty.jpg",
            "publishedAt": "2025-01-12T06:00:00Z",
              "content": "In the world of showing off, there is alongside ‘Does it play Doom?’ that other classic of ‘Does it play Bad Apple?’. Whereas either would be quaint in the context of the Vim editor, this didn’t dete… [+1102 chars]"
},

{

  "source": {
    "id": null,
      "name": "Xataka.com"
  },
  "author": "Fran León",
    "title": "Las Rebajas de El Corte Inglés dejan MacBooks, móviles Samsung, smart TVs y más a precios nunca vistos",
      "description": "Las Rebajas ya han dado comienzo en El Corte Inglés (concretamente, el pasado 7 de enero). Antes, durante este período, se podía conseguir la mejor moda a precios más asequibles que el resto del año, aunque ahora, la tecnología también tiene buenos descuentos…",
        "url": "https://www.xataka.com/seleccion/rebajas-corte-ingles-dejan-macbooks-moviles-samsung-smart-tvs-a-precios-nunca-vistos",
          "urlToImage": "https://i.blogs.es/abe752/tarragona/840_560.jpeg",
            "publishedAt": "2025-01-12T09:30:37Z",
              "content": "Las Rebajas ya han dado comienzo en El Corte Inglés (concretamente, el pasado 7 de enero). Antes, durante este período, se podía conseguir la mejor moda a precios más asequibles que el resto del año,… [+4132 chars]"
},

{

  "source": {
    "id": "fox-news",
      "name": "Fox News"
  },
  "author": "Kurt Knutsson, CyberGuy Report",
    "title": "Best cutting-edge health and fitness tech from CES 2025",
      "description": "CES 2025 showcased everything from artificial intelligence-powered sleep aids to smart ear-cleaning devices. Kurt the CyberGuy has the details.",
        "url": "https://www.foxnews.com/tech/best-cutting-edge-health-fitness-tech-from-ces-2025",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/01/10-best-cutting-edge-health-and-fitness-tech-from-ces-2025.jpg",
            "publishedAt": "2025-01-12T13:00:32Z",
              "content": "CES 2025 has once again showcased a remarkable array of health and fitness technology that promises to transform our well-being. \r\nFrom artificial intelligence-powered sleep aids to smart ear-cleanin… [+17477 chars]"
},


  ]
  constructor() {
    super();
    console.log('Hello I am a construcor');
    this.state = {
      articles: this.articles,
      loading:false 
    }
  }
  render() {
    return (
      <div className='container my-3'>
      <h2>NewsMonky - Top Headlines</h2> 
      <div className='row'>
      {this.state.articles.map((element)=>{
        return <div className='col-md-4'>
          <Newsitem key={element.url}title="myTitle" description='mydesc'
            imageUrl="https://cdn.vox-cdn.com/thumbor/8k7JPu5PSipDoLQ5SJhtTvOxiYQ=/0x0:2040x1362/1200x628/filters:focal(1020x681:1021x682)/cdn.vox-cdn.com/uploads/chorus_asset/file/25825968/Installer_66.png"
            newsUrl="todo" />
        </div>
  })}
   </div>
    </div>
    )
  }
}

export default News
