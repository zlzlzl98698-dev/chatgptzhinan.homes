// 机场品牌数据库（集中管理所有品牌、套餐、测速与推广链接）
// 生成时间: 2026-11-21
// 依据 5 份核心资料严格去重与核验

export interface PackageItem {
  name: string;
  cycle: string;
  price: string;
  traffic: string;
  period?: string;
}

export interface SpeedTestItem {
  node: string;
  ping: string;
  speed: string;
}

export interface BrandItem {
  id: string;
  name: string;
  enName: string;
  alias: string;
  slug: string;
  isMainPush: boolean;
  priority: number;
  rating: number;
  entryPrice: string;
  entryTraffic: string;
  lineTypes: string[];
  protocols: string[];
  clients: string[];
  aiSupport: {
    chatgpt: 'supported' | 'partial' | 'unsupported' | 'untested';
    claude: 'supported' | 'partial' | 'unsupported' | 'untested';
    gemini: 'supported' | 'partial' | 'unsupported' | 'untested';
    notes: string;
  };
  streamingSupport: {
    netflix: 'supported' | 'partial' | 'unsupported' | 'untested';
    disney: 'supported' | 'partial' | 'unsupported' | 'untested';
    youtube: 'supported' | 'partial' | 'unsupported' | 'untested';
    tiktok: 'supported' | 'partial' | 'unsupported' | 'untested';
    notes: string;
  };
  coupon: string;
  affUrl: string;
  logo: string;
  establishedYear: string;
  nodeRegions: string[];
  packages: PackageItem[];
  speedTests: SpeedTestItem[];
  description: string;
  pros: string[];
  cons: string[];
  targetUsers: string;
  dataStatus: 'verified' | 'vendor' | 'needs-audit';
  verifiedDate: string;
  updateTime: string;
  hasInDepthReview: boolean;
}

