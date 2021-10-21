import {StyleSheet} from 'react-native';
import {ITEM_SIZE} from './constants';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '200',
  },
  textDescription: {
    fontSize: 12,
    fontWeight: '200',
    backgroundColor: '#eee',
    padding: 3,
  },
  viewAnimatedBackdrop: {
    position: 'absolute',
    overflow: 'hidden',
  },
  imageBackdrop: {
    position: 'absolute',
  },
  containerBackdrop: {
    position: 'absolute',
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
  },
  animatedApp: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 34,
  },
  animatedFlatlist: {
    alignItems: 'center',
  },
});

export default styles;
