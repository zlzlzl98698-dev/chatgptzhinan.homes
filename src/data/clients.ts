// 6 大操作系统客户端软件数据库
// 依据 第三方代理客户端.txt 提炼

export interface ClientItem {
  id: string;
  name: string;
  slug: string;
  os: ('windows' | 'macos' | 'ios' | 'android' | 'linux' | 'openwrt')[];
  core: string;
  tagline: string;
  description: string;
  isRecommended: boolean;
  pricingType: 'free' | 'paid' | 'freemium';
  officialSource: string;
  features: string[];
  riskNotice?: string;
}

export const CLIENTS: ClientItem[] = [
  {
    id: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    slug: 'clash-verge-rev',
    os: ['windows', 'macos', 'linux'],
    core: 'Mihomo (Clash Meta)',
    tagline: '当前桌面端首选：开源活跃维护、界面现代、原生支持 TUN 虚拟网卡模式',
    description: '采用现代化 Tauri/React 架构开发的开源客户端，完全兼容新版 Mihomo 内核，支持多协议订阅、规则分流、策略组延迟测速及一键开启 TUN 模式接管系统全局流量。',
    isRecommended: true,
    pricingType: 'free',
    officialSource: 'https://github.com/clash-verge-rev/clash-verge-rev',
    features: ['支持 Windows/macOS(Intel&Apple Silicon)/Linux 全平台', '原生 TUN 模式与系统代理自启', '实时连接速度、请求统计与日志查看']
  },
  {
    id: 'v2rayn',
    name: 'v2rayN',
    slug: 'v2rayn',
    os: ['windows', 'linux'],
    core: 'Xray / sing-box / Mihomo',
    tagline: 'Windows 经典老牌：支持多内核切换、多协议节点管理神器',
    description: 'Windows 平台老牌经典客户端，支持 Xray、sing-box 等核心无缝切换，节点管理与批量测速能力强大，支持自定义路由规则与高级分流。',
    isRecommended: true,
    pricingType: 'free',
    officialSource: 'https://github.com/2dust/v2rayN',
    features: ['多核心自由切换支持', '强大的自定义路由分流规则', '支持订阅自动更新与批量延迟测试']
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket（小火箭）',
    slug: 'shadowrocket',
    os: ['ios'],
    core: 'Shadowrocket Core',
    tagline: 'iOS 平台国民级神器：支持全协议、一键扫码导入与规则分流',
    description: 'iPhone/iPad 首选代理软件，支持 Shadowsocks、VLESS、Trojan、Hysteria2 等协议，可在美区/港区 App Store 购买下载。操作流畅且省电保活极佳。',
    isRecommended: true,
    pricingType: 'paid',
    officialSource: 'Apple App Store (需外区账号)',
    features: ['支持二维码扫码一键导入', '分流规则与按需自动连接', '实时连接请求分析与证书解密']
  },
  {
    id: 'flclash',
    name: 'FlClash',
    slug: 'flclash',
    os: ['windows', 'android', 'macos', 'linux'],
    core: 'Mihomo',
    tagline: '极简跨平台代理新秀：Flutter 驱动、轻量低耗、界面优雅',
    description: '基于 Flutter 构建的现代化跨平台 Clash 客户端，在 Android 手机与电脑端拥有极度一致的流畅动画与低内存占用表现。',
    isRecommended: true,
    pricingType: 'free',
    officialSource: 'https://github.com/chen08209/FlClash',
    features: ['跨平台 UI 一致性体验', '内存消耗极低、启动迅速', '支持标准 Clash 订阅与 TUN 模式']
  },
  {
    id: 'hiddify',
    name: 'Hiddify',
    slug: 'hiddify',
    os: ['windows', 'android', 'ios', 'macos', 'linux'],
    core: 'sing-box',
    tagline: '全平台自动适配：新手零配置、多协议整合客户端',
    description: '基于 sing-box 开发的多平台聚合客户端，支持多达十几种代理协议，界面现代化，贴心针对小白优化，一键粘贴订阅即可运行。',
    isRecommended: true,
    pricingType: 'free',
    officialSource: 'https://github.com/hiddify/hiddify-app',
    features: ['支持 Windows/Mac/iOS/Android/Linux 全平台', '全自动协议识别与节点测速', '免去手动修改配置文件的麻烦']
  },
  {
    id: 'v2rayng',
    name: 'v2rayNG',
    slug: 'v2rayng',
    os: ['android'],
    core: 'Xray',
    tagline: '安卓必备开源工具：轻巧稳定、支持主流前沿协议',
    description: 'Android 平台上最普及的开源代理软件，由社区持续维护，支持 VLESS、Trojan、VMess 以及分应用代理设置。',
    isRecommended: true,
    pricingType: 'free',
    officialSource: 'https://github.com/2dust/v2rayNG',
    features: ['支持分应用代理（绕过国内 APP）', '常驻通知栏与快速开关', '节点订阅自动定时更新']
  },
  {
    id: 'openclash',
    name: 'OpenClash',
    slug: 'openclash',
    os: ['openwrt'],
    core: 'Mihomo / Clash',
    tagline: '软路由家庭代理中枢：全屋设备透明代理与规则分流',
    description: '运行在 OpenWrt 路由器上的图形化代理插件，支持全屋手机、电脑、电视盒、游戏机免装客户端自动透明代理。',
    isRecommended: true,
    pricingType: 'free',
    officialSource: 'https://github.com/vernesong/OpenClash',
    features: ['全屋设备免装客户端自动翻墙', '支持 Fake-IP 高速 DNS 模式', '策略组自动故障转移与负载均衡']
  },
  {
    id: 'nikki',
    name: 'Nikki (OpenWrt)',
    slug: 'nikki',
    os: ['openwrt'],
    core: 'Mihomo',
    tagline: '现代 OpenWrt 24.10+ 透明代理首选：采用 nftables 高性能架构',
    description: '专为最新版 OpenWrt 24.10+ 及 nftables 防火墙打造的现代路由代理插件，运行效率远高于传统 iptables 架构。',
    isRecommended: true,
    pricingType: 'free',
    officialSource: 'https://github.com/nikkinik/nikki',
    features: ['原生适配 OpenWrt 24.10+ 与 nftables', '极简优雅的 LuCI 网页后台', '更低 CPU 占用与更高吞吐能力'],
    riskNotice: '强依赖 OpenWrt 24.10 及以上系统环境与 nftables，老版本路由器切勿强行安装。'
  }
];

export function getClientBySlug(slug: string): ClientItem | undefined {
  return CLIENTS.find(c => c.slug === slug);
}
