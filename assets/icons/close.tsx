import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function CloseIcon(props: {
  fill: string;
  width: number;
  height: number;
}) {
  return (
    <Svg
      viewBox="0 0 15 15"
      width={props.width}
      height={props.height}
      fill="none"
    >
      <Path
        d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5"
        stroke={props.fill}
        strokeWidth={3}
      />
    </Svg>
  );
}
