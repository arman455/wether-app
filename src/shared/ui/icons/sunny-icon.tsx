import * as React from "react";
import Svg, {
    G,
    Circle,
    Mask,
    Path,
    Defs,
    ClipPath,
    LinearGradient,
    Stop,
    SvgProps
} from "react-native-svg";

function SunnySmallIcon(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 150 150"
            fill="none"
            {...props}
        >
            <Circle
                cx={86.0058}
                cy={65.5296}
                r={20.9041}
                fill="#FFC701"
                fillOpacity={0.5}
            />

            <Circle
                cx={86.0058}
                cy={66.2149}
                r={19.2188}
                fill="url(#paint0_linear_4126_4071)"
                stroke="url(#paint1_linear_4126_4071)"
                strokeWidth={2}
            />

            <Mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={65}
                y={57}
                width={50}
                height={50}
            >
                <Path
                    d="M106.225 66.215c0 11.166-9.053 20.219-20.22 20.219-11.166 0-20.218-9.052-20.218-20.219 0-11.167 7.51-8.567 18.677-8.567 11.166 0 21.761-2.6 21.761 8.567z"
                    fill="url(#paint2_linear_4126_4071)"
                />
            </Mask>

            {/* Прибрано filter */}
            <G mask="url(#a)">
                <Path
                    d="M101.941 88.492l.171-.002c8.138 0 14.736 6.597 14.736 14.735 0 8.139-6.598 14.737-14.736 14.737l-.171-.003v.003H50.195v-.003c-.056 0-.114.003-.172.003-8.138-.001-14.735-6.597-14.735-14.736 0-8.138 6.597-14.735 14.735-14.735 7.015 0 12.884 4.902 14.371 11.467l4.991-6.327 15.593-5.141h16.963v.002z"
                    fill="#E18700"
                />
            </G>

            {/* Прибрано ForeignObject */}
            {/* Прибрано filter, data-figma-bg-blur-radius */}
            <Mask id="b" fill="#fff">
                <Path d="M101.179 64.501c9.027 0 16.346 7.319 16.346 16.346 0 .756-.053 1.5-.153 2.229h2.752v.003c.042 0 .084-.003.125-.003 5.882 0 10.649 4.768 10.649 10.65 0 5.88-4.767 10.648-10.649 10.649-.041 0-.083-.004-.125-.004v.004H82.728l.002-.004c-.042 0-.083.004-.125.004-5.882 0-10.65-4.768-10.65-10.65 0-5.881 4.769-10.65 10.65-10.65.832 0 1.642.1 2.42.28a16.469 16.469 0 01-.192-2.508c0-9.027 7.319-16.345 16.346-16.346z" />
            </Mask>
            <Path
                d="M101.179 64.501c9.027 0 16.346 7.319 16.346 16.346 0 .756-.053 1.5-.153 2.229h2.752v.003c.042 0 .084-.003.125-.003 5.882 0 10.649 4.768 10.649 10.65 0 5.88-4.767 10.648-10.649 10.649-.041 0-.083-.004-.125-.004v.004H82.728l.002-.004c-.042 0-.083.004-.125.004-5.882 0-10.65-4.768-10.65-10.65 0-5.881 4.769-10.65 10.65-10.65.832 0 1.642.1 2.42.28a16.469 16.469 0 01-.192-2.508c0-9.027 7.319-16.345 16.346-16.346z"
                fill="url(#paint3_linear_4126_4071)"
            />

            <Defs>
                <LinearGradient
                    id="paint0_linear_4126_4071"
                    x1={86.0058}
                    y1={45.9961}
                    x2={86.0058}
                    y2={86.4336}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFE600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_4126_4071"
                    x1={86.0058}
                    y1={45.9961}
                    x2={86.0058}
                    y2={86.4336}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_4126_4071"
                    x1={86.0058}
                    y1={45.9963}
                    x2={86.0058}
                    y2={86.4338}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFD600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_4126_4071"
                    x1={104.168}
                    y1={65.7009}
                    x2={104.168}
                    y2={108.88}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}

export default SunnySmallIcon;
