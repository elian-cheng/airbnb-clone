import EmptyState from '@/components/UI/EmptyState';

import getCurrentUser from '@/helpers/getCurrentUser';
import getFavoriteListings from '@/helpers/getFavoriteListings';

import FavoritesClient from './FavoritesClient';

const FavoritesPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState title="No favorites found" subtitle="Looks like you have no favorite listings." />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default FavoritesPage;
