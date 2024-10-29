import React from 'react';
import { GetAnimalsSectionProps } from './GetAnimalsSection.types';
import { useStyles } from './GetAnimalsSection.styles';
import { Section } from '@shared/ui';
import { GetAnimalsForm } from '@features/get-animals';
import { Modal } from 'antd';

export const GetAnimalsSection: React.FC<GetAnimalsSectionProps> = (
  {
    sheltersCities,
    isModalForm,
    isFormModalOpen,
    closeFormModal,
  },
) => {
  const { styles } = useStyles();

  if (isModalForm) {
    return (
      <Modal
        title={ 'Параметры поиска' }
        open={ isFormModalOpen }
        onCancel={ closeFormModal }
        footer={ null }
      >
        <GetAnimalsForm cities={ sheltersCities } afterSubmit={ closeFormModal } />
      </Modal>
    );
  }

  return (
    <div className={ styles.wrapper }>
      <Section title={ 'Параметры поиска' } level={ 3 }>
        <GetAnimalsForm cities={ sheltersCities } />
      </Section>
    </div>
  );
};
