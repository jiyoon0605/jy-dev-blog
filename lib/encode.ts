import { encode } from 'blurhash';

const loadImage = async (src: string) =>
  new Promise((resolve, reject) => {
    const img = new HTMLImageElement();
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src;
  });

const getImageData = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  context?.drawImage(image, 0, 0);
  return context?.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = async (imageUrl: string) => {
  const image = await loadImage(imageUrl);
  const imageData = getImageData(image as HTMLImageElement);
  return encode(imageData!.data, imageData!.width, imageData!.height, 4, 4);
};

export default encodeImageToBlurhash;