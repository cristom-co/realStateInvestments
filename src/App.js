import React from 'react';
import {StatusBar, Text, View, Image, Animated, Platform} from 'react-native';

import {SPACING, ITEM_SIZE, EMPTY_ITEM_SIZE, DATA} from './constants';
import Backdrop from './components/Backdrop';
import styles from './styles';

const App = () => {
  const scrollX = React.useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      <Backdrop data={DATA} scrollX={scrollX} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.animatedFlatlist}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          if (!item.poster) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          return (
            <View style={{width: ITEM_SIZE}}>
              <Animated.View
                style={[
                  {
                    marginHorizontal: SPACING,
                    padding: SPACING * 2,
                    transform: [{translateY}],
                  },
                  styles.animatedApp,
                ]}>
                <Image source={{uri: item.poster}} style={styles.posterImage} />
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.textDescription} numberOfLines={3}>
                  {item.description}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default App;
