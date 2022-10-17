import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PostviewPage.css";
import Logo from "../logo.png";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const navigate = useNavigate()
const url = 'https://api.cloudinary.com/v1_1/ravisharma/image/upload';
const preset = 'upload';
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const onChange = e =>{
    setImage(e.target.files[0])
  }
  const onSubmit = async ()=>{
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    try {
      const res = await axios.post(url, formData);
      // console.log(res.data)
      const imageUrl = res.data.secure_url;
      const postDataDatabase = await axios.post('/upload',{
            imageUrl:imageUrl,
            author:author,
            location:location,
            description:description
      });
      navigate('/postview')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="upload-image">
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
      <div className="content-wrapper form-content">
            <input type="file" onChange={onChange} style={{marginBottom:'10px',border:"1px solid", borderRadius:"5px",padding:'2px', width:'100%'}}/>
          <div className="author-details" style={{ display: "flex !mportant" }}>
            <input
              type="textarea"
              value={author}
              onChange= {(e)=> setAuthor(e.target.value)}
              placeholder="Author"
            />
            <input
              type="textarea"
              value={location}
              onChange={(e)=> setLocation(e.target.value)}
              placeholder="Location"
            />
          </div>
          <div className="description-input">
            <input
              type="textarea"
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
              placeholder="description"
              style={{ width: "inherit" }}
            />
          </div>
          <div className="submit-post">
            <input type="submit" onClick={onSubmit} />
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default ImageUpload;
