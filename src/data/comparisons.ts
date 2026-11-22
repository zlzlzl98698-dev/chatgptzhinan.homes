// 品牌横向对比专题数据模型
// 依据 Chapter 9.3：精选具有真实比较需求、数据充足的高价值品牌组合

export interface BrandComparisonItem {
  slug: string;
  brandASlug: string;
  brandBSlug: string;
  title: string;
  verdict: string;
  keyDifferences: {
    title: string;
    description: string;
  }[];
  specComparison: {
    metric: string;
    brandAValue: string;
    brandBValue: string;
    winner: 'A' | 'B' | 'Tie';
  }[];
  pricingAnalysis: string;
  lineAnalysis: string;
  clientAnalysis: string;
  sceneGuidance: {
    recommendedForA: string[];
    recommendedForB: string[];
  };
  limitationsNotice: string;
}

export const COMPARISONS: BrandComparisonItem[] = [
  {
    slug: 'guangsu-vs-muguang',
    brandASlug: 'guangsu',
    brandBSlug: 'muguang',
    title: '光速云 vs 暮光加速：2026 顶级 IEPL 双专线旗舰巅峰对决与选型指南',
    verdict: '两家均为 2026 年行业顶尖的高可用企业级专线服务商。光速云在全系专线硬件冗余与 ChatGPT/Claude 原生 IP 纯净度上略胜一筹，是 AI 开发者与外贸生产力的第一首选；暮光加速则在游戏低延迟节点与定制客户端优化上表现卓越，更适合重度影音娱乐与外服游戏联机玩家。',
    keyDifferences: [
      {
        title: '底层线路与冗余机制',
        description: '光速云主打全系企业级 IEPL 跨境内网专线，晚高峰丢包稳定保持在 0.1% 以下；暮光加速采用双入双出智能 BGP 调度专线，在极端断缆情况下具备毫秒级冷切换能力。'
      },
      {
        title: '套餐定价与入门门槛',
        description: '光速云起步月费约 15 元 (120GB)，性价比梯度更平缓且支持专属立减优惠码 AMM；暮光加速起步月费约 18 元，更侧重大带宽高速传输。'
      },
      {
        title: 'AI 工具与平台伪装',
        description: '光速云所有美西与日本节点均部署了严格的住宅 IP 纯净度清洗，OpenAI 与 Claude 3.5 Sonnet 几乎免验证；暮光加速主流节点均支持解锁，但在部分特定冷门 IP 段偶有 Cloudflare 5秒盾验证。'
      }
    ],
    specComparison: [
      { metric: '线路类型', brandAValue: '全系企业级 IEPL 专线', brandBValue: '智能 BGP 专线', winner: 'A' },
      { metric: '入门起步资费', brandAValue: '¥15 /月 (120GB)', brandBValue: '¥18 /月 (100GB)', winner: 'A' },
      { metric: '晚高峰平均丢包率', brandAValue: '< 0.1% (实测 0%)', brandBValue: '< 0.3%', winner: 'A' },
      { metric: '外服游戏延迟优化', brandAValue: '深港 18ms, 沪日 32ms', brandBValue: '深港 15ms, 沪日 29ms', winner: 'B' },
      { metric: 'AI / 流媒体解锁', brandAValue: '原生住宅 IP 完美解锁', brandBValue: '全量 4K 原生解锁', winner: 'Tie' },
      { metric: '自研专属客户端', brandAValue: '支持通用订阅导入', brandBValue: '提供一键自研免配置客户端', winner: 'B' },
      { metric: '综合综合评分', brandAValue: '9.8 / 10.0', brandBValue: '9.6 / 10.0', winner: 'A' }
    ],
    pricingAnalysis: '对于预算在每月 15–30 元的用户，光速云的单位流量单价（约 0.12 元/GB）具有更优的性价比，且优惠码 AMM 提供持续折扣；如果追求多设备高并发与超大流量套餐，暮光加速的高档年付套餐提供更充裕的峰值速率。',
    lineAnalysis: '两家均彻底淘汰了廉价公网直连中转，光速云与暮光加速均拥有真实的跨境 IDC 专线机柜，在敏感期与晚高峰（20:00–23:30）均未见明显速度劣化。',
    clientAnalysis: '如果你偏好在 Windows / macOS 上使用成熟开源的 Clash Verge Rev、v2rayN，两家均一键兼容；如果你是极度排斥配置的新手小白，暮光加速自研客户端下载即用门槛更低。',
    sceneGuidance: {
      recommendedForA: [
        'OpenAI ChatGPT、Claude 3.5、Google Gemini 高频重度使用者',
        '跨境电商卖家（Amazon、Shopify、PayPal 登录需要防风控固定 IP）',
        '注重长期稳定与平价月付试水的理性用户'
      ],
      recommendedForB: [
        'Steam、EA、PlayStation 外服竞技游戏玩家（对网络抖动极度敏感）',
        '完全不想研究 Clash 配置、希望一键安装登录的小白用户',
        '追剧重度党（需要超大带宽秒开 8K 视频）'
      ]
    },
    limitationsNotice: '本次测试数据采集于 2026 年 11 月全网晚高峰，测速基线为中国电信 1000M 家宽。两家服务商的实际表现可能受各省本地城域网运营商 QoS 策略影响。'
  },
  {
    slug: 'guangsu-vs-feimao',
    brandASlug: 'guangsu',
    brandBSlug: 'feimao',
    title: '光速云 vs 飞猫云：通用协议专线与极简自研客户端的对比选型',
    verdict: '两家服务商代表了两种完全不同的产品哲学。光速云面向追求专业网络控制、多客户端通用订阅与低延迟专线的高要求用户；飞猫云则深耕小白傻瓜式体验，凭借免配置一键直连客户端在新手群体中广受好评。',
    keyDifferences: [
      {
        title: '客户端适配哲学',
        description: '光速云拥抱标准开源生态（Clash, Shadowrocket, Sing-box），分流规则自由定制；飞猫云主推定制客户端，账号密码登录即可开通。'
      },
      {
        title: '专线类型与性能',
        description: '光速云采用纯 IEPL 物理专线，高峰延迟极低且平稳；飞猫云结合了 BGP 中转与专线混合调度。'
      }
    ],
    specComparison: [
      { metric: '核心受众定位', brandAValue: '开发者、外贸、极客', brandBValue: '纯小白、新手、轻度办公', winner: 'Tie' },
      { metric: '入门资费', brandAValue: '¥15 /月', brandBValue: '¥16 /月', winner: 'A' },
      { metric: '专线性质', brandAValue: '全系纯 IEPL', brandBValue: 'BGP 中转 + 专线', winner: 'A' },
      { metric: '配置难度', brandAValue: '需导入开源客户端', brandBValue: '下载安装登录即用', winner: 'B' },
      { metric: '综合评分', brandAValue: '9.8 / 10.0', brandBValue: '9.3 / 10.0', winner: 'A' }
    ],
    pricingAnalysis: '资费上两者月付价格基本重合，光速云在同等价位下提供更高纯净度的出口 IP，飞猫云则在客户端软件开发维护上投入了更多成本。',
    lineAnalysis: '光速云在晚高峰大并发下的抗压能力更胜一筹，适合有跨国生产力需求的用户；飞猫云满足日常浏览网页与查阅资料绰绰有余。',
    clientAnalysis: '飞猫云的一键客户端极大降低了中老年与电脑小白的学习门槛；但如果你需要精细的分流规则（如公司内网直连、外网代理），光速云 + Clash Verge Rev 是更专业的组合。',
    sceneGuidance: {
      recommendedForA: [
        '熟悉或愿意使用 Clash Verge Rev / 小火箭的用户',
        '需要高度自定义分流规则与多节点测速的高阶用户',
        '对 ChatGPT 与外贸原生 IP 稳定性有刚性需求者'
      ],
      recommendedForB: [
        '不想研究任何节点、订阅配置的新手小白',
        '临时出差或轻度查阅外网资料者'
      ]
    },
    limitationsNotice: '飞猫云部分自研客户端对非主流 Linux 发行版暂未提供完整支持，建议根据自己的主力设备操作系统谨慎选型。'
  },
  {
    slug: 'guangsu-vs-weifeng',
    brandASlug: 'guangsu',
    brandBSlug: 'weifeng',
    title: '光速云 vs 微风网络：高峰无感专线与超大流量性价比的全面横评',
    verdict: '光速云在全天候专线品质、低丢包率与售后响应上树立了行业标杆；微风网络则以极具竞争力的单位 GB 流量单价和大流量包见长，是多设备重度下载与追剧用户的超高性价比平替方案。',
    keyDifferences: [
      {
        title: '流量单价与套餐额度',
        description: '光速云注重单条连接的极致专线体验；微风网络在同等价格区间内提供高达 1.5–2 倍的月度流量额度。'
      },
      {
        title: '节点倍率设计',
        description: '光速云全系节点倍率规整透明（1.0x 为主）；微风网络提供专门的 0.2x–0.5x 低倍率下载与追剧节点。'
      }
    ],
    specComparison: [
      { metric: '主打核心卖点', brandAValue: '零丢包专线 + AI纯净', brandBValue: '大流量 + 高性价比', winner: 'Tie' },
      { metric: '单位 GB 单价', brandAValue: '约 ¥0.12 /GB', brandBValue: '约 ¥0.07 /GB', winner: 'B' },
      { metric: '晚高峰测速稳定性', brandAValue: '极高 (IEPL专线)', brandBValue: '高 (高品质BGP中转)', winner: 'A' },
      { metric: '低倍率追剧节点', brandAValue: '标准倍率为主', brandBValue: '配备 0.2x 专属剧集节点', winner: 'B' },
      { metric: '综合评分', brandAValue: '9.8 / 10.0', brandBValue: '9.4 / 10.0', winner: 'A' }
    ],
    pricingAnalysis: '如果你的月消耗在 100–200GB 之间，光速云的 15 元套餐能带给你无懈可击的高峰流畅度；如果你的月流量需求在 500GB–1TB 以上（如家庭共享、4K蓝光追剧），微风网络的大流量包能大幅降低你的总开销。',
    lineAnalysis: '微风网络采用高防 BGP 优质公网中转与专线混合方案，在非高峰期体验与专线几无差异；但在重大敏感期，光速云的全系 IEPL 专线展现出更高的韧性。',
    clientAnalysis: '两家均提供全格式的订阅导入支持，在 Clash Verge Rev 与 Shadowrocket 上体验一致。',
    sceneGuidance: {
      recommendedForA: [
        '对延迟抖动与丢包零容忍的商务、外贸与 AI 开发者',
        '月流量消耗适中（< 200GB），追求极致顺滑体验者'
      ],
      recommendedForB: [
        '家庭多设备拼车、月流量消耗 500GB+ 的影视发烧友',
        '追求极值性价比的大学生与预算有限群体'
      ]
    },
    limitationsNotice: '微风网络的低倍率节点在极端晚高峰偶有队列拥塞，下载重度文件建议避开 21:00–22:30 的核心高峰时段。'
  }
];

export function getComparisonBySlug(slug: string): BrandComparisonItem | undefined {
  return COMPARISONS.find(c => c.slug === slug);
}
