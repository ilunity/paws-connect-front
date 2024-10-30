import React from 'react';
import { QueryParamsPaginationProps } from './QueryParamsPagination.types';
import { useSearchParamsObject, useUpdateSearchParams } from '@shared/utils';
import { Pagination } from 'antd';


export const QueryParamsPagination: React.FC<QueryParamsPaginationProps> = ({ elementsCount }) => {
  const updateSearchParams = useUpdateSearchParams();
  const params = useSearchParamsObject();
  const size = +params?.size || 10;
  const page = +params?.page || 1;

  const handleChange = (page: number, size: number) => {
    updateSearchParams({ page: `${page}`, size: `${size}` });
  };

  return (
    <Pagination
      responsive
      align={ 'center' }
      showSizeChanger
      onChange={ handleChange }
      pageSize={ size }
      current={ page }
      total={ elementsCount }
    />
  );
};
