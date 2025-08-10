import * as React from "react"
import Svg, {
    G,
    Circle,
    Mask,
    Path,
    ForeignObject,
    Defs,
    ClipPath,
    LinearGradient,
    Stop,
    SvgProps
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: div, filter */

function BigRainIcon(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 74 74"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_f_4126_3781)">
                <Circle
                    cx={40.4102}
                    cy={23.1563}
                    r={9.90529}
                    fill="#FFC701"
                    fillOpacity={0.5}
                />
            </G>
            <Circle
                cx={40.4101}
                cy={23.481}
                r={9.16294}
                fill="url(#paint0_linear_4126_3781)"
                stroke="url(#paint1_linear_4126_3781)"
                strokeWidth={0.835181}
            />
            <Mask
                id="a"
                style={{
                    maskType: "alpha"
                }}
                maskUnits="userSpaceOnUse"
                x={30}
                y={19}
                width={20}
                height={15}
            >
                <Path
                    d="M49.99 23.481a9.58 9.58 0 01-19.16 0c0-5.291 3.558-4.06 8.85-4.06 5.29 0 10.31-1.231 10.31 4.06z"
                    fill="url(#paint2_linear_4126_3781)"
                />
            </Mask>
            <G filter="url(#filter1_f_4126_3781)" mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.96 48h.082a6.982 6.982 0 10-.081-13.964h-4.452c.098-.581.149-1.178.149-1.786 0-5.92-4.799-10.718-10.718-10.718-5.918 0-10.717 4.799-10.717 10.718 0 .632.055 1.252.16 1.854A6.984 6.984 0 0023.442 48H47.96z"
                    fill="#E18700"
                />
            </G>
            <ForeignObject
                x={-17.331}
                y={8.05353}
                width={80.406}
                height={67.9025}
            ></ForeignObject>
            <G filter="url(#filter2_d_4126_3781)" data-figma-bg-blur-radius={5.84626}>
                <Mask id="b" fill="#fff">
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.901 48.812h.081a6.982 6.982 0 10-.08-13.964h-1.805c.065-.478.099-.966.099-1.462 0-5.919-4.798-10.717-10.717-10.717-5.92 0-10.717 4.798-10.717 10.717 0 .559.042 1.107.125 1.643a6.982 6.982 0 10-1.505 13.783h24.52z"
                    />
                </Mask>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.901 48.812h.081a6.982 6.982 0 10-.08-13.964h-1.805c.065-.478.099-.966.099-1.462 0-5.919-4.798-10.717-10.717-10.717-5.92 0-10.717 4.798-10.717 10.717 0 .559.042 1.107.125 1.643a6.982 6.982 0 10-1.505 13.783h24.52z"
                    fill="url(#paint3_linear_4126_3781)"
                />
                <Path
                    d="M43.901 48.812l.01-.835a.835.835 0 00-.845.835h.835zm0-13.964h-.835a.835.835 0 00.845.835l-.01-.835zm0 0h.835a.835.835 0 00-.835-.835v.835zm-1.804 0l-.827-.113a.835.835 0 00.827.948v-.835zm-21.21.18l-.19.814a.835.835 0 001.015-.94l-.825.127zm-1.505 13.784l.655.518a.835.835 0 00-.665-1.353l.01.835zm0 0l-.656-.517a.835.835 0 00.655 1.353v-.835zm24.52 0v.836a.835.835 0 00.834-.835h-.835zm0 0l-.01.835h.09v-1.67h-.071l-.01.835zm.08 0v.836c4.318 0 7.818-3.5 7.818-7.818h-1.67a6.147 6.147 0 01-6.148 6.147v.836zm6.983-6.982h.835c0-4.317-3.5-7.817-7.818-7.817v1.67a6.147 6.147 0 016.148 6.147h.835zm-6.983-6.982v-.835h-.09l.01.835.009.835h.071v-.835zm-.08 0h-.836 1.67-.835zm-1.805 0v.835h1.804v-1.67h-1.804v.835zm0 0l.828.113c.07-.515.106-1.041.106-1.575h-1.67c0 .458-.031.908-.091 1.349l.827.113zm.099-1.462h.835c0-6.38-5.172-11.552-11.552-11.552v1.67c5.458 0 9.882 4.425 9.882 9.882h.835zM31.479 22.67v-.835c-6.38 0-11.552 5.172-11.552 11.552h1.67c0-5.457 4.424-9.882 9.882-9.882v-.835zM20.762 33.386h-.835c0 .601.045 1.192.134 1.77l.826-.127.825-.127c-.076-.494-.115-1-.115-1.516h-.835zm.125 1.643l.189-.814a7.838 7.838 0 00-1.776-.202v1.67c.482 0 .95.055 1.398.16l.189-.814zm-1.587-.181v-.835a7.818 7.818 0 00-7.817 7.817h1.67a6.147 6.147 0 016.147-6.147v-.835zm-6.982 6.982h-.835c0 4.318 3.5 7.818 7.817 7.818V47.977a6.147 6.147 0 01-6.147-6.147h-.835zm6.982 6.983v.835h.091l-.01-.836-.009-.835H19.3v.836zm.081 0l.656.517-.655-.518-.656-.518.655.519zm24.52 0v-.836h-24.52V49.648h24.52v-.835zm0 0h-.835 1.67-.835z"
                    fill="url(#paint4_linear_4126_3781)"
                    mask="url(#b)"
                />
            </G>
            <ForeignObject
                x={4.10353}
                y={8.05353}
                width={69.6882}
                height={60.6526}
            ></ForeignObject>
            <G filter="url(#filter3_d_4126_3781)" data-figma-bg-blur-radius={5.84626}>
                <Mask id="c" fill="#fff">
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M56.577 41.562h.059a5.046 5.046 0 10-.059-10.091h-1.303a7.745 7.745 0 10-15.329.13 5.046 5.046 0 10-1.088 9.961h17.72z"
                    />
                </Mask>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M56.577 41.562h.059a5.046 5.046 0 10-.059-10.091h-1.303a7.745 7.745 0 10-15.329.13 5.046 5.046 0 10-1.088 9.961h17.72z"
                    fill="url(#paint5_linear_4126_3781)"
                />
                <Path
                    d="M56.577 41.562l.01-.835a.835.835 0 00-.845.835h.835zm0-10.091h-.835a.835.835 0 00.845.835l-.01-.835zm0 0h.835a.835.835 0 00-.835-.836v.835zm-1.303 0l-.828-.113a.836.836 0 00.828.948v-.835zm-15.329.13l-.19.814a.835.835 0 001.015-.94l-.825.126zm-1.088 9.961l.656.518a.835.835 0 00-.665-1.353l.01.835zm0 0l-.655-.517a.835.835 0 00.655 1.353v-.835zm17.72 0v.836a.835.835 0 00.835-.835h-.835zm0 0l-.01.836h.069v-1.67h-.05l-.009.834zm.059 0v.836a5.881 5.881 0 005.881-5.881h-1.67a4.211 4.211 0 01-4.211 4.21v.836zm5.046-5.045h.835a5.881 5.881 0 00-5.881-5.882V32.306a4.21 4.21 0 014.21 4.21h.836zm-5.046-5.047v-.835h-.068l.01.836.009.835h.049v-.835zm-.059 0h-.835 1.67-.835zm-1.303 0v.836h1.303V30.635h-1.303v.835zm0 0l.827.113c.052-.382.08-.773.08-1.169H54.51c0 .32-.022.636-.064.944l.828.113zm.071-1.056h.835a8.58 8.58 0 00-8.58-8.58v1.67a6.91 6.91 0 016.91 6.91h.835zM47.6 22.67v-.835a8.58 8.58 0 00-8.58 8.58h1.67a6.91 6.91 0 016.91-6.91v-.835zm-7.745 7.745h-.836c0 .447.035.885.1 1.314l.826-.127.825-.127a6.98 6.98 0 01-.08-1.06h-.835zm.09 1.187l.189-.813c-.43-.1-.877-.153-1.336-.153V32.306c.33 0 .651.038.958.109l.189-.814zm-1.147-.13v-.836a5.881 5.881 0 00-5.881 5.882h1.67a4.21 4.21 0 014.211-4.211v-.835zm-5.046 5.046h-.835a5.881 5.881 0 005.881 5.88v-1.669a4.21 4.21 0 01-4.21-4.211h-.836zm5.046 5.046v.835h.069l-.01-.836-.01-.835h-.049v.836zm.06 0l.655.517-.656-.518-.655-.517.655.518zm17.72 0v-.835h-17.72v1.67h17.72v-.835zm0 0h-.836 1.67-.835z"
                    fill="url(#paint6_linear_4126_3781)"
                    mask="url(#c)"
                />
            </G>
            <G filter="url(#filter4_dd_4126_3781)" strokeWidth={0.835181}>
                <Path
                    d="M22.052 47.232a.697.697 0 011.245.379l.19 2.669a1.724 1.724 0 11-3.08-.937l1.645-2.111z"
                    fill="url(#paint7_linear_4126_3781)"
                    stroke="url(#paint8_linear_4126_3781)"
                />
                <Path
                    d="M31.39 47.232a.697.697 0 011.245.379l.19 2.669a1.724 1.724 0 11-3.079-.937l1.645-2.111z"
                    fill="url(#paint9_linear_4126_3781)"
                    stroke="url(#paint10_linear_4126_3781)"
                />
                <Path
                    d="M40.729 47.232a.697.697 0 011.244.379l.19 2.669a1.724 1.724 0 11-3.079-.937l1.645-2.111z"
                    fill="url(#paint11_linear_4126_3781)"
                    stroke="url(#paint12_linear_4126_3781)"
                />
            </G>
            <G filter="url(#filter5_dd_4126_3781)" strokeWidth={0.835181}>
                <Path
                    d="M24.516 54.624a.697.697 0 011.245.378l.19 2.67a1.724 1.724 0 11-3.08-.938l1.645-2.11z"
                    fill="url(#paint13_linear_4126_3781)"
                    stroke="url(#paint14_linear_4126_3781)"
                />
                <Path
                    d="M32.406 54.624a.697.697 0 011.244.378l.19 2.67a1.724 1.724 0 11-3.079-.938l1.645-2.11z"
                    fill="url(#paint15_linear_4126_3781)"
                    stroke="url(#paint16_linear_4126_3781)"
                />
            </G>
            <Defs>
                <ClipPath
                    id="bgblur_0_4126_3781_clip_path"
                >
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.901 48.812h.081a6.982 6.982 0 10-.08-13.964h-1.805c.065-.478.099-.966.099-1.462 0-5.919-4.798-10.717-10.717-10.717-5.92 0-10.717 4.798-10.717 10.717 0 .559.042 1.107.125 1.643a6.982 6.982 0 10-1.505 13.783h24.52z"
                    />
                </ClipPath>
                <ClipPath
                    id="bgblur_1_4126_3781_clip_path"
                >
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M56.577 41.562h.059a5.046 5.046 0 10-.059-10.091h-1.303a7.745 7.745 0 10-15.329.13 5.046 5.046 0 10-1.088 9.961h17.72z"
                    />
                </ClipPath>
                <LinearGradient
                    id="paint0_linear_4126_3781"
                    x1={40.4101}
                    y1={13.9005}
                    x2={40.4101}
                    y2={33.0616}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFE600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_4126_3781"
                    x1={40.4101}
                    y1={13.9005}
                    x2={40.4101}
                    y2={33.0616}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_4126_3781"
                    x1={40.4101}
                    y1={13.9005}
                    x2={40.4101}
                    y2={33.0616}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFD600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_4126_3781"
                    x1={31.6413}
                    y1={14.3065}
                    x2={31.6413}
                    y2={52.4663}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_4126_3781"
                    x1={31.6413}
                    y1={22.6692}
                    x2={31.6413}
                    y2={48.8127}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_4126_3781"
                    x1={49.0163}
                    y1={23.2375}
                    x2={49.0163}
                    y2={43.6976}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_4126_3781"
                    x1={47.7173}
                    y1={22.6692}
                    x2={47.7173}
                    y2={41.5628}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_4126_3781"
                    x1={23.5066}
                    y1={44.6856}
                    x2={21.1446}
                    y2={52.4507}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_4126_3781"
                    x1={23.5066}
                    y1={44.6856}
                    x2={21.1446}
                    y2={52.4507}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_4126_3781"
                    x1={32.845}
                    y1={44.6856}
                    x2={30.483}
                    y2={52.4507}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_4126_3781"
                    x1={32.845}
                    y1={44.6856}
                    x2={30.483}
                    y2={52.4507}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_4126_3781"
                    x1={42.1829}
                    y1={44.6856}
                    x2={39.8209}
                    y2={52.4507}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint12_linear_4126_3781"
                    x1={42.1829}
                    y1={44.6856}
                    x2={39.8209}
                    y2={52.4507}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint13_linear_4126_3781"
                    x1={25.9705}
                    y1={52.0772}
                    x2={23.6085}
                    y2={59.8423}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint14_linear_4126_3781"
                    x1={25.9705}
                    y1={52.0772}
                    x2={23.6085}
                    y2={59.8423}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint15_linear_4126_3781"
                    x1={33.8601}
                    y1={52.0772}
                    x2={31.4981}
                    y2={59.8423}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint16_linear_4126_3781"
                    x1={33.8601}
                    y1={52.0772}
                    x2={31.4981}
                    y2={59.8423}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default BigRainIcon
