import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function CloudyIcon(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 25 17"
            fill="none"
            {...props}
        >
            <Path
                d="M19.671 16.677h-16a3 3 0 01-.952-5.845 4.5 4.5 0 015.115-5.106 6.5 6.5 0 0112.825 1.05 5.002 5.002 0 01-.988 9.901z"
                fill="#fff"
            />
        </Svg>
    )
}

export default CloudyIcon
