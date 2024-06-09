import { View, Animated, Easing, StyleSheet } from 'react-native';
import React from 'react';

const dotAnimations = Array.from({ length: 30 }).map(
  () => new Animated.Value(1)
);

const AnimatedSoundBars = ({ barColor = '#2EB5FA' }) => {
  const loopAnimation = (node) => {
    const keyframes = [1.3, 0.3, 1, 0.7, 1, 0.9, 1];

    const loop = Animated.sequence(
      keyframes.map((toValue) =>
        Animated.timing(node, {
          toValue,
          easing: Easing.ease,
          useNativeDriver: true,
        })
      )
    );

    return loop;
  };

  const loadAnimation = (nodes) =>
    Animated.loop(Animated.stagger(20, nodes.map(loopAnimation))).start();

  React.useEffect(() => {
    loadAnimation(dotAnimations);
  }, []);

  return (
    <View style={styles.row}>
      {dotAnimations.map((animation, index) => {
        return (
          <Animated.View
            key={`${index}`}
            style={[
              styles.bar,
              { backgroundColor: barColor },
              {
                transform: [
                  {
                    scale: animation,
                  },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bar: {
    height: 80,
    width: 4,
    borderRadius: 50,
    marginHorizontal: 2,
  },
});

export default AnimatedSoundBars;