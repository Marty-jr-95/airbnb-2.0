import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 shadow-md bg-white grid grid-cols-3 p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                 layout="fill"
                 src="http://links.papareact.com/qd3" 
                 objectFit="contain"
                 objectPosition="left"
                 />
                 
            </div>

            <div className="flex md:border-2 md:shadow-sm rounded-full py-2 c">
                <input className="flex-grow bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search"/>
                <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>

            </div>

        </header>
    )
}

export default Header
