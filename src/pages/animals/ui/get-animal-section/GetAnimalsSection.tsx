import React from 'react';
import { GetAnimalsSectionProps } from './GetAnimalsSection.types';
import { useStyles } from './GetAnimalsSection.styles';
import { Section } from '@shared/ui';
import { GetAnimalsForm } from '@features/get-animals';

export const GetAnimalsSection: React.FC<GetAnimalsSectionProps> = () => {
  const { styles } = useStyles();

  return (
    <div className={ styles.wrapper }>
      <Section title={ 'Параметры питомца' } level={ 3 }>
        <GetAnimalsForm />
      </Section>
    </div>
  );
};
