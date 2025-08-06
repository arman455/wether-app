import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function BackIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 16 9"
      fill="none"
      {...props}
    >
      <Path
        d="M.646 4.146a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4.5l2.829-2.828a.5.5 0 10-.708-.708L.646 4.146zm14.99.354V4H1v1h14.637v-.5z"
        fill="#0D133F"
      />
    </Svg>
  )
}

export default BackIcon
