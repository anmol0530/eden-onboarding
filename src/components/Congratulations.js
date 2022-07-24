import tick from "../images/tick.png";

export const Congratulations = ({next}) => {
    const handleClick =(e) => {
        e.preventDefault();
    }
    return (
        <div className="welcome">
            <div className="congrats">
                <img src={tick} alt="" className="tick" />
            </div>
            <hgroup className="">
                <h1 className="">Congratulations, Eren!</h1>
                <h4 className="">You have completed onboarding, you can start using Eden!</h4>
            </hgroup>
            <form action="" className="">
                <button className="" onClick={handleClick}>Launch Eden</button>
            </form>
        </div>
    )
}