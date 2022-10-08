import { useSelector, useDispatch } from "react-redux";
import ImageComponent from "../imagecomponent/imageComponent";
import axios from 'axios';
import { setImages } from "../../redux/actions/imageActions";
import { useEffect, useState } from "react";
import SearchBoxBuilder from "../common/searchboxbuilder/searchBoxBuilder";
import ButtonBuilder from "../common/buttonbuilder/buttonBuilder";
import './imagelisting.scss';


const Imagelisting = () => {
    
    const [query, setQuery] = useState("");
    const [btnDisable, setBtnDisable] = useState(true);
    const [loadFlag, setLoadFlag] = useState(false);
    const dispatch = useDispatch();
    const imageList = useSelector(state=>state.allImages.images);

   // console.log(`check list of image ${imageList}`)
    // to get all images from server 
    const fetchImages = async() => {
        const secretKey = process.env.REACT_APP_API_SECRETKEY;

       const response =  await axios
       .get(`https://pixabay.com/api/?key=${secretKey}&q=${query}&image_type=photo`)
       .catch((err)=>{
        console.log(`error while fetching ${err}`)
       })

       if(response.data === null) {
        setLoadFlag(true);
       }
       else {
        setLoadFlag(false);
          // dispatch the action to update the store
       dispatch(setImages(response.data.hits));
       }
     
    }

    // image search text box handler

    const onHandleSearchTextChange = (event) => {
        const val = event.target.value;
        console.log(`on change text value ====> ${event.target.value}`)
        val !== null && val !== undefined && setBtnDisable(false);
        setQuery(val);
        query !== null && query !== undefined && fetchImages();
    }

    // image search handlar
    const onHandleSearchBtnClick = () => {
       console.log(`inside handle click===>`);
       query !== null && query !== undefined && fetchImages();
    }

    return(
       <div className="ui container image-list">
        <div className="sub-container mt-5">
        <div className="searchbox">
            <SearchBoxBuilder 
                value = {query} 
                handleOnChange={onHandleSearchTextChange}
            />
        </div>
        <div className="btn-builder">
            <ButtonBuilder 
                Disabled = {btnDisable} 
                handleBtnClick = {onHandleSearchBtnClick}
                btnColor = "btn btn-dark"
            />
            </div>
        </div>
   
   <div className="image-grid mt-4">
   {loadFlag ? <h1 style={{textAlign:'center'}}>Loading...</h1> : <ImageComponent/>}
   </div>
 
       </div>
    )
}

export default Imagelisting;