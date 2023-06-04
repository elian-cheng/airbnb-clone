import EmptyState from '@/components/UI/EmptyState';

import getCurrentUser from '@/helpers/getCurrentUser';
import getListings from '@/helpers/getListings';

import PropertiesClient from './PropertiesClient';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return <EmptyState title="No properties found" subtitle="Looks like you have no properties." />;
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;
