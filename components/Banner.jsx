import Image from "next/image"

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://airbnb-clone-lac.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdfk5jbk5r%2Fimage%2Fupload%2Fv1628149967%2Fhero_kyjtts.jpg&w=1920&q=75" layout="fill" objectFit="cover"/>
            <div className="absolute top-16 sm:top-32 md:top-32 sm:w-[220px] md:w-[220px] lg:w-[350px] w-[200px] text-left ml-16">
                <p className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-6xl md:font-bold lg:font-extrabold font-bold ">Olympian & Paralympian Online Experience</p>
                <button className="text-gray-900 bg-white px-10 py-3 shadow-md rounded-md font-bold my-3 hover:shadow-lg active:scale-90 transition duration-150">Explore Now</button>
            </div>
        </div>
    )
}

export default Banner
