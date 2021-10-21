import React from 'react';
import {View, FlatList, Image, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BACKDROP_HEIGHT, ITEM_SIZE, width, height} from '../constants';
import styles from '../styles';

const Backdrop = ({data, scrollX}) => {
  return (
    <View style={[{height: BACKDROP_HEIGHT, width}, styles.containerBackdrop]}>
      <FlatList
        data={data}
        keyExtractor={item => item.key + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
        renderItem={({item, index}) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={[
                {
                  width: translateX,
                  height,
                },
                styles.viewAnimatedBackdrop,
              ]}>
              <Image
                source={{uri: item.backdrop}}
                style={[
                  {
                    width,
                    height: BACKDROP_HEIGHT,
                  },
                  styles.imageBackdrop,
                ]}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={[
          {
            height: BACKDROP_HEIGHT,
            width,
          },
          styles.linearGradient,
        ]}
      />
    </View>
  );
};

export default Backdrop;
