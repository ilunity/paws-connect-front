import React from 'react';
import { SheltersListProps } from './SheltersList.types';
import { Col, Row } from 'antd';
import { ShelterCard } from '@entities/shelter';

export const SheltersList: React.FC<SheltersListProps> = ({ shelters, onClick }) => {
  return (
    <Row gutter={ [8, 8] }>
      { shelters.map(shelter => (
        <Col
          key={ shelter.id }
          xl={ 8 }
          lg={ 12 }
          xs={ 24 }
        >
          <ShelterCard
            key={ shelter.id }
            shelter={ shelter }
            onClick={ onClick }
          />
        </Col>
      )) }
    </Row>
  );
};
