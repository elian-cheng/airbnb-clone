import getCurrentUser from '@/helpers/getCurrentUser';
import getListingById from '@/helpers/getListingById';
import getReservations from '@/helpers/getReservations';

import EmptyState from '@/components/UI/EmptyState';

import ListingClient from './ListingClient';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingClient listing={listing} reservations={reservations} currentUser={currentUser} />;
};

export default ListingPage;
