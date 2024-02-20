import React from 'react';

const NewsItem = ({ title, description, src, url }) => {
  return (



    
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2 col-lg-4 col-md-4 m-auto" style={{
        maxWidth: "340px",
    }}>
      <img src={src} className="card-img-top" style={{ height: "200px" }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Following along live as the UFC featherweight title is on the line in Anaheim."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
