import { useState } from "react";

export const Welcome = ({ next, name, setName, displayName, setDisplayName }) => {
    const [isEmpty, setIsEmpty] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (name === "") {
            setIsEmpty(true);
        }
        else {
            next();
        }
    }

    const handleChange = (e) => {
        if (e.target.value === "") {
            setIsEmpty(true);
        }
        else {
            setIsEmpty(false);
        }
        setName(e.target.value);
    }

    return (
        <div className="welcome">
            <hgroup className="">
                <h1 className="">Welcome! First things first...</h1>
                <h4 className="">You can always change them later.</h4>
            </hgroup>
            <form action="" className="">
                <label htmlFor="" className="">Full Name</label>
                <input type="text" className={isEmpty ? "red" : ""} value={name} onChange={handleChange} placeholder={isEmpty ? "Name is required*" : "Steve Jobs"} />
                <label htmlFor="" className="" >Display Name</label>
                <input type="text" className="" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Steve" />
                <button className="" onClick={handleClick}>Create Workspace</button>
            </form>
        </div>
    )
}