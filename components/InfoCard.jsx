import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"


const InfoCard = ({img, location, title, description, star, price, total}) => {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover"  className="rounded-2xl"/>
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p className="dark:text-gray-300">{location}</p>
                    <HeartIcon className="h-7 cursor-pointer text-red-400" />
                </div>
                <h4 className="text-xl dark:text-gray-300">{title}</h4>

                <div className="border-b w-10 pt-2"/>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">{description}</p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center dark:text-gray-300"><StarIcon className="h-5 text-red-400"/>{star }</p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2 dark:text-gray-300">{price}</p>
                        <p className="text-right font-extralight dark:text-gray-400">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
