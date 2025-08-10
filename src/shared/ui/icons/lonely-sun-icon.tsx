import * as React from "react"
import Svg, {
    G,
    Ellipse,
    Path,
    Mask,
    Defs,
    LinearGradient,
    Stop,
    SvgProps
} from "react-native-svg"

function LonelySunIcon(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 74 74"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_f_4126_3762)">
                <Ellipse
                    cx={36.9999}
                    cy={37.0799}
                    rx={20.0946}
                    ry={20.4965}
                    fill="#FFC701"
                    fillOpacity={0.35}
                />
            </G>
            <Path
                d="M37 18.731c10.275 0 18.633 8.5 18.633 19.02S47.275 56.774 37 56.774c-10.275 0-18.632-8.502-18.632-19.021 0-10.52 8.357-19.02 18.632-19.02z"
                fill="url(#paint0_linear_4126_3762)"
                stroke="url(#paint1_linear_4126_3762)"
                strokeWidth={1.60757}
            />
            <Mask
                id="a"
                style={{
                    maskType: "alpha"
                }}
                maskUnits="userSpaceOnUse"
                x={17}
                y={29}
                width={40}
                height={29}
            >
                <Path
                    d="M56.436 37.752c0 10.949-8.702 19.825-19.436 19.825S17.564 48.7 17.564 37.752s7.22-8.4 17.954-8.4c10.734 0 20.918-2.549 20.918 8.4z"
                    fill="url(#paint2_linear_4126_3762)"
                />
            </Mask>
            <G filter="url(#filter1_f_4126_3762)" mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.648 74.04c0 7.98-6.342 14.45-14.165 14.45l-.165-.002v.001H2.411c-7.823 0-14.165-6.468-14.165-14.448S-5.412 59.593 2.41 59.593c6.743 0 12.386 4.806 13.815 11.243l4.797-6.203 14.989-5.04h16.471c7.823 0 14.165 6.468 14.165 14.448z"
                    fill="#E18700"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_4126_3762"
                    x1={37.0003}
                    y1={17.9274}
                    x2={37.0003}
                    y2={57.5764}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFE600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_4126_3762"
                    x1={37.0003}
                    y1={17.9274}
                    x2={37.0003}
                    y2={57.5764}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_4126_3762"
                    x1={37.0003}
                    y1={17.9275}
                    x2={37.0003}
                    y2={57.5765}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFD600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default LonelySunIcon
