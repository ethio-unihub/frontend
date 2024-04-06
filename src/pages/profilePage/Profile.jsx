import StringAvatarGenerator from "../../components/utils/StringAvatarGenerator"
import backDrop from "../CommunityPage/profile.jpg"
import PostNavigater from "./PostNavigater"
import { useState } from "react"
import { FeedCard } from "../../components"
export default function Profile(){
    const [userName, setUserName] = useState("Not defined")
    const [userEmail, setUserEmail] = useState("Notdefined")
    const [userBio, setUserBio] = useState(null);
    const [userUni, setUserUni] = useState("university not defined")
    return(
        <div className="h-full">
            <div className="w-full relative">
                <img src = {backDrop} className=" w-[100rem] h-[18rem] object-cover z-[-1]"></img>
                <div className="absolute top-[0%] md:top-[50%] z-0 md:inline-flex items-center justify-between w-[100%] p-[4rem]">
                    <StringAvatarGenerator name={userName} image={backDrop}/>
                    <div className="pt-5">
                        <h1 className="dark:text-white">{userName}</h1>
                        <h2 className="dark:text-white"><span>{userEmail}</span> <span className="text-blue">{userUni}</span></h2>
                    </div>
                </div>
            </div>
            <div className="mb-[5rem]">
                    {(userBio)?(<p className="dark:text-white mt-[5rem]">{userBio}</p>):(<p></p>)}
            </div>
            <PostNavigater/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
        </div>
    )
}