import me from "../images/me.png";
import meBlue from "../images/me-blue.png";
import team from "../images/team.png";
import teamBlue from "../images/team-blue.png";
import { useState } from "react";

export const Plan = ({ next }) => {
    const [isTeamPlan, setIsTeamPlan] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        next();
    }
    return (
        <div className="welcome">
            <hgroup className="">
                <h1 className="">How are you planning to use Eden?</h1>
                <h4 className="">We will streamline your setup experience accordingly.</h4>
            </hgroup>
            <form action="" className="plan-form">
                <div className="plans">
                    <div className={isTeamPlan ? "" : "border-blue"} onClick={()=> setIsTeamPlan(false)}>
                        <img src={isTeamPlan ? me : meBlue } alt="person-icon" />
                        <span className="plan-name">For myself</span>
                        <span className="plan-details">Write better. Think more clearly. Stay organized.</span>
                    </div>
                    <div className={isTeamPlan ? "border-blue" : ""} onClick={()=> setIsTeamPlan(true)}>
                        <img src={isTeamPlan ? teamBlue : team } alt="team-icon" />
                        <span className="plan-name">With my team</span>
                        <span className="plan-details">Wikis, docs, tasks and projects, all in one place.</span>
                    </div>
                </div>
                <button className="" onClick={handleClick}>Create Workspace</button>
            </form>
        </div>
    )
}