import Svg, { Circle, Defs, Filter, G, LinearGradient, Path, Stop, FeGaussianBlur, FeOffset, FeFlood, FeComposite, FeMerge, FeMergeNode, SvgProps } from 'react-native-svg';

function SunnyIcon(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 100 100"
            fill="none"
            {...props}
        >
            <G filter="url(#sunGlow)">
                <Circle
                    cx={35}
                    cy={35}
                    r={20}
                    fill="#FFD93B"
                />
            </G>

            <Circle
                cx={35}
                cy={35}
                r={18}
                fill="url(#sunGradient)"
            />

            <G filter="url(#cloudShadow)">
                <Path
                    d="M65 50c0-8-6-14-14-14s-14 6-14 14c0 .5.03 1 .1 1.5h-1.6C31.57 51.5 28 55 28 59.5S31.57 67.5 36 67.5h30c4.43 0 8-3.57 8-8s-3.57-8-8-8h-1.2c.07-.5.1-1 .1-1.5z"
                    fill="url(#cloudGradient)"
                />
            </G>

            <Defs>
                <LinearGradient id="sunGradient" x1="35" y1="15" x2="35" y2="55" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#FFD93B" />
                    <Stop offset="1" stopColor="#FF9900" />
                </LinearGradient>

                <LinearGradient id="cloudGradient" x1="50" y1="40" x2="50" y2="70" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#FFFFFF" />
                    <Stop offset="1" stopColor="#EAEAEA" />
                </LinearGradient>

                <Filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <FeGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <FeMerge>
                        <FeMergeNode in="coloredBlur" />
                        <FeMergeNode in="SourceGraphic" />
                    </FeMerge>
                </Filter>
                <Filter id="cloudShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <FeOffset dx="0" dy="4" />
                    <FeGaussianBlur stdDeviation="6" result="blur" />
                    <FeFlood floodColor="#000000" floodOpacity="0.08" />
                    <FeComposite in2="blur" operator="in" />
                    <FeMerge>
                        <FeMergeNode />
                        <FeMergeNode in="SourceGraphic" />
                    </FeMerge>
                </Filter>
            </Defs>
        </Svg>
    );
}

export default SunnyIcon;
