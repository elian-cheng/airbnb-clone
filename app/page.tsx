import Container from '@/components/UI/Container';
import ListingCard from '@/components/Listings/ListingCard';
import EmptyState from '@/components/UI/EmptyState';

import getListings, { IListingsParams } from '@/helpers/getListings';
import getCurrentUser from '@/helpers/getCurrentUser';
import { SafeListing } from '@/types';
interface IHomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: IHomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className="
            pt-24
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

export default Home;
