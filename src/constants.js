import {Platform, Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const SPACING = 5;
export const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.6;
export const DATA = [
  {
    key: '1',
    poster:
      'https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9nNDA4OTEyMDIxMDgwODAxMDYyMC5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY3NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19',
    title: 'JAMUNDI',
    description: 'Apartamento vis',
    backdrop:
      'https://surcosdepangola.com/wp-content/uploads/2021/03/IMG-20210211-WA0019-3.jpg',
  },
  {
    key: '2',
    poster:
      'https://www.constructorabolivar.com/sites/default/files/imagenes/proyectos/slider-fotos/RENDER-NUEVO.jpg',
    title: 'CANDELARIA',
    description: 'Casa vip',
    backdrop:
      'https://www.constructorabolivar.com/sites/default/files/imagenes/macroproyectos/img-mapa/ubicacion-belorizonte%20%281%29%20%281%29%20%281%29.jpg',
  },
  {
    key: '3',
    poster:
      'https://www.constructorabolivar.com/sites/default/files/imagenes/proyectos/slider-fotos/rednder3_1.jpg',
    title: 'Cali',
    description: 'Apartamento vis',
    backdrop:
      'https://www.constructorabolivar.com/sites/default/files/imagenes/proyectos/imagen-mapa/aerea-vivveroseptiembre.jpg',
  },
];
