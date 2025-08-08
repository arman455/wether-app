import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function SunSetIcon(props: SvgProps) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_4126_4510)">
                <Path
                    d="M5.5 21a1 1 0 100 2h14a1 1 0 100-2h-14zM6.552 11.934l-.39-.391a.99.99 0 00-1.4 0l-.01.01a.991.991 0 000 1.406l.39.392a.981.981 0 001.4 0l.01-.01a.991.991 0 000-1.407zm-3.041 6.39H2.49c-.55 0-.991.441-.991.994v.01c0 .552.44.994.99.994H3.5c.561.01 1.001-.431 1.001-.984v-.01a.99.99 0 00-.99-1.005zm16.748-6.771a1.003 1.003 0 00-1.411-.01l-.39.391a.991.991 0 000 1.407l.01.01a.982.982 0 001.4 0l.39-.392a.991.991 0 000-1.406zm.25 7.765v.01c0 .552.44.994.99.994h1.01c.55 0 .991-.442.991-.994v-.01a.988.988 0 00-.99-.995H21.5c-.551 0-.991.442-.991.995z"
                    fill="#fff"
                />
                <Path
                    d="M15.167 8.586L12.5 11.252m0 0L9.833 8.586m2.667 2.666V3.11"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path d="M18.97 19.793a6.47 6.47 0 10-12.94 0h12.94z" fill="#fff" />
            </G>
            <Defs>
                <ClipPath id="clip0_4126_4510">
                    <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SunSetIcon
