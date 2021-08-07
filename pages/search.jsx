import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import  format  from "date-fns/format";
import InfoCard from "../components/InfoCard";
import Slide from "react-reveal"
import Head from "next/head";
import Map from "../components/Map";

const Search = ({searchResults}) => {

    const router = useRouter();

    const {location, startDate, endDate, numberOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    
    return (
        <div>
            <Head>
                <title>Your search results</title>
                <link rel="icon" href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" />
            </Head>
            
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`}/>
            
            
            <main className="flex mb-10">
            <Slide left>
                <section className="flex-grow pt-14 px-6">
                    <div className="bg-white mt-6 shadow-lg rounded-lg pt-4 pl-4 pb-1">
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
                </Slide>
                <Slide right>
                <section className="hidden xl:inline-flex xl:min-w-[600px] mt-20 bg-blend-darken">
                    <Map searchResults={searchResults} />
                </section>
                </Slide>
            </main>
            
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
