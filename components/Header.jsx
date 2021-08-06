import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"

const Header = ({placeholder}) => {
    const router = useRouter();

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);

    const [show, setShow] = useState(false);

    const handleChange = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleChange);
        return () => window.removeEventListener('scroll', handleChange);
    }, [])

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect =(ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                numberOfGuests,
            }
        })
    }

    return (
        
        <header className={`fixed w-full top-0 z-50 navbar grid grid-cols-3 p-5 md:px-10 ${show && "nav_stickey"}`}>
            
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                 layout="fill"
                 src="http://links.papareact.com/qd3" 
                 objectFit="contain"
                 objectPosition="left"
                 />
                 
            </div>

            <div className="flex md:border-2 md:shadow-sm rounded-full py-2 c">
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-grow bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-400" type="text" placeholder={placeholder || "Start your search..."}/>
                <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer hover:animate-bounce">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer hover:animate-bounce" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>

            </div>

            {searchInput && 
                <div className = "flex flex-col col-span-3 mx-auto">
                   <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate = {new Date()}
                        rangeColors={["#FD5861"]}
                        onChange={handleSelect}
                   />
                   <div className="flex items-center mb-4 border-b">
                       <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                       <UsersIcon className="h-5"/>
                       <input value={numberOfGuests} min={1} onChange={(e) => setNumberOfGuests(e.target.value)} type="number" className="w-12 pl-2 text-lg text-red-400 outline-none"/>
                   </div>

                   <div className="flex space-x-2">
                       <button onClick={resetInput} className="flex-grow rounded-md hover:shadow-lg font-semibold bg-gray-100 text-gray-500">Cancle</button>
                       <button onClick={search} className="flex-grow bg-red-400 rounded-md text-white font-semibold hover:bg-gray-100 hover:text-red-400">Search</button>
                   </div>
                </div>
            }
            

        </header>
    )
}

export default Header
