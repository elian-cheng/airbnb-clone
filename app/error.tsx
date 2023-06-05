'use client';

import { useEffect } from 'react';

import EmptyState from '@/components/UI/EmptyState';

interface IErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<IErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Oops" subtitle="Something went wrong!" />;
};

export default ErrorState;
