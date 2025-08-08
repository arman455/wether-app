import * as React from "react";
import Svg, {
    G,
    Mask,
    Path,
    Defs,
    LinearGradient,
    Stop,
    SvgProps,
    Filter,
    FeGaussianBlur,
    FeMerge,
    FeMergeNode,
    FeOffset,
    FeColorMatrix
} from "react-native-svg";

function CloudyWithMoonIcon(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 242 210"
            fill="none"
            {...props}
        >
            <Defs>
                {/* Світіння місяця */}
                <Filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <FeGaussianBlur stdDeviation="8" result="blur" />
                    <FeMerge>
                        <FeMergeNode in="blur" />
                        <FeMergeNode in="SourceGraphic" />
                    </FeMerge>
                </Filter>

                {/* Тінь хмари */}
                <Filter id="cloudShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <FeOffset dy="4" />
                    <FeGaussianBlur stdDeviation="20" result="shadow" />
                    <FeColorMatrix
                        type="matrix"
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.2 0"
                    />
                    <FeMerge>
                        <FeMergeNode in="shadow" />
                        <FeMergeNode in="SourceGraphic" />
                    </FeMerge>
                </Filter>

                {/* Градієнт місяця */}
                <LinearGradient
                    id="moonGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <Stop offset="0%" stopColor="#D4C0FF" />
                    <Stop offset="100%" stopColor="#7E2FFF" />
                </LinearGradient>

                {/* Градієнт хмари */}
                <LinearGradient
                    id="cloudGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                >
                    <Stop offset="0%" stopColor="#FFFFFF" />
                    <Stop offset="100%" stopColor="#C1BDBD" stopOpacity={0.8} />
                </LinearGradient>
            </Defs>

            {/* Місяць */}
            <G filter="url(#moonGlow)">
                <Path
                    d="M143.331 28.432a54.183 54.183 0 0121.689-5.946c.509-.03.798.569.475.964-11.122 13.624-13.793 33.076-5.239 49.714 11.007 21.41 36.613 30.401 58.405 21.074.47-.2.967.242.796.723-4.463 12.612-13.556 23.613-26.387 30.216-26.709 13.745-59.495 3.23-73.23-23.485-13.735-26.715-3.218-59.515 23.491-73.26z"
                    fill="url(#moonGradient)"
                />
            </G>

            {/* Хмара */}
            <G filter="url(#cloudShadow)">
                <Path
                    d="M113.821 73.966c22.186 0 40.171 17.993 40.171 40.188 0 1.859-.129 3.688-.373 5.48h6.764v.004c.101-.001.203-.004.305-.004 14.454 0 26.172 11.722 26.172 26.183 0 14.46-11.718 26.182-26.172 26.182-.102 0-.204-.002-.305-.004v.004H68.477l.001-.004c-.102.002-.204.004-.306.004-14.454 0-26.172-11.722-26.172-26.182 0-14.461 11.718-26.183 26.172-26.183 2.045 0 4.036.235 5.946.679a40.515 40.515 0 01-.469-6.159c0-22.195 17.986-40.188 40.172-40.188z"
                    fill="url(#cloudGradient)"
                />
            </G>
        </Svg>
    );
}

export default CloudyWithMoonIcon;
