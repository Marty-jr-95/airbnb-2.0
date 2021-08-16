import Image from "next/image"

const BigCard = ({img, title, description}) => {
    return (
        <div>
            <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
             <Image src={img} layout="fill" className="rounded-xl"/>
            </div>
            <h4 className="text-2xl mt-3 dark:text-gray-300">{title}</h4>
            <p className="dark:text-gray-300">{description}</p>
            
        </div>
        </div>
    )
}

export default BigCard
