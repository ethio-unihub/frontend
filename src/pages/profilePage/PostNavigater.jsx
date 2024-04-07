import { FeedCard } from "../../components"
import { useState, useEffect } from "react"

export default function Navigater(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setPosts([
          { values: 1 },
          { values: 2 },
          { values: 3 },
        ]);
      }, []);
    return(
        <div>
        <div class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Posts</span>
                </span>
            </div>
        </div>
        {
            posts.map((post, index)=>(<FeedCard key={index} />))
        }
        </div>
    )
}