import { LeftBar, Table } from "../../components";
import Profile from "./Profile";
export default function ProfilePage(){
    return(
        <div className="flex gap-12 max-w-screen overflow-x-hidden overflow-y-hidden ">
        {
            <LeftBar />
        }
        <div className="pb-6">
          <div className=" md:ml-64   px-6">
                <Profile/>
          </div>
        </div>
      </div>
    )
}