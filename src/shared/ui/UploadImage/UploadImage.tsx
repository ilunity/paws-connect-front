import React, { useState } from 'react';
import { UploadImageProps } from './UploadImage.types';
import { useStyles } from './UploadImage.styles';
import { GetProp, message, Upload, UploadProps } from 'antd';
import { Base64 } from '@shared/utils';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const beforeUpload = (file: FileType, maxSize: number) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Вы можете загружать только JPG/PNG файлы!');
  }
  const isLt2M = file.size / 1024 / 1024 < maxSize;
  if (!isLt2M) {
    message.error(`Изображение должно быть меньше ${maxSize}МБ!`);
  }
  return isJpgOrPng && isLt2M;
};

const stubRequest: UploadProps['customRequest'] = ({ onSuccess }) => {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onSuccess('ok');
  }, 0);
};

export const UploadImage: React.FC<UploadImageProps> = (
  {
    onChange,
    maxMBSize = 2,
  },
) => {

  const { styles } = useStyles();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      Base64.getFromUploadFile(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
        onChange?.(url);
      });
    }
  };

  const uploadButton = (
    <button className={ styles.uploadButton } type="button">
      { loading ? <LoadingOutlined /> : <PlusOutlined /> }
      <div className={ styles.uploadButtonText }>Загрузить</div>
    </button>
  );

  return (
    <Upload
      name="upload-image"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={ false }
      beforeUpload={ (file) => beforeUpload(file, maxMBSize) }
      onChange={ handleChange }
      customRequest={ stubRequest }
    >
      { imageUrl
        ? (
          <img
            className={ styles.img }
            src={ imageUrl }
            alt="Загруженное изображение"
          />
        )
        : uploadButton
      }
    </Upload>
  );
};
