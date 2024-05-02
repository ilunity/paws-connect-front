import React from 'react';
import { AnimalsListProps } from './AnimalsList.types';
import { useStyles } from './AnimalsList.styles';
import { Col, Row, Typography } from 'antd';
import { AnimalCard } from '@entities/animal';

const { Paragraph } = Typography;

export const AnimalsList: React.FC<AnimalsListProps> = ({ animals }) => {
  const { styles } = useStyles();

  return (
    <Row gutter={ [8,8] }>
      { animals.map((animal) => (
        <Col
          key={ animal.id }
          xs={ { flex: '100%' } }
          md={ { flex: '50%' } }
          lg={ { flex: '33%'} }
          xl={ { flex: '25%' } }
        >
          <AnimalCard animal={ animal } />
        </Col>
      )) }
    </Row>
  );
};
