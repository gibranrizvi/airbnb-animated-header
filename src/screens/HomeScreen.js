import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Animated from 'react-native-reanimated';

const images = [
  { id: 1, uri: require('../../assets/1.jpg') },
  { id: 2, uri: require('../../assets/2.jpg') },
  { id: 3, uri: require('../../assets/3.jpg') },
  { id: 4, uri: require('../../assets/4.jpg') }
];

const HEADER_HEIGHT = Platform.OS === 'ios' ? 70 : 70 + StatusBar.currentHeight;

const HomeScreen = () => {
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT]
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.headerView, { transform: [{ translateY: headerY }] }]}
      >
        <Text>Header</Text>
      </Animated.View>
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } }
          }
        ])}
        contentContainerStyle={styles.scrollView}
      >
        {images.map(image => (
          <View key={image.id} style={styles.imageView}>
            <Image source={image.uri} style={styles.image} />
          </View>
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    position: 'absolute',
    height: HEADER_HEIGHT,
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    zIndex: 1000,
    elevation: 1000
  },
  scrollView: {
    paddingTop: HEADER_HEIGHT - 20
  },
  imageView: { height: 400, margin: 20 },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
