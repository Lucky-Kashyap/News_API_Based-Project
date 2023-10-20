import React from 'react'

const NewsCard = ({news}) => {
    const {author,title,description,url,urlToImage,content} = news;
  return (
    
        <div className="card" style={{width:'300px'}}>
  <img src={urlToImage} className="card-img-top" alt="news" />
  <div className="card-body">
    <h3>{author}</h3>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    {/* <p className="card-text">{content}</p> */}
    <a href={url} target="_blank" className="btn btn-primary">Go To News Section</a>
  </div>
</div>
    
  )
}

export default NewsCard;