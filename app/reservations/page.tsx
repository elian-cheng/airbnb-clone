import EmptyState from '@/components/UI/EmptyState';

import getCurrentUser from '@/helpers/getCurrentUser';
import getReservations from '@/helpers/getReservations';

import TripsClient from './ReservationsClient';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default ReservationsPage;
