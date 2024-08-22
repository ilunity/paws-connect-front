import React from 'react';
import { AnimalsListProps } from './AnimalsList.types';
import { useStyles } from './AnimalsList.styles';
import { Col, Row } from 'antd';
import { AnimalCard } from '@entities/animal';

export const AnimalsList: React.FC<AnimalsListProps> = ({ animals, onClick }) => {
  const { styles } = useStyles();

  return (
    <Row gutter={ [16, 16] }>
      { animals.map((animal) => (
        <Col
          className={ styles.column }
          key={ animal.id }
          xs={ { flex: '100%' } }
          sm={ { flex: '50%' } }
          lg={ { flex: '33%' } }
          xl={ { flex: '25%' } }
        >
          <AnimalCard animal={ animal } onClick={ onClick } />
        </Col>
      )) }
    </Row>
  );
};
