import React, {FC, memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Text} from 'react-native';

type RotateSvgComponentType = {
  content: number;
};

const RotateSvgComponent: FC<RotateSvgComponentType> = ({
  content,
  ...props
}) => (
  <Svg
    width={23}
    height={23}
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}>
    <Path
      fill="#fff"
      d="M463.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224h119.5z"
    />
    <Text
      style={{
        color: '#fff',
        fontSize: 9,
        fontWeight: '600',
        marginLeft: 9,
        marginTop: 5,
      }}>
      {content}
    </Text>
  </Svg>
);

export const MemoRotateSvgComponent = memo(RotateSvgComponent);
