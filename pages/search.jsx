import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import  format  from "date-fns/format";
import InfoCard from "../components/InfoCard";
import Slide from "react-reveal"

const Search = ({searchResults}) => {

    const router = useRouter();

    const {location, startDate, endDate, numberOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    
    return (
        <div>
            
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`}/>
            
            <Slide top>
            <main className="flex mb-10">
                <section className="flex-grow pt-14 px-6">
                    <div className="bg-white shadow-lg rounded-lg pt-4 pl-4 pb-1">
                    <p className="text-sm">300+ Stays - {range} - for {numberOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    </div>

                    <div className="hidden lg:inline-flex mb-5 mt-3 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    
                    <div className="flex flex-col">
                    {searchResults.map(({img, location, title, description, star, price, total}) => (
                        <InfoCard 
                          key={img}
                          img={img}
                          location={location}
                          title={title}
                          description={description}
                          star={star}
                          price={price}
                          total={total}
                        />
                    ))}
                    </div>
                   
                </section>
            </main>
            </Slide>
            <Slide left>
                <Footer />
            </Slide>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
    
    return {
        props: {
            searchResults
        }
    }
}
