import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';

export const CreateShelterButton: React.FC = () => {
  const router = useRouter();

  const goToCreateShelter = () => {
    router.push({ pathname: `/shelters/create` });
  };

  return (
    <Button
      type={ 'primary' }
      onClick={ goToCreateShelter }
    >
      Добавить приют
    </Button>
  );
};