export const BRANDS: BrandItem[] = [
  {
    "id": "brand-guangsu",
    "name": "光速云",
    "enName": "光速云",
    "alias": "",
    "slug": "guangsu",
    "isMainPush": true,
    "priority": 1,
    "rating": 9.8,
    "entryPrice": "¥147",
    "entryTraffic": "247GB不过期",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "支持 ChatGPT、Claude 原生解锁，部分节点视网络环境支持 Gemini。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "AMM",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "logo": "/images/logos/光速云主图.png",
    "establishedYear": "2020年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "cycle": "一次性付费",
        "price": "¥147",
        "traffic": "247GB不过期",
        "period": ""
      },
      {
        "name": "光速云·轻量版",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "69GB",
        "period": "每月"
      },
      {
        "name": "光速云·极速版",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "168GB",
        "period": "每月"
      },
      {
        "name": "光速云·流光版",
        "cycle": "月付",
        "price": "¥34",
        "traffic": "268GB",
        "period": "每月"
      },
      {
        "name": "光速云·量子版",
        "cycle": "月付",
        "price": "¥68",
        "traffic": "568GB",
        "period": "每月"
      },
      {
        "name": "光速云·无界版",
        "cycle": "月付",
        "price": "¥138",
        "traffic": "900GB",
        "period": "每月"
      },
      {
        "name": "光速云·定制套餐",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "22ms",
        "speed": "529Mbps"
      },
      {
        "node": "台湾",
        "ping": "41ms",
        "speed": "114Mbps"
      },
      {
        "node": "新加坡",
        "ping": "46ms",
        "speed": "387Mbps"
      },
      {
        "node": "日本",
        "ping": "57ms",
        "speed": "135Mbps"
      },
      {
        "node": "美国",
        "ping": "143ms",
        "speed": "18Mbps"
      }
    ],
    "description": "光速云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "IEPL + 企业级内网专线双架构，晚高峰稳定性优异",
      "拥有自研专属客户端，同时支持 Clash/Shadowrocket 等通用订阅",
      "套餐档位极全，从入门年付至定制大带宽全面覆盖",
      "客服响应迅速，支持 7×24 运维保障"
    ],
    "cons": [
      "部分低延迟节点 AI 解锁偶发需切节点",
      "极小部分定制套餐按需排期"
    ],
    "targetUsers": "追求极致晚高峰稳定性、跨境电商、AI生产力与流媒体全解锁的个人与企业用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": true
  },
  {
    "id": "brand-muguang",
    "name": "暮光加速",
    "enName": "muguang",
    "alias": "muguang",
    "slug": "muguang",
    "isMainPush": false,
    "priority": 2,
    "rating": 9.2,
    "entryPrice": "¥20",
    "entryTraffic": "120GB",
    "lineTypes": [
      "BGP智能调度"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "muguang5555",
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "logo": "/images/avatar.webp",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "【暮光·基础版】",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "period": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "cycle": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "period": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "cycle": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "cycle": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "cycle": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "cycle": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "26ms",
        "speed": "509Mbps"
      },
      {
        "node": "台湾",
        "ping": "40ms",
        "speed": "107Mbps"
      },
      {
        "node": "新加坡",
        "ping": "43ms",
        "speed": "419Mbps"
      },
      {
        "node": "日本",
        "ping": "53ms",
        "speed": "150Mbps"
      },
      {
        "node": "美国",
        "ping": "160ms",
        "speed": "19Mbps"
      }
    ],
    "description": "暮光加速 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-feimao",
    "name": "飞猫云",
    "enName": "feimao",
    "alias": "feimao",
    "slug": "feimao",
    "isMainPush": false,
    "priority": 2,
    "rating": 9.2,
    "entryPrice": "¥84",
    "entryTraffic": "50GB",
    "lineTypes": [
      "优质直连与隧道"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "flycat888",
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "logo": "/images/logos/飞猫云主图.png",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "飞猫·学生版",
        "cycle": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星环版",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "飞猫·银河版",
        "cycle": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "cycle": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "cycle": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "21ms",
        "speed": "526Mbps"
      },
      {
        "node": "台湾",
        "ping": "41ms",
        "speed": "116Mbps"
      },
      {
        "node": "新加坡",
        "ping": "45ms",
        "speed": "413Mbps"
      },
      {
        "node": "日本",
        "ping": "54ms",
        "speed": "138Mbps"
      },
      {
        "node": "美国",
        "ping": "178ms",
        "speed": "14Mbps"
      }
    ],
    "description": "飞猫云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-weifeng",
    "name": "微风网络",
    "enName": "weifeng",
    "alias": "weifeng",
    "slug": "weifeng",
    "isMainPush": false,
    "priority": 2,
    "rating": 9.2,
    "entryPrice": "¥137",
    "entryTraffic": "100GB",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "flat888",
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "logo": "/images/logos/bee_logo.webp",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "清风 (Breeze)",
        "cycle": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "cycle": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "cycle": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "cycle": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "period": "每月"
      },
      {
        "name": "信风·不限时",
        "cycle": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "period": "一次性"
      },
      {
        "name": "长风·不限时",
        "cycle": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "period": "一次性"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "25ms",
        "speed": "546Mbps"
      },
      {
        "node": "台湾",
        "ping": "40ms",
        "speed": "115Mbps"
      },
      {
        "node": "新加坡",
        "ping": "43ms",
        "speed": "384Mbps"
      },
      {
        "node": "日本",
        "ping": "54ms",
        "speed": "131Mbps"
      },
      {
        "node": "美国",
        "ping": "167ms",
        "speed": "17Mbps"
      }
    ],
    "description": "微风网络 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-dalaoyun",
    "name": "大佬云",
    "enName": "dalaoyun",
    "alias": "dalaoyun",
    "slug": "dalaoyun",
    "isMainPush": false,
    "priority": 2,
    "rating": 9.2,
    "entryPrice": "5.6元/月",
    "entryTraffic": "60GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "dly888",
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "logo": "/images/avatar.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "大佬云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-xingdaomeng",
    "name": "星岛梦",
    "enName": "xingdaomeng",
    "alias": "xingdaomeng",
    "slug": "xingdaomeng",
    "isMainPush": false,
    "priority": 2,
    "rating": 8.8,
    "entryPrice": "¥96",
    "entryTraffic": "60GB",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "nmw888",
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "logo": "/images/logos/xdm_logo.webp",
    "establishedYear": "2020年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "星岛梦·贴心小包",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "cycle": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "cycle": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "cycle": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "cycle": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "27ms",
        "speed": "504Mbps"
      },
      {
        "node": "台湾",
        "ping": "41ms",
        "speed": "103Mbps"
      },
      {
        "node": "新加坡",
        "ping": "44ms",
        "speed": "411Mbps"
      },
      {
        "node": "日本",
        "ping": "57ms",
        "speed": "136Mbps"
      },
      {
        "node": "美国",
        "ping": "177ms",
        "speed": "18Mbps"
      }
    ],
    "description": "星岛梦 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-ermao",
    "name": "二猫云",
    "enName": "ermao",
    "alias": "ermao",
    "slug": "ermao",
    "isMainPush": false,
    "priority": 2,
    "rating": 8.8,
    "entryPrice": "¥99",
    "entryTraffic": "100GB",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "supported",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "ermao5555",
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "logo": "/images/logos/2mao_logo.webp",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "二猫云·不限时套餐",
        "cycle": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "二猫年付小包",
        "cycle": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "period": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "period": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "cycle": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "period": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "cycle": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "22ms",
        "speed": "481Mbps"
      },
      {
        "node": "台湾",
        "ping": "41ms",
        "speed": "118Mbps"
      },
      {
        "node": "新加坡",
        "ping": "46ms",
        "speed": "407Mbps"
      },
      {
        "node": "日本",
        "ping": "53ms",
        "speed": "143Mbps"
      },
      {
        "node": "美国",
        "ping": "134ms",
        "speed": "17Mbps"
      }
    ],
    "description": "二猫云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-wuyou",
    "name": "无忧链接",
    "enName": "wuyou",
    "alias": "wuyou",
    "slug": "wuyou",
    "isMainPush": false,
    "priority": 2,
    "rating": 8.8,
    "entryPrice": "¥79",
    "entryTraffic": "40GB",
    "lineTypes": [
      "优质直连与隧道"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "wuyou666",
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "logo": "/images/avatar.webp",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "MINI链接",
        "cycle": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "period": "每月"
      },
      {
        "name": "舒心链接",
        "cycle": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "省心链接",
        "cycle": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "随心链接",
        "cycle": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "忘忧链接",
        "cycle": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "cycle": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "cycle": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "period": "一次性"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "23ms",
        "speed": "531Mbps"
      },
      {
        "node": "台湾",
        "ping": "41ms",
        "speed": "107Mbps"
      },
      {
        "node": "新加坡",
        "ping": "42ms",
        "speed": "418Mbps"
      },
      {
        "node": "日本",
        "ping": "55ms",
        "speed": "147Mbps"
      },
      {
        "node": "美国",
        "ping": "145ms",
        "speed": "17Mbps"
      }
    ],
    "description": "无忧链接 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-weitu",
    "name": "唯兔云",
    "enName": "weitu",
    "alias": "weitu",
    "slug": "weitu",
    "isMainPush": false,
    "priority": 2,
    "rating": 8.8,
    "entryPrice": "¥120",
    "entryTraffic": "75GB",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "weitu666",
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "logo": "/images/logos/v2云主图.png",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "唯兔云·年付加强专线",
        "cycle": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "cycle": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "cycle": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "cycle": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "cycle": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "cycle": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "cycle": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "cycle": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "cycle": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "27ms",
        "speed": "500Mbps"
      },
      {
        "node": "台湾",
        "ping": "37ms",
        "speed": "100Mbps"
      },
      {
        "node": "新加坡",
        "ping": "44ms",
        "speed": "414Mbps"
      },
      {
        "node": "日本",
        "ping": "56ms",
        "speed": "147Mbps"
      },
      {
        "node": "美国",
        "ping": "179ms",
        "speed": "17Mbps"
      }
    ],
    "description": "唯兔云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-firefly",
    "name": "Firefly",
    "enName": "firefly",
    "alias": "firefly",
    "slug": "firefly",
    "isMainPush": false,
    "priority": 2,
    "rating": 8.8,
    "entryPrice": "¥96",
    "entryTraffic": "60GB",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "firefly",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "logo": "/images/avatar.webp",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "Firefly 年付版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "cycle": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "Firefly 不限时",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "27ms",
        "speed": "547Mbps"
      },
      {
        "node": "台湾",
        "ping": "39ms",
        "speed": "135Mbps"
      },
      {
        "node": "新加坡",
        "ping": "42ms",
        "speed": "445Mbps"
      },
      {
        "node": "日本",
        "ping": "57ms",
        "speed": "147Mbps"
      },
      {
        "node": "美国",
        "ping": "143ms",
        "speed": "30Mbps"
      }
    ],
    "description": "Firefly 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-yuzhou",
    "name": "宇宙云",
    "enName": "yuzhou",
    "alias": "yuzhou",
    "slug": "yuzhou",
    "isMainPush": false,
    "priority": 2,
    "rating": 8.8,
    "entryPrice": "¥15/月起",
    "entryTraffic": "100GB/月",
    "lineTypes": [
      "优质直连与隧道"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "YUZHOU553",
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "logo": "/images/logos/yuzhou_logo.webp",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "宇宙云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-u1s1",
    "name": "U1S1",
    "enName": "u1s1",
    "alias": "u1s1",
    "slug": "u1s1",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "¥96",
    "entryTraffic": "60GB",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "akaka",
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "logo": "/images/logos/u1s1主图.png",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "u1s1·就是好用包",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "24ms",
        "speed": "538Mbps"
      },
      {
        "node": "台湾",
        "ping": "39ms",
        "speed": "107Mbps"
      },
      {
        "node": "新加坡",
        "ping": "46ms",
        "speed": "414Mbps"
      },
      {
        "node": "日本",
        "ping": "57ms",
        "speed": "133Mbps"
      },
      {
        "node": "美国",
        "ping": "134ms",
        "speed": "20Mbps"
      }
    ],
    "description": "U1S1 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-lingmao",
    "name": "灵猫网络",
    "enName": "lingmao",
    "alias": "lingmao",
    "slug": "lingmao",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "¥85",
    "entryTraffic": "45GB",
    "lineTypes": [
      "优质直连与隧道"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "lmao888",
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "logo": "/images/avatar.webp",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "灵猫·年付小包",
        "cycle": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "cycle": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "cycle": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "cycle": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "22ms",
        "speed": "492Mbps"
      },
      {
        "node": "台湾",
        "ping": "40ms",
        "speed": "109Mbps"
      },
      {
        "node": "新加坡",
        "ping": "46ms",
        "speed": "409Mbps"
      },
      {
        "node": "日本",
        "ping": "57ms",
        "speed": "147Mbps"
      },
      {
        "node": "美国",
        "ping": "164ms",
        "speed": "19Mbps"
      }
    ],
    "description": "灵猫网络 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-jilian",
    "name": "极连云",
    "enName": "jilian",
    "alias": "jilian",
    "slug": "jilian",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "18元/月",
    "entryTraffic": "100GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "ji8888",
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "logo": "/images/logos/极连云主图.png",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "极连云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-guangnian",
    "name": "光年梯",
    "enName": "guangnian",
    "alias": "guangnian",
    "slug": "guangnian",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "18元/月",
    "entryTraffic": "110GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "gnt6666",
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "logo": "/images/logos/光年梯主图.png",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "光年梯 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-yifan",
    "name": "一翻云",
    "enName": "yifan",
    "alias": "yifan",
    "slug": "yifan",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "¥20",
    "entryTraffic": "150GB",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Hysteria2"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "yfy6666",
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "logo": "/images/logos/1fly_logo.webp",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "轻享版",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "舒享版",
        "cycle": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "尊享版",
        "cycle": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "极致版",
        "cycle": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "period": "每月"
      },
      {
        "name": "98¥·年付小包",
        "cycle": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "23ms",
        "speed": "477Mbps"
      },
      {
        "node": "台湾",
        "ping": "40ms",
        "speed": "117Mbps"
      },
      {
        "node": "新加坡",
        "ping": "42ms",
        "speed": "390Mbps"
      },
      {
        "node": "日本",
        "ping": "53ms",
        "speed": "136Mbps"
      },
      {
        "node": "美国",
        "ping": "180ms",
        "speed": "20Mbps"
      }
    ],
    "description": "一翻云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-sogo",
    "name": "SOGO 云",
    "enName": "sogo",
    "alias": "sogo",
    "slug": "sogo",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "¥98",
    "entryTraffic": "60GB",
    "lineTypes": [
      "IEPL专线",
      "BGP智能调度"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "supported",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "SOGO10000",
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "logo": "/images/logos/sogo.webp",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "小包-年付版",
        "cycle": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "基础版",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "优选版",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "强化版",
        "cycle": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "period": "每月"
      },
      {
        "name": "顶配版",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "period": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "cycle": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "period": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "cycle": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "cycle": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "period": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "cycle": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "26ms",
        "speed": "488Mbps"
      },
      {
        "node": "台湾",
        "ping": "39ms",
        "speed": "118Mbps"
      },
      {
        "node": "新加坡",
        "ping": "43ms",
        "speed": "401Mbps"
      },
      {
        "node": "日本",
        "ping": "57ms",
        "speed": "137Mbps"
      },
      {
        "node": "美国",
        "ping": "140ms",
        "speed": "17Mbps"
      }
    ],
    "description": "SOGO 云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-kexin",
    "name": "可信云",
    "enName": "kexin",
    "alias": "kexin",
    "slug": "kexin",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "25元/月",
    "entryTraffic": "150GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "kkk333",
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "logo": "/images/avatar.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "可信云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-sujie",
    "name": "速界",
    "enName": "sujie",
    "alias": "sujie",
    "slug": "sujie",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "25元/月",
    "entryTraffic": "150GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "supported",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "sss1111",
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "logo": "/images/logos/sujie_logo.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "速界 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-shanyue",
    "name": "闪跃",
    "enName": "shanyue",
    "alias": "shanyue",
    "slug": "shanyue",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "¥96",
    "entryTraffic": "60GB",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "shanyue",
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "logo": "/images/avatar.webp",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "闪跃年付版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "cycle": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "cycle": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "cycle": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "cycle": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "23ms",
        "speed": "548Mbps"
      },
      {
        "node": "台湾",
        "ping": "38ms",
        "speed": "110Mbps"
      },
      {
        "node": "新加坡",
        "ping": "44ms",
        "speed": "383Mbps"
      },
      {
        "node": "日本",
        "ping": "53ms",
        "speed": "144Mbps"
      },
      {
        "node": "美国",
        "ping": "143ms",
        "speed": "18Mbps"
      }
    ],
    "description": "闪跃 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-quanqiu",
    "name": "全球云",
    "enName": "quanqiu",
    "alias": "quanqiu",
    "slug": "quanqiu",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "¥100",
    "entryTraffic": "100GB",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线",
      "BGP智能调度"
    ],
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "partial",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "qq88",
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "logo": "/images/logos/全球云主图.png",
    "establishedYear": "2023年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "cycle": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "cycle": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "轻量版",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "独享私人专线节点",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedTests": [
      {
        "node": "香港",
        "ping": "25ms",
        "speed": "489Mbps"
      },
      {
        "node": "台湾",
        "ping": "37ms",
        "speed": "117Mbps"
      },
      {
        "node": "新加坡",
        "ping": "45ms",
        "speed": "430Mbps"
      },
      {
        "node": "日本",
        "ping": "55ms",
        "speed": "133Mbps"
      },
      {
        "node": "美国",
        "ping": "138ms",
        "speed": "18Mbps"
      }
    ],
    "description": "全球云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-shandianshu",
    "name": "闪电鼠",
    "enName": "shandianshu",
    "alias": "shandianshu",
    "slug": "shandianshu",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "5.6元/月",
    "entryTraffic": "60GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "sd88",
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "logo": "/images/avatar.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "闪电鼠 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-yunjiexian",
    "name": "云界线",
    "enName": "yunjiexian",
    "alias": "yunjiexian",
    "slug": "yunjiexian",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "5.6元/月",
    "entryTraffic": "60GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "yjx888",
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=aycnwNUi",
    "logo": "/images/avatar.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "云界线 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-liulianyun",
    "name": "榴莲云",
    "enName": "liulianyun",
    "alias": "liulianyun",
    "slug": "liulianyun",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "5.6元/月",
    "entryTraffic": "60GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "ll88",
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "logo": "/images/avatar.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "榴莲云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-shenxing",
    "name": "神行加速",
    "enName": "shenxing",
    "alias": "shenxing",
    "slug": "shenxing",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "14元/月",
    "entryTraffic": "120GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "xs0077",
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "logo": "/images/avatar.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "神行加速 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-huanqiuti",
    "name": "环球梯",
    "enName": "huanqiuti",
    "alias": "huanqiuti",
    "slug": "huanqiuti",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "5.6元/月",
    "entryTraffic": "60GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "untested",
      "claude": "untested",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "untested",
      "disney": "untested",
      "youtube": "untested",
      "tiktok": "untested",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "HQ66",
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "logo": "/images/avatar.webp",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "环球梯 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-yinxingren",
    "name": "隐形人",
    "enName": "yinxingren",
    "alias": "yinxingren",
    "slug": "yinxingren",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "¥24",
    "entryTraffic": "144GB",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box",
      "FlClash"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "supported",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "yxr888",
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "logo": "/images/logos/隐形人256x256.png",
    "establishedYear": "2024年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "隐形人 白银纪元",
        "cycle": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "period": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "cycle": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "period": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "cycle": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "period": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "cycle": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "period": "每月"
      },
      {
        "name": "王者定制版",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "cycle": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "period": "每月"
      },
      {
        "name": "一次性小流量",
        "cycle": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "period": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "cycle": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "period": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "cycle": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "speedTests": [],
    "description": "隐形人 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "verified",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-tiziyun",
    "name": "梯子云",
    "enName": "tiziyun",
    "alias": "tiziyun",
    "slug": "tiziyun",
    "isMainPush": false,
    "priority": 3,
    "rating": 8.4,
    "entryPrice": "7.4元/月",
    "entryTraffic": "60GB/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "untested",
      "notes": "节点支持主流 AI 工具生产力访问。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "untested",
      "tiktok": "supported",
      "notes": "支持 4K 原生流媒体解锁与流畅播放。"
    },
    "coupon": "tiziyun",
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "logo": "/images/logos/梯子云256x256.png",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [],
    "speedTests": [],
    "description": "梯子云 是一家专业的网络加速代理服务商，提供多节点与线路支持。",
    "pros": [
      "节点覆盖亚太及欧美主流地区，延迟表现平稳",
      "支持主流全平台第三方代理客户端订阅导入"
    ],
    "cons": [
      "晚高峰极限带宽需结合本地运营商路由测试"
    ],
    "targetUsers": "需要稳定翻墙代理与日常流媒体观看的用户",
    "dataStatus": "needs-audit",
    "verifiedDate": "2026-10-19",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-lingdong",
    "name": "灵动云",
    "enName": "lingdong",
    "alias": "lingdong",
    "slug": "lingdong",
    "isMainPush": false,
    "priority": 4,
    "rating": 8.2,
    "entryPrice": "¥20",
    "entryTraffic": "100G/月",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "untested",
      "notes": "历史测试显示主流 AI 工具支持良好。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "partial",
      "notes": "支持主流海外流媒体平台。"
    },
    "coupon": "",
    "affUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "logo": "/images/logos/灵动云256x256.png",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "灵动·拂风",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "cycle": "季付",
        "price": "¥57",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "cycle": "半年付",
        "price": "¥108",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "cycle": "年付",
        "price": "¥204",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "cycle": "两年付",
        "price": "¥384",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "cycle": "三年付",
        "price": "¥540",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "季付",
        "price": "¥142.5",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "半年付",
        "price": "¥270",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "年付",
        "price": "¥510",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "两年付",
        "price": "¥960",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "三年付",
        "price": "¥1350",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "cycle": "季付",
        "price": "¥285",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "cycle": "半年付",
        "price": "¥540",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "cycle": "年付",
        "price": "¥1020",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "cycle": "两年付",
        "price": "¥1920",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "cycle": "三年付",
        "price": "¥2700",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "cycle": "季付",
        "price": "¥513",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "cycle": "半年付",
        "price": "¥972",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "cycle": "年付",
        "price": "¥1836",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "cycle": "两年付",
        "price": "¥3456",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "cycle": "三年付",
        "price": "¥4860",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·穿云",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "70G/月",
        "period": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "cycle": "一次性付费",
        "price": "¥199",
        "traffic": "150G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "cycle": "一次性付费",
        "price": "¥499",
        "traffic": "400G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "cycle": "一次性付费",
        "price": "¥899",
        "traffic": "800G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动云·至尊私人定制",
        "cycle": "月付",
        "price": "¥620",
        "traffic": "截图遮挡",
        "period": "每月"
      }
    ],
    "speedTests": [],
    "description": "灵动云 定位专线高速代理服务，提供多档周期套餐及流量包支持。",
    "pros": [
      "IEPL专线架构，连接稳定",
      "多档价格与流量包可选"
    ],
    "cons": [
      "部分信息属于历史存档，建议先试用月付套餐"
    ],
    "targetUsers": "需要备用专线与大流量套餐的用户",
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-langwang",
    "name": "浪网",
    "enName": "langwang",
    "alias": "langwang",
    "slug": "langwang",
    "isMainPush": false,
    "priority": 4,
    "rating": 8.2,
    "entryPrice": "¥120",
    "entryTraffic": "800G",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "untested",
      "notes": "历史测试显示主流 AI 工具支持良好。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "partial",
      "notes": "支持主流海外流媒体平台。"
    },
    "coupon": "",
    "affUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "logo": "/images/avatar.webp",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "浪网 高端",
        "cycle": "月付",
        "price": "¥120",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "cycle": "季付",
        "price": "¥342",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "cycle": "半年付",
        "price": "¥648",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "cycle": "年付",
        "price": "¥1224",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "cycle": "两年付",
        "price": "¥2304",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "cycle": "三年付",
        "price": "¥3240",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "cycle": "月付",
        "price": "¥200",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "cycle": "季付",
        "price": "¥570",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "cycle": "半年付",
        "price": "¥1080",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "cycle": "年付",
        "price": "¥2040",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "cycle": "两年付",
        "price": "¥3840",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "cycle": "三年付",
        "price": "¥5400",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 年付标准",
        "cycle": "年付",
        "price": "¥119",
        "traffic": "80G",
        "period": "每月"
      },
      {
        "name": "浪网 小流量包",
        "cycle": "一次性付费",
        "price": "¥239",
        "traffic": "180G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 标准流量包",
        "cycle": "一次性付费",
        "price": "¥569",
        "traffic": "450G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 定制线路包",
        "cycle": "月付",
        "price": "¥640",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "浪网 精英流量包",
        "cycle": "一次性付费",
        "price": "¥1099",
        "traffic": "900G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 进阶",
        "cycle": "月付",
        "price": "¥70",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "cycle": "季付",
        "price": "¥199.5",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "cycle": "半年付",
        "price": "¥378",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "cycle": "年付",
        "price": "¥714",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "cycle": "两年付",
        "price": "¥1344",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "cycle": "三年付",
        "price": "¥1890",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "cycle": "月付",
        "price": "¥30",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "cycle": "季付",
        "price": "¥85.5",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "cycle": "半年付",
        "price": "¥162",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "cycle": "年付",
        "price": "¥306",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "cycle": "两年付",
        "price": "¥576",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "cycle": "三年付",
        "price": "¥810",
        "traffic": "截150G",
        "period": "每月"
      }
    ],
    "speedTests": [],
    "description": "浪网 定位专线高速代理服务，提供多档周期套餐及流量包支持。",
    "pros": [
      "IEPL专线架构，连接稳定",
      "多档价格与流量包可选"
    ],
    "cons": [
      "部分信息属于历史存档，建议先试用月付套餐"
    ],
    "targetUsers": "需要备用专线与大流量套餐的用户",
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  },
  {
    "id": "brand-edgenova",
    "name": "边缘节点",
    "enName": "edgenova",
    "alias": "edgenova",
    "slug": "edgenova",
    "isMainPush": false,
    "priority": 4,
    "rating": 8.2,
    "entryPrice": "¥15",
    "entryTraffic": "72G",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN",
      "sing-box"
    ],
    "aiSupport": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "untested",
      "notes": "历史测试显示主流 AI 工具支持良好。"
    },
    "streamingSupport": {
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "partial",
      "notes": "支持主流海外流媒体平台。"
    },
    "coupon": "TH888",
    "affUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "logo": "/images/logos/edgenova_logo.webp",
    "establishedYear": "2025年",
    "nodeRegions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "packages": [
      {
        "name": "限时月付",
        "cycle": "月付",
        "price": "¥15",
        "traffic": "72G",
        "period": "每月"
      },
      {
        "name": "限时年付",
        "cycle": "年付",
        "price": "¥108",
        "traffic": "45G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "cycle": "季付",
        "price": "¥70",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "cycle": "半年付",
        "price": "¥130",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "cycle": "年付",
        "price": "¥270",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "cycle": "季付",
        "price": "¥145",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "cycle": "半年付",
        "price": "¥280",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "cycle": "年付",
        "price": "¥570",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "cycle": "季付",
        "price": "¥290",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "cycle": "半年付",
        "price": "¥580",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "cycle": "年付",
        "price": "¥1100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "cycle": "月付",
        "price": "¥200",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "cycle": "季付",
        "price": "¥580",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "cycle": "半年付",
        "price": "¥1150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "cycle": "年付",
        "price": "¥2300",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedTests": [],
    "description": "边缘节点 定位专线高速代理服务，提供多档周期套餐及流量包支持。",
    "pros": [
      "IEPL专线架构，连接稳定",
      "多档价格与流量包可选"
    ],
    "cons": [
      "部分信息属于历史存档，建议先试用月付套餐"
    ],
    "targetUsers": "需要备用专线与大流量套餐的用户",
    "dataStatus": "vendor",
    "verifiedDate": "2026-08-09",
    "updateTime": "2026-11-20",
    "hasInDepthReview": false
  }
];

export const MAIN_PUSH_BRAND = BRANDS.find(b => b.isMainPush) || BRANDS[0];

export function getBrandBySlug(slug: string): BrandItem | undefined {
  return BRANDS.find(b => b.slug.toLowerCase() === slug.toLowerCase());
}
