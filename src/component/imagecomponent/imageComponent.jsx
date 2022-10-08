import { useSelector } from "react-redux";

const ImageComponent = () => {
const images = useSelector(state=> state.allImages.images);
// const {id, title} = images[0];
console.log(`image data in image component ====> ${images}`)
const renderList =  images.map((list,index) => {
    return (
        <div key = {index} className="col-lg-3 col-md-4 col-6">
        <div className="image">
            <a href = '#' className="d-block mb-4 h-100 ">
                <img className="img-fluid img-thumbnail" src = {list.webformatURL}/>
            </a>
        </div>
    </div>
    )
})
    return (
<div className="container">
    <div className="row text-center text-lg-start">
       {renderList}
    </div>
</div>
    )
}

export default ImageComponent;