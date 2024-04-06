export default function StringAvatarGenerator({name, image}){
    let profileName;
    if(name != "Not defined") profileName = name.split(' ')[0][0]+name.split(' ')[1][0]
    else profileName = "?"
    return(
        <div>
            {image?(<img class="w-[9rem] h-[9rem] rounded-full" src={image}></img>):(<div class="inline-flex items-center justify-center p-[0rem] w-[9rem] h-[9rem] bg-gray-100 rounded-full dark:bg-gray-600"><span class="font-medium text-gray-600 dark:text-gray-300 text-[2rem]">{profileName}</span></div>)}
        </div>
    );
}