import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"
import useDarkMode from "../useDarkMode";

const Header = ({placeholder}) => {
    
    const router = useRouter();

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [colorTheme, setTheme] = useDarkMode();
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

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    
    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests,
            }
        })
    }

    return (
        
        <header className={`fixed w-full dark:bg-gray-900 dark:border-b top-0 z-50 navbar grid grid-cols-3 p-5 md:px-10 ${show && "nav_stickey"}`}>
            
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                 layout="fill"
                 src="http://links.papareact.com/qd3" 
                 objectFit="contain"
                 objectPosition="left"
                 />
                 
            </div>

            <div className="flex md:border-2 md:shadow-sm rounded-full py-2">
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

                {colorTheme === "light" ? (
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}

            </div>

            {searchInput && 
                <div className="bg-white flex flex-col col-span-3 mx-auto p-5 rounded-2xl">
                   <DateRangePicker 
                        ranges={[selectionRange]}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        minDate={new Date()}
                        rangeColors={["#FD5861"]}
                        onChange={handleSelect}
                   />
                   <div className="flex items-center mb-4 border-b">
                       <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                       <UsersIcon className="h-5"/>
                       <input value={numberOfGuests} min={1} onChange={(e) => setNumberOfGuests(e.target.value)} type="number" className="w-12 pl-2 text-lg text-red-400 outline-none"/>
                   </div>

                   <div className="flex space-x-2 mb-5">
                       <button onClick={resetInput} className="flex-grow rounded-md hover:shadow-lg font-semibold bg-gray-100 text-gray-500 py-2">Cancle</button>
                       <button onClick={search} className="flex-grow bg-red-400 rounded-md text-white font-semibold hover:bg-gray-100 hover:text-red-400 py-2">Search</button>
                   </div>

                   
                </div>
            }


            

        </header>
    )
}

export default Header
