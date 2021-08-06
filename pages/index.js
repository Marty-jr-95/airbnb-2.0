import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
import Slide from 'react-reveal/Slide';
import Tilt from 'react-tilt'
import BigCard from '../components/BigCard';
export default function Home({exploreData, cardsData, img, title, description}) {
  return (
    <div className="bg-transparent">
      <Head>
        <title>Marty's Airbnb</title>
        <link rel="icon" href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" />
      </Head>
      
      <Header />
      <Slide left>
      <Banner />
      </Slide>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        
        <section className="pt-6">
        <Slide top>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({img, distance, location}) =>
            <SmallCard 
              key={img}
              img={img}
              distance={distance}
              location={location}
            />  
          )}
            </div>
            </Slide>

            <Tilt options={{ max : 10}}>
        <LargeCard img="https://links.papareact.com/0fm" title="Not sure where to go? Perfect" description="No worries we got you!" buttonText="I'm flexible"/>
        </Tilt>  
        </section>

        
        <section>
          <h2 className="text-4xl font-semibold py-6">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
          {cardsData?.map(({img, title}) => (
            <MediumCard key={img} img={img} title={title}/>
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-6">Discover things to do</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
          <BigCard img="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480" title="Featured collection" description="Travel from home with Online Experiences."/>
          <BigCard img="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480" title="Online Experiences" description ="Live, interactive activities led by Hosts."/>
          <BigCard img="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480" title="Experiences" description ="Find unforgettable activities near you."/>
          <BigCard img="https://airbnb-clone-lac.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75" title="Outdoor Activities" description ="Breathe, live & have extra fun"/>
          </div>
        </section>
        <Tilt options={{ max : 10}}>
        <LargeCard img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440" title="Try Hosting" description="Earn extra income and unlock new opportunities by sharing you space." buttonText="Get Inspired"/>
        </Tilt>
      </main>
      <Slide left>
      <Footer />
      </Slide>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
