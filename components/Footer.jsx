const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 space-10 px-32 py-14 dark:bg-gray-200 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs sm:text-sm md:text-md text-gray-800 ">
                <h5 className="font-bold mt-5">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
                
            </div>

            <div className="space-y-4 text-xs sm:text-sm md:text-md text-gray-800 ">
                <h5 className="font-bold mt-5">COMMUNITY</h5>
                <p>Accessibilty</p>
                <p>Services</p>
                <p>Gift Cards</p>
                <p>Airbnb Associates</p>
                <p>Frontline stays</p>
                
            </div>
            <div className="space-y-4 text-xs sm:text-sm md:text-md text-gray-800 ">
                <h5 className="font-bold mt-5">HOST</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host Experience</p>
                <p>Responsible Host</p>
                <p>Community Center</p>
               
            </div>
            <div className="space-y-4 text-xs sm:text-sm md:text-md text-gray-800 ">
                <h5 className="font-bold mt-5">SUPPORT</h5>
                <p>Cancellation Options</p>
                <p>Neighborhood Support</p>
                <p>Help Center</p>
                <p>Trust & Safety</p>
            </div>

            <div className="border-b-2 mt-11 flex md:flex-row dark:border-b-gray-300 md:col-span-4 md:grid-cols-4"></div>
            <div className="flex flex-col md:flex-row md:col-span-4 sm:items-center w-full md:justify-between mt-4">
                <p className="text-sm md:text-md">© 2021 Airbnb clone!</p>
                <p className="text-sm md:text-md">Made with 💗 by Marty Muhanga</p>
                
            </div>
        </div>
    )
}

export default Footer
