import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ImageSlider = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(event) => {
          setSelectedIndex(
            Math.floor(event.nativeEvent.contentOffset.x / width)
          );
        }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={[
              styles.image,
              {
                width,
                height: width * 0.5625,
              },
            ]}
          />
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              selectedIndex === index && styles.selectedDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  dotContainer: {
    position: 'absolute',
    bottom: 16,
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  selectedDot: {
    backgroundColor: 'white',
  },
});

export default ImageSlider;
