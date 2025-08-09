import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function SunriseIcon(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 24 25"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_4126_4289)">
                <Path
                    d="M5 21.677a1 1 0 100 2h14a1 1 0 100-2H5zM6.052 12.612l-.39-.392a.99.99 0 00-1.4 0l-.01.01a.991.991 0 000 1.406l.39.392a.981.981 0 001.4 0l.01-.01a.991.991 0 000-1.406zM3.011 19H1.99c-.55 0-.991.442-.991.994v.01c0 .553.44.995.99.995H3c.561.01 1.001-.432 1.001-.985v-.01a.99.99 0 00-.99-1.004zm16.748-6.771a1.003 1.003 0 00-1.411-.01l-.39.392a.991.991 0 000 1.406l.01.01a.982.982 0 001.4 0l.39-.392a.991.991 0 000-1.406zm.25 7.765v.01c0 .553.44.995.99.995h1.01c.55 0 .991-.442.991-.995v-.01a.988.988 0 00-.99-.994H21c-.551 0-.991.442-.991.994z"
                    fill="#fff"
                />
                <Path
                    d="M9.333 6.454L12 3.788m0 0l2.667 2.666M12 3.788v8.142"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path d="M18.47 20.47a6.47 6.47 0 10-12.94 0h12.94z" fill="#fff" />
            </G>
            <Defs>
                <ClipPath id="clip0_4126_4289">
                    <Path fill="#fff" transform="translate(0 .677)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SunriseIcon
