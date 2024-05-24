import React from 'react';
import { SlotsPickerHeaderProps } from './SlotsPickerHeader.types';
import { useStyles } from './SlotsPickerHeader.styles';
import { Button, Flex, Space, Typography } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';

const { Text } = Typography;

export const SlotsPickerHeader: React.FC<SlotsPickerHeaderProps> = observer(({ currentWeek }) => {
  const { styles } = useStyles();

  return (
    <Flex className={ styles.container }>
      <Text strong>
        { currentWeek.getInterval().toLocaleString({ month: 'long', day: 'numeric' }, { locale: 'ru' }) }
      </Text>
      <Space.Compact>
        <Button
          icon={ <ArrowLeftOutlined /> }
          onClick={ () => currentWeek.prev() }
          disabled={ currentWeek.isFirst() }
        />
        <Button
          icon={ <ArrowRightOutlined /> }
          onClick={ () => currentWeek.next() }
          disabled={ currentWeek.isLast() }
        />
      </Space.Compact>
    </Flex>
  );
});
