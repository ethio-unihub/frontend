import StringAvatarGenerator from "../../components/utils/StringAvatarGenerator"
import backDrop from "../CommunityPage/profile.jpg"
import PostNavigater from "./PostNavigater"
import { useState } from "react"
import { FeedCard } from "../../components"
import EditPage from "./EditPage"
export default function Profile(){
    const [userName, setUserName] = useState("Not defined")
    const [userEmail, setUserEmail] = useState("Notdefined")
    const [userBio, setUserBio] = useState(null);
    const [userUni, setUserUni] = useState("university not defined")
    return(
        <div className="h-full">
            <div className="w-full relative">
                <img src = {backDrop} className=" w-[100rem] h-[18rem] object-cover z-[-1]"></img>
                <div className="absolute top-[0%] md:top-[60%] z-0 md:inline-flex items-center justify-between w-[100%] pl-[4rem] pr-[4rem] pt-[2.5rem] md:pt-[1rem] md:pb-[1rem] pb-[2.5rem] bg-[rgba(255,255,255,0.521)] dark:bg-[rgba(0,0,0,0.521)] backdrop-blur-[5px]">
                    <StringAvatarGenerator name={userName} image={backDrop}/>
                    <div className="pt-5">
                        <h1 className="dark:text-white">{userName}</h1>
                        
                        <h2 className="dark:text-white inline-flex gap-5"><span>{userEmail}</span> <span className="text-blue">{userUni}</span></h2>
                    </div>
                </div>
            </div>
            
            <div className="w-full">
                    {(userBio)?(<p className="dark:bg-gray-900 dark:text-white mt-[5rem] rounded-[1rem] border-[rgb(146,146,146,0.4)] dark:border-[rgb(146,146,146,0)] border-[0.0000001rem] p-[1rem]">{userBio}</p>):(<p className="mb-[5rem]"></p>)}
            </div>
            <EditPage userBio={userBio} userUni={userUni} userName={userName} userEmail={userEmail} setUserBio={setUserBio} setUserUni={setUserUni} setUserEmail={setUserEmail} setUserName={setUserName}/>
            
            <PostNavigater/>
        </div>
    )
}