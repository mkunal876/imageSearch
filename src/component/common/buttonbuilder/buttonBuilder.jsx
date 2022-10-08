const ButtonBuilder = ({handleBtnClick, Disabled, btnColor}) => {

    return(
    <div className=" button-container text-center">
       <button  disabled = {Disabled} onClick={handleBtnClick} className= {btnColor}>Get Photos</button>
    </div>
       
    )
}

export default ButtonBuilder;