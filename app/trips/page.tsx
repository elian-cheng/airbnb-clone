import EmptyState from '@/components/UI/EmptyState';

import getCurrentUser from '@/helpers/getCurrentUser';
import getReservations from '@/helpers/getReservations';
import TripsClient from './TripsClient';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState title="No trips found" subtitle="Looks like you have not reserved any trips." />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
