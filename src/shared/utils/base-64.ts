import { GetProp, UploadProps } from 'antd';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export abstract class Base64 {
  public static getFromUploadFile(img: FileType, callback: (url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };
}
