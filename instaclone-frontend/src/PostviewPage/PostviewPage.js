import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PostviewPage.css";
import Logo from "../logo.png";

const PostviewPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result.posts);
      });
  }, []);
  return (
    <div className="postview">
      <nav>
        <div className="nav-wrapper white ">
          <Link to="/" className="brand-logo left">
            <img src={Logo} alt="insta-logo" />
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/uploadimage">
                <i className="material-icons">local_see</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {data.map((item) => {
        return (
          <div className="card home-card">
            <div className="post-header">
              <div className="author-name">
                <h5>{item.author}</h5>
              </div>
              <div className="dot-icon">
                <p>
                  <i class="material-icons">more_horiz</i>
                </p>
              </div>
            </div>
            <div className="author-location">
              <p>{item.location}</p>
            </div>

            <div className="card-image">
              <img src={item.imageUrl} />
            </div>
            <div className="card-content">
              <div className="icon-date">
                <div className="icons">
                  <i className="material-icons">favorite</i>
                  <i className="material-icons">near_me</i>
                </div>
                <div className="Date">
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="likes">
                <p>{item.likes} likes</p>
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostviewPage;
