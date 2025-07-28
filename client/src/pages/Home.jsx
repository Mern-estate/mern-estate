import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

function Section({ title, icon, link, children }) {
  return (
    <div className='animate-fade-in'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl sm:text-3xl font-semibold text-slate-800 flex items-center gap-2'>
          <span className='text-teal-600 text-2xl'>{icon}</span> {title}
        </h2>
        <Link
          className='text-sm sm:text-base text-teal-700 hover:text-teal-900 transition'
          to={link}
        >
          View all →
        </Link>
      </div>
      <div className='flex flex-wrap gap-6'>{children}</div>
    </div>
  );
}

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=6');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=6');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className='bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-b from-white to-gray-100 px-4 py-16 sm:px-6 lg:px-28 max-w-7xl mx-auto text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight'>
          Your Dream Home Awaits
        </h1>
        <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4'>
          Discover the best properties for rent and sale in Nepal. Your perfect space is just a few clicks away.
        </p>
        <Link
          to='/search'
          className='mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition'
        >
          Start Exploring
        </Link>
      </div>

      {/* How It Works Section */}
      <div className='bg-white py-12 border-y'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-2xl font-bold text-center text-slate-800 mb-8'>How It Works</h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-center'>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <div className='text-4xl text-teal-600 mb-2'>🔍</div>
              <h3 className='font-semibold text-slate-700 mb-1'>Find</h3>
              <p className='text-sm text-gray-500'>Search from a wide range of verified listings in your city.</p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <div className='text-4xl text-teal-600 mb-2'>📩</div>
              <h3 className='font-semibold text-slate-700 mb-1'>Connect</h3>
              <p className='text-sm text-gray-500'>Message the owner directly and get all the details you need.</p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <div className='text-4xl text-teal-600 mb-2'>🏠</div>
              <h3 className='font-semibold text-slate-700 mb-1'>Rent or Buy</h3>
              <p className='text-sm text-gray-500'>Seal the deal and move into your new place with ease.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className='max-w-7xl mx-auto px-4 pb-20 space-y-20'>
        {offerListings.length > 0 && (
          <Section title='Recent Offers' icon='🔥' link='/search?offer=true'>
            {offerListings.map((listing) => (
              <div key={listing._id} className='hover:scale-[1.02] transition-transform'>
                <ListingItem listing={listing} />
              </div>
            ))}
          </Section>
        )}

        {rentListings.length > 0 && (
          <Section title='Places for Rent' icon='🏠' link='/search?type=rent'>
            {rentListings.map((listing) => (
              <div key={listing._id} className='hover:scale-[1.02] transition-transform'>
                <ListingItem listing={listing} />
              </div>
            ))}
          </Section>
        )}

        {saleListings.length > 0 && (
          <Section title='Homes for Sale' icon='💰' link='/search?type=sale'>
            {saleListings.map((listing) => (
              <div key={listing._id} className='hover:scale-[1.02] transition-transform'>
                <ListingItem listing={listing} />
              </div>
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}
