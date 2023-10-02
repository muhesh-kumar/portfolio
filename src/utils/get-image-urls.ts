import { LOCAL_IMAGES_DIR } from '@constants/index';

export default (imageName: string): string =>
  imageName === '' ? '' : LOCAL_IMAGES_DIR + imageName;
