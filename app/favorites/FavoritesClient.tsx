'use client';
import { SafeListing, SafeUser } from '@/types';

import Heading from '@/components/UI/Heading';
import Container from '@/components/UI/Container';
import ListingCard from '@/components/Listings/ListingCard';

interface IFavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<IFavoritesClientProps> = ({ listings, currentUser }) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you added as favorite." />
      <div
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: SafeListing) => (
          <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
