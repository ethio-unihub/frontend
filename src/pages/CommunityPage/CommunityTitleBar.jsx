import StringAvatarGenerator from "../../components/utils/StringAvatarGenerator"
export default function CommunityTitleBar({CommunityTitle, photo, memberNumber, postNumber}){
    return(
        <div className="inline-flex items-center md:gap-9 gap-5">
            <StringAvatarGenerator name={CommunityTitle} image={photo}/>
            <div>
                <p className="text-black dark:text-white text-[2rem]">{CommunityTitle}</p>
                <div className="inline-flex gap-5">
                    <span className="text-black dark:text-white">{memberNumber} students </span>
                    <span className="text-black dark:text-white">{postNumber} posts</span>
                </div>
            </div>
        </div>
    )
}