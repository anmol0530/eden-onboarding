export const Workspace = ({ next }) => {
    const handleClick = (e) => {
        e.preventDefault();
        next();
    }
    return (
        <div className="welcome">
            <hgroup className="">
                <h1 className="">Let's set up a home for all your work</h1>
                <h4 className="">You can always create another workspace later.</h4>
            </hgroup>
            <form action="" className="">
                <label htmlFor="" className="">Workspace Name</label>
                <input type="text" className="" placeholder="Eden" />
                <label htmlFor="" className="" >Workspace URL <span>(optional)</span></label>
                <div className="url-input">
                    <input type="text" className="url-head" placeholder="www.eden.com/" disabled />
                    <input type="text" className="url-main" placeholder="Example" />
                </div>
                <button className="" onClick={handleClick}>Create Workspace</button>
            </form>
        </div>
    )
}