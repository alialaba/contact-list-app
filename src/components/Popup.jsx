import Button from "./Button";

export default function Popup (){
    return (
        <div className="pop-up">
            <h3>Are sure you want to delete the contact ?</h3>
            <div className="popup-btns">
                <Button text="Yes"/>
                <Button text="No" />
            </div>
        </div>
    );
}