export const Welcome = ({next}) => {
    const handleClick =(e) => {
        e.preventDefault();
        next();
    }
    return (
        <div className="welcome">
            <hgroup className="">
                <h1 className="">Welcome! First things first...</h1>
                <h4 className="">You can always change them later.</h4>
            </hgroup>
            <form action="" className="">
                <label htmlFor="" className="">Full Name</label>
                <input type="text" className="" placeholder="Steve Jobs"/>
                <label htmlFor="" className="" >Display Name</label>
                <input type="text" className="" placeholder="Steve" />
                <button className="" onClick={handleClick}>Create Workspace</button>
            </form>
        </div>
    )
}