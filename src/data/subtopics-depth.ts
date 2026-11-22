// 全站 80 个二级 SEO/GEO 专题深度知识体系与三级文章集群规划
// 遵循《二级专题深度升级指令》标准：Answer-First、深度正文、技术对比表、三级文章集群与 FAQ

export interface TertiaryArticle {
  title: string;
  slug: string;
  targetKeyword: string;
  searchIntent: 'informational' | 'commercial' | 'investigative' | 'transactional';
  userTask: string;
  status: 'planned' | 'draft' | 'published';
}

export interface TertiaryCluster {
  clusterName: string;
  description: string;
  articles: TertiaryArticle[];
}

export interface SubtopicDeepContent {
  metaTitle: string;
  metaDescription: string;
  coreAnalysis: {
    heading: string;
    paragraphs: string[];
  }[];
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  actionSteps?: {
    title: string;
    steps: { step: string; detail: string }[];
  };
  clusters: TertiaryCluster[];
}

// 针对 10 大主题分类的专属深度内容生成器
export function getSubtopicDeepContent(topicSlug: string, subSlug: string): SubtopicDeepContent {
  // 根据不同的专题分类与子专题，返回深度内容
  switch (topicSlug) {
    case 'airport':
      return getAirportDepth(subSlug);
    case 'pricing':
      return getPricingDepth(subSlug);
    case 'brands':
      return getBrandsDepth(subSlug);
    case 'vpn':
      return getVpnDepth(subSlug);
    case 'clients':
      return getClientsDepth(subSlug);
    case 'ai-streaming':
      return getAiStreamingDepth(subSlug);
    case 'network':
      return getNetworkDepth(subSlug);
    case 'tutorials':
      return getTutorialsDepth(subSlug);
    case 'troubleshooting':
      return getTroubleshootingDepth(subSlug);
    case 'safety':
      return getSafetyDepth(subSlug);
    default:
      return getDefaultDepth(topicSlug, subSlug);
  }
}

function getAirportDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `2026 精选机场推荐与深度横评指南：晚高峰不卡顿与专线稳定性实测`,
    metaDescription: `针对不同预算与使用场景的机场选购指南。基于 31 家机场晚高峰丢包、IEPL 专线冗余与 ChatGPT 解锁能力，提供客观比较与决策建议。`,
    coreAnalysis: [
      {
        heading: '一、机场核心价值与性能判据深度拆解',
        paragraphs: [
          '很多用户在初次接触科学上网服务时，往往被花哨的营销文案（如所谓的“千兆秒开”、“万人测速图”）所迷惑。然而，日常体验的真正瓶颈从来不在峰值带宽，而在于“晚高峰丢包率”与“跨境骨干网专线性质”。',
          '现代高品质机场的核心架构必须具备两层防线：第一层是国内高防 BGP 智能多线入口，负责在本地就近接入电信、联通、移动三大运营商流量，避免跨网造成的首跳延迟；第二层是跨境物理专线（如 IEPL 或 IPLC），通过海底光缆的专属内网直接将数据包送抵境外落地机房，全程不经过公网 GFW，从而在极端敏感时期与每晚 20:00-23:30 用网高峰期依然保持 0% 丢包率。',
          '对于个人与小型团队，选择机场的核心原则是“按需匹配，死守月付”：外贸与跨境电商优先保证固定原生 IP；AI 开发者优先保证美日节点的低欺诈分；追剧用户则重点考察单位 GB 成本与节点倍率。'
        ]
      },
      {
        heading: '二、不同使用人群的精细化选型画像',
        paragraphs: [
          '外贸与跨境电商团队：最忌讳频繁切换出口 IP 导致 PayPal、Stripe、Amazon 或 Facebook 广告账户触发风控封禁。此场景必须选用提供纯净原生住宅 IP、具备专属静态专线节点的服务商。',
          'AI 开发者与科研工作者：核心需求是 OpenAI API、Claude 3.5 Sonnet 与 Google Gemini 交互的持续稳定性。此类用户需要重点规避香港节点（默认阻断），优先配置低延迟的美西、日本直连专线。',
          '重度影音娱乐用户：主要消耗在 YouTube 4K/8K 与 Netflix、Disney+ 剧集上。此类用户月流量消耗在 300GB–1TB 以上，选购重点在于单价低于 0.1 元/GB 的大流量套餐，并搭配 0.2x–0.5x 低倍率节点追剧。'
        ]
      }
    ],
    comparisonTable: {
      title: '主流机场线路类型与场景适用性对比矩阵',
      headers: ['线路类型', '晚高峰稳定性', '物理延迟', '成本区间', '最适配业务场景'],
      rows: [
        ['IEPL 国际以太网专线', '极高 (丢包率 < 0.1%)', '极低 (深港 15ms, 沪日 30ms)', '¥20 ~ ¥40 /月', 'ChatGPT交互、外服竞技、跨国远程办公'],
        ['IPLC 经典物理租线', '极高 (企业级 0 丢包)', '固定且极低抖动', '¥30 ~ ¥60 /月', '高净值金融交易、核心生产力容灾'],
        ['BGP 公网中转 (Relay)', '良好 (晚高峰偶有波动)', '中等 (依运营商路由浮动)', '¥10 ~ ¥20 /月', '日常网页浏览、社交媒体、非高峰追剧'],
        ['公网直连 (Direct)', '较差 (晚高峰丢包 15%+)', '高且抖动剧烈', '¥1 ~ ¥5 /月', '临时备用、轻度查阅资料、大文件挂机下载']
      ]
    },
    clusters: [
      {
        clusterName: 'A. 场景选型与画像匹配深度指南',
        description: '覆盖外贸、开发者、游戏玩家及影音用户的专属需求解决方案。',
        articles: [
          { title: '外贸跨境电商防封号：如何选择固定原生 IP 机场节点？', slug: 'cross-border-ecommerce-ip', targetKeyword: '外贸防封号机场', searchIntent: 'commercial', userTask: '防止电商账号异地风控', status: 'planned' },
          { title: '外服游戏联机低延迟：IEPL 专线节点如何压降网络抖动 (Jitter)？', slug: 'gaming-latency-optimization', targetKeyword: '游戏加速专线机场', searchIntent: 'informational', userTask: '降低游戏联机延迟与丢包', status: 'planned' },
          { title: '大学生与学术科研：Google Scholar 与 arXiv 论文秒开配置方案', slug: 'academic-research-proxy', targetKeyword: '学术论文加速梯子', searchIntent: 'informational', userTask: '查阅学术文献与代码仓库', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 机场避坑与技术指标核验',
        description: '手把手教你利用 MTR、IPerf3 与测速脚本识别真假专线。',
        articles: [
          { title: '手把手教你读懂测速图：单线程吞吐量与多线程测速陷阱', slug: 'how-to-read-speedtest', targetKeyword: '机场测速图真伪', searchIntent: 'investigative', userTask: '识别虚假测速跑分', status: 'planned' },
          { title: '如何使用 MTR 路由追踪实测节点是否走内网专线？', slug: 'mtr-route-tracing-guide', targetKeyword: 'MTR测试专线教程', searchIntent: 'informational', userTask: '技术验证骨干网路由跳数', status: 'planned' },
          { title: '为什么白天很快晚上卡？晚高峰 QoS 限速机制全解析', slug: 'peak-hour-qos-throttling', targetKeyword: '晚高峰卡顿原因', searchIntent: 'informational', userTask: '排查高峰期拥塞机理', status: 'planned' }
        ]
      }
    ]
  };
}

function getPricingDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `机场价格与套餐精算指南：便宜机场、一元机场风险与单位流量成本分析`,
    metaDescription: `彻底打破机场行业价格信息差。深度剖析一元机场与一分机场的商业真相，拆解月付、年付与不限时套餐的真实投资回报率，提供性价比精算模型。`,
    coreAnalysis: [
      {
        heading: '一、机场价格档次分布与商业成本真相',
        paragraphs: [
          '在 IDC（互联网数据中心）行业中，服务器机柜、电力与优质国际专线带宽是具有固定刚性成本的商品。例如，中国三大运营商合规的 IEPL 跨境内网专线，每 1Mbps 的批发月租高达数十元人民币。',
          '因此，市场上宣称“几块钱一年”或“99元永久买断无限量”的超低价服务，其商业本质无外乎两种：第一种是采用极端超售的廉价公网中转甚至蹭用不知名云厂商漏洞，一旦用户涌入便大面积卡死瘫痪；第二种则是典型的庞氏资金盘，以极低价格拉新卷款，几个月后即跑路失联。',
          '理性的价格认知是：正规可靠的中低端中转月均约 10–18 元，高品质 IEPL 专线月均约 20–35 元。在此价格区间内，商家具备健康的利润空间来维护机房并及时更换被封 IP。'
        ]
      },
      {
        heading: '二、计费周期陷阱：月付 vs 年付 vs 不限时按量包',
        paragraphs: [
          '新手首购务必遵守“月付法则”：即使年付折扣力度高达 7 折，但面对行业普遍存在的不确定性，月付能将你的最大试错成本锁定在一杯奶茶钱。',
          '年付套餐适用条件：仅当你已经在该机场稳定使用超过 3 个月以上、确认其晚高峰表现符合预期、且该品牌具有 2 年以上连续稳定运营历史时，方可考虑年付以换取更优性价比。',
          '不限时按量付费包（Non-expiring Traffic）：非常适合作为第二条容灾备用线路。购买几十元包含 200GB 的不过期包，存放在客户端内，主力线路突发维护时随时无感切换，零日常月租开销。'
        ]
      }
    ],
    comparisonTable: {
      title: '机场主流计费模式优劣与适用场景全对比',
      headers: ['计费模式', '典型价格区间', '灵活性', '资金沉没风险', '适合人群'],
      rows: [
        ['标准按月付费 (Monthly)', '¥15 ~ ¥35 /月', '极高 (随时退订换家)', '极低 (最大损失当月租金)', '所有新手、试水用户、短期出差'],
        ['标准按年付费 (Annual)', '¥150 ~ ¥320 /年', '较低 (绑定一年)', '中等 (需承担服务商品牌信誉)', '深度重度老用户、追求折后极值单价'],
        ['不限时流量包 (One-time)', '¥30 ~ ¥100 /包', '极高 (按量扣费不过期)', '低 (用多少扣多少)', '轻度用户、异构双供应商冷备用'],
        ['一次性永久终身包 (Lifetime)', '¥59 ~ ¥99 买断', '无 (商家随时可能关门)', '极高 (99% 为跑路前清仓割韭菜)', '坚决避坑！不推荐任何理性用户购买']
      ]
    },
    clusters: [
      {
        clusterName: 'A. 价格避坑与真实成本核算',
        description: '掌握流量倍率换算公式与隐形成本识别技能。',
        articles: [
          { title: '一元机场能用吗？实测 5 家 1 元梯子的真实速度与可用率', slug: 'one-yuan-airport-review', targetKeyword: '一元机场实测', searchIntent: 'investigative', userTask: '验证低价机场真实可用性', status: 'planned' },
          { title: '如何计算机场真实每 GB 成本？避免倍率陷阱的实用公式', slug: 'cost-per-gb-calculator', targetKeyword: '机场每GB流量价格', searchIntent: 'informational', userTask: '精准计算套餐性价比', status: 'planned' },
          { title: '机场优惠码去哪里找？主流品牌最新活动折扣汇总技巧', slug: 'how-to-find-coupons', targetKeyword: '机场最新优惠码', searchIntent: 'transactional', userTask: '寻找合法有效的折扣码', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 预算梯度精准选型方案',
        description: '从 10 元学生预算到企业级千元预算的套餐推荐。',
        articles: [
          { title: '预算每月 15 元以下：精选 3 家高口碑稳定平价机场', slug: 'budget-under-15-yuan', targetKeyword: '平价便宜机场推荐', searchIntent: 'commercial', userTask: '在有限预算内挑选好用服务', status: 'planned' },
          { title: '家庭与团队大流量套餐推荐：每月 500GB+ 怎么买最划算？', slug: 'large-traffic-plans-guide', targetKeyword: '大流量机场推荐', searchIntent: 'commercial', userTask: '多设备大流量低成本采购', status: 'planned' }
        ]
      }
    ]
  };
}

function getBrandsDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `31 家主流机场品牌独立客观数据档案与深度横评中心`,
    metaDescription: `收录 31 家主流机场品牌的真实测评档案。提供光速云、暮光加速、飞猫云等服务商的官方入口核验、套餐资费、节点测速与防钓鱼辨别指南。`,
    coreAnalysis: [
      {
        heading: '一、机场品牌数据库设计原则与客观性标准',
        paragraphs: [
          '科学上网服务市场品牌繁多、良莠不齐，大量个人站长通过刷假测速图、伪造好评为劣质商家引流。本站品牌数据库坚持“客观实测优先，数据核验分离”的标准，全量档案均标明数据采集日期、测试节点与测试工具。',
          '评测维度涵盖四大支柱：① 基础设施自主性（是否拥有自有 BGP 入口与专线机房资产）；② 服务 SLA 与运营年限（历经几次全网大封锁考验仍平稳健在）；③ 平台解锁与纯净度（OpenAI、Claude 与 Netflix 实测解锁率）；④ 售后沟通机制（工单响应时效与客服透明度）。',
          '商业推荐与客观测评严格分离：首页第一主推品牌（如光速云）凭借其 2020 年至今的稳健表现与全系专线硬件架构获得编辑部认可，而所有 31 家品牌的独立详情页均客观列出其套餐限制与适用人群。'
        ]
      },
      {
        heading: '二、官网防伪核验与防钓鱼镜像安全防线',
        paragraphs: [
          '在百度、搜狗等国内搜索引擎中，搜索知名机场名称（如“光速云官网”、“飞猫云登录”）常会出现大量由黑客或钓鱼团队搭建的假冒镜像网站。用户一旦在仿冒页面输入账号密码或扫码付款，将面临资金被骗与凭证被盗风险。',
          '核验官网的三大黄金法则：① 认准本站提供的官方直连短链或书签存档；② 核验网站是否部署了合规的 SSL 泛域名证书；③ 检查用户中心充值结算通道是否为正规第三方聚合支付，严禁向陌生个人微信/支付宝账户直接转账。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. 品牌对比与选型横评',
        description: '热门老牌与旗舰服务商之间的同台竞技。',
        articles: [
          { title: '光速云 vs 暮光加速：两家专线旗舰深度跑分与性价比对比', slug: 'guangsu-vs-muguang', targetKeyword: '光速云对比暮光加速', searchIntent: 'commercial', userTask: '在主流旗舰品牌间做决策', status: 'planned' },
          { title: '运营 3 年以上的老牌机场有哪些？2026 稳定不跑路品牌名录', slug: 'top-established-brands', targetKeyword: '老牌不跑路机场盘点', searchIntent: 'investigative', userTask: '筛选长期高信誉服务商', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 官网安全防伪与维权指南',
        description: '识别仿冒镜像，保护个人账户与支付资产安全。',
        articles: [
          { title: '警惕山寨钓鱼站：如何识别机场官方真伪入口与最新镜像域名？', slug: 'phishing-airport-prevention', targetKeyword: '机场官网防伪识别', searchIntent: 'informational', userTask: '防止进入恶意钓鱼网站', status: 'planned' },
          { title: '机场工单提交技巧：遇到节点故障时如何高效与客服沟通？', slug: 'ticket-support-best-practices', targetKeyword: '机场客服工单沟通', searchIntent: 'informational', userTask: '快速获得技术排障支持', status: 'planned' }
        ]
      }
    ]
  };
}

function getVpnDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `VPN 与加速器深度指南：传统 VPN、代理客户端与游戏加速器底层对比`,
    metaDescription: `深度科普网络加密工具技术差异。客观剖析免费 VPN 的隐私陷阱，对比 WireGuard、Shadowsocks、VLESS 与游戏专线加速机制，指导各系统选型。`,
    coreAnalysis: [
      {
        heading: '一、传统 VPN、现代代理工具与游戏加速器的本质差异',
        paragraphs: [
          '普通大众常将一切科学上网工具笼统称作“VPN”，但在计算机网络体系中，传统商用 VPN（如 ExpressVPN、NordVPN 使用的 OpenVPN/WireGuard）与现代机场代理（Shadowsocks、VLESS、Trojan）以及游戏加速器（网易UU、腾讯网游加速器）完全属于三种不同技术栈。',
          '传统 VPN 诞生于跨国企业远程办公场景，旨在将客户端与公司内网建立一条高强度的加密隧道，但其协议特征显著，在国内国际公网互联出口极易被深度包检测（DPI）精准识别并直接封锁。',
          '现代代理协议（如 VLESS + REALITY）则专注于流量伪装与混淆，将加密流量伪装成正常的境外正规 HTTPS 访问，抗封锁能力远强于传统 VPN；而游戏加速器仅针对指定游戏端口的 UDP 实时数据进行路由优化，不接管网页浏览。'
        ]
      },
      {
        heading: '二、免费 VPN 的商业模式与致命隐私陷阱',
        paragraphs: [
          '“天下没有免费的午餐，如果一个产品是免费的，那么你就是产品本身。” 全球网络安全实验室的多项审计表明，市面上 85% 以上的所谓“免费 VPN”在隐私协议中隐蔽植入了数据收集条款。',
          '免费 VPN 的常见变现手段包括：静默采集用户的浏览记录转售给广告商；在网页中强行注入弹窗广告；甚至利用你的空闲带宽作为僵尸网络（Botnet）节点进行分布式攻击。',
          '安全底线：涉及资金转账、网银、个人隐私及重要办公账号，坚决远离免费 VPN。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. 协议底层原理与抗封锁技术',
        description: '技术科普 WireGuard、OpenVPN 与混淆代理协议的优劣。',
        articles: [
          { title: '为什么传统 VPN 在国内频繁失效？深度剖析 GFW 协议特征识别', slug: 'why-traditional-vpn-fails', targetKeyword: 'VPN被墙原理科普', searchIntent: 'informational', userTask: '理解防火墙探测机制', status: 'planned' },
          { title: 'VLESS vs Trojan vs WireGuard：哪种协议更适合日常科学上网？', slug: 'protocol-comparison-guide', targetKeyword: '代理协议对比', searchIntent: 'informational', userTask: '挑选最优连接协议', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 平台系统与游戏加速配置',
        description: '针对 Windows、Mac、手机与主机联机的配置路线。',
        articles: [
          { title: 'PC 电脑端最佳科学上网工具：Windows 11 软件选型与性能横评', slug: 'windows-best-proxy-tools', targetKeyword: 'Windows科学上网软件', searchIntent: 'commercial', userTask: '在电脑端部署最佳工具', status: 'planned' },
          { title: 'Steam 与主机联机加速：如何用代理节点畅玩外服热门游戏？', slug: 'steam-gaming-proxy-setup', targetKeyword: '代理替代游戏加速器', searchIntent: 'informational', userTask: '低成本实现联机加速', status: 'planned' }
        ]
      }
    ]
  };
}

function getClientsDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `全平台代理客户端知识库与下载配置枢纽：Clash Verge Rev、v2rayN、小火箭全解`,
    metaDescription: `覆盖 Windows、Android、iOS、macOS、Linux 六大平台主流代理软件。深度评测 Clash Verge Rev、v2rayN、Shadowrocket 等开源工具性能与配置。`,
    coreAnalysis: [
      {
        heading: '一、客户端与机场订阅服务的共生关系',
        paragraphs: [
          '许多初学者常常混淆“客户端”与“机场”的概念：客户端是安装在你手机或电脑上的**本地解析与路由软件**（相当于播放器）；而机场订阅则是服务商提供的**远程服务器节点集群清单**（相当于视频光盘）。',
          '客户端本身不带任何境外流量，必须导入合法的机场订阅链接才能实现科学上网；反之，仅购买了订阅而没有安装客户端，也无法在操作系统中建立代理通道。',
          '目前全网公认最安全的模式是：使用开源、代码透明且经过数万人安全审计的通用客户端（如 Clash Verge Rev、Shadowrocket、v2rayN），配合第三方正规服务商的订阅使用。'
        ]
      },
      {
        heading: '二、客户端安全下载与防木马后门三原则',
        paragraphs: [
          '原则一：严禁在百度、搜狗等搜索引擎中点击所谓“xx官网”下载客户端。搜索结果排名前列的多数是未经官方授权的重打包版本，甚至被黑客恶意植入了键盘记录木马或挖矿程序。',
          '原则二：仅从开发者的官方 GitHub Releases 仓库或受信任的海外 App Store 获取安装包。',
          '原则三：下载安装包后，可使用 PowerShell 计算文件的 SHA256 散列哈希值，与官方发布页面提供的 Hash 对比，确保文件未遭篡改。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. 核心客户端保姆级安装与使用',
        description: '主流软件从下载、安装到日常使用的图文指引。',
        articles: [
          { title: 'Clash Verge Rev 新手通关：从 GitHub 下载到导入订阅完整指引', slug: 'clash-verge-rev-beginner-guide', targetKeyword: 'Clash Verge Rev使用教程', searchIntent: 'informational', userTask: '快速上手现代桌面客户端', status: 'planned' },
          { title: 'Shadowrocket 小火箭保姆级图文教程：美区 ID 获取与一键配置', slug: 'shadowrocket-ios-tutorial', targetKeyword: '小火箭使用教程', searchIntent: 'informational', userTask: '搞定 iPhone 科学上网', status: 'planned' },
          { title: 'v2rayN 深度配置指南：Xray 内核更新与常见报错解决方法', slug: 'v2rayn-windows-advanced-guide', targetKeyword: 'v2rayN配置教程', searchIntent: 'informational', userTask: '精细化调优 Windows 客户端', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 进阶内核与多端协同',
        description: 'Mihomo 与 sing-box 新一代内核特性及多设备共享。',
        articles: [
          { title: 'Mihomo (原 Clash Meta) 内核优势全解：为什么它比老 Clash 更快更稳？', slug: 'mihomo-core-advantages', targetKeyword: 'Mihomo内核详解', searchIntent: 'informational', userTask: '深入了解底层代理特性', status: 'planned' },
          { title: '局域网代理共享 (Allow LAN)：如何让电视盒子与 PS5 共享电脑梯子？', slug: 'lan-proxy-sharing-guide', targetKeyword: '局域网共享代理教程', searchIntent: 'informational', userTask: '让全屋智能设备接入外网', status: 'planned' }
        ]
      }
    ]
  };
}

function getAiStreamingDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `AI 生产力与海外流媒体解锁指南：ChatGPT、Claude 网络要求与 4K 秒开`,
    metaDescription: `深入科普原生 IP、欺诈分（Fraud Score）与流媒体全解锁原理。实测主流机场在 OpenAI、Claude 严苛风控下的连通性与 4K 播放表现。`,
    coreAnalysis: [
      {
        heading: '一、OpenAI 与 Anthropic 风控防火墙深度机理解析',
        paragraphs: [
          '随着人工智能技术的普及，ChatGPT 与 Claude 已经成为数百万中国知识工作者的核心生产力。然而，用户最常遇到的报错就是 `Error 1020: Access Denied`、`Unable to load site`，或者长文本生成突然中断。',
          '这是因为 OpenAI 与 Anthropic 集成了全球顶级信誉数据库（如 Cloudflare Radar、MaxMind）。如果一个节点出口 IP 属于商用机房数据中心（Hosting/DataCenter），或者同一个出口 IP 瞬间爆发海量并发请求，系统就会直接判定为恶意自动化脚本予以强行切断。',
          '解决方案：必须选用出口为纯净原生住宅 IP（Residential）、信誉欺诈分为 0 的优质专线节点，且务必避开 OpenAI 官方不支持的中国香港机房。'
        ]
      },
      {
        heading: '二、Netflix 奈飞与 Disney+ 真正全解锁识别法',
        paragraphs: [
          '“能打开 Netflix 并不等于真正解锁了 Netflix”：普通被风控识别的代理节点，在登录奈飞后只能观看由 Netflix 官方自制、无版权地域限制的影片（如《怪奇物语》），所有具有严格地域版权的第三方非自制剧（如《绝命毒师》、《绝望主妇》）均会被静默隐藏。',
          '真正全解锁验证：在搜索框输入第三方非自制剧名，若能顺利搜到且支持 4K HDR 及中文字幕播放，才代表该节点落地具备合规的原生流媒体解锁资质。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. AI 生产力工具网络环境攻坚',
        description: '彻底解决 ChatGPT、Claude、Gemini 的各类风控报错。',
        articles: [
          { title: 'ChatGPT 报错 1020 Access Denied 终极排障：从节点选型到清除指纹', slug: 'fix-chatgpt-1020-access-denied', targetKeyword: 'ChatGPT 1020报错解决', searchIntent: 'informational', userTask: '彻底解决 OpenAI 访问受阻', status: 'planned' },
          { title: 'Claude 注册被秒封号怎么破？原生住宅 IP 与浏览器时区匹配实战', slug: 'avoid-claude-account-ban', targetKeyword: 'Claude防封号教程', searchIntent: 'informational', userTask: '安全注册并使用 Claude 3.5', status: 'planned' },
          { title: 'Google Gemini 报错当前地区不支持：DNS 与区域分流规则配置', slug: 'gemini-region-unsupported-fix', targetKeyword: 'Gemini地区不支持解决', searchIntent: 'informational', userTask: '修复 Google AI 地区限制', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 顶级流媒体 4K 超清视听指南',
        description: 'Netflix 全区解锁、YouTube 4K 秒开与多语言字幕配置。',
        articles: [
          { title: '如何测试节点是否真正全解锁 Netflix？非自制剧与原生 IP 验证法', slug: 'test-netflix-full-unlock', targetKeyword: 'Netflix全解锁测试', searchIntent: 'investigative', userTask: '验证流媒体解锁深度', status: 'planned' },
          { title: 'YouTube 4K/8K 视频缓冲卡顿？Connection Speed 跑分调优秘籍', slug: 'youtube-4k-buffer-optimization', targetKeyword: '油管4K卡顿解决', searchIntent: 'informational', userTask: '提升视频缓冲速度', status: 'planned' }
        ]
      }
    ]
  };
}

function getNetworkDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `网络线路与节点技术全景：IEPL、IPLC 专线原理、全球枢纽与倍率算法`,
    metaDescription: `深度科普代理网络底层技术。拆解 IEPL 与 IPLC 物理专线抗封锁原理，横向对比香港、日本、新加坡、美国节点性能，揭秘晚高峰丢包与倍率算法。`,
    coreAnalysis: [
      {
        heading: '一、骨干网物理专线架构与晚高峰抗封锁原理',
        paragraphs: [
          '线路决定网络下限，节点决定业务上限。在国际公网出口每晚经历高峰期挤塞时，普通公网中转遭遇运营商严厉 QoS 丢包限速，导致 TCP 窗口断崖式暴跌；而 IEPL 专线走的是国内 BGP 到境外内网机房的物理光缆闭环隧道，完全绕开公网 GFW，晚高峰丢包率恒定为 0%。',
          '对于游戏玩家而言，物理专线意味着极低的网络抖动（Jitter < 2ms），杜绝联机拉扯瞬移；对于企业跨境协作而言，物理专线提供了工业级 99.9% SLA 可用性保障。'
        ]
      },
      {
        heading: '二、全球四大战略节点地区与科学分流策略',
        paragraphs: [
          '中国香港节点：华南沿海直连仅 15-30ms 延迟，适合日常浏览与知乎、GitHub，但切勿用于访问 ChatGPT。',
          '日本东京节点：40-65ms 黄金延迟，完美兼顾 ChatGPT、Claude 与本土流媒体（DMM、Netflix 日区），是首选常驻节点。',
          '美西洛杉矶节点：130-160ms 物理极限延迟，拥有最纯净充沛的美国原生 IP，所有欧美科技公司的顶级白名单，终极容灾首选。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. 专线技术与物理光缆原理解析',
        description: '深度剖析 IEPL、IPLC、公网中转与光纤传播极限。',
        articles: [
          { title: 'IEPL 与 IPLC 到底有什么区别？一文看懂两种企业级物理专线', slug: 'iepl-vs-iplc-deep-dive', targetKeyword: 'IEPL和IPLC区别', searchIntent: 'informational', userTask: '辨别不同专线类型', status: 'planned' },
          { title: '光纤物理传播极限：为什么美国节点不可能做到 50ms 延迟？', slug: 'physics-of-network-latency', targetKeyword: '跨洋海缆物理延迟', searchIntent: 'informational', userTask: '识别虚假延迟营销', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 节点调优与流量精算',
        description: '按运营商路由选节点，掌握倍率计费规则。',
        articles: [
          { title: '电信/联通/移动不同宽带用户，该如何挑选最优节点地区？', slug: 'isp-route-node-matching', targetKeyword: '运营商匹配机场节点', searchIntent: 'informational', userTask: '提升本地宽带访问速度', status: 'planned' },
          { title: '节点倍率 0.1x 到 3.0x 算账：如何巧妙利用低倍率节点省流量？', slug: 'multiplier-data-saving-guide', targetKeyword: '机场线路倍率计算', searchIntent: 'informational', userTask: '有效延长流量套餐寿命', status: 'planned' }
        ]
      }
    ]
  };
}

function getTutorialsDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `科学上网实战使用教程：订阅导入、分流规则配置、TUN 模式全平台指南`,
    metaDescription: `零基础保姆级配置总入口。详解 Windows、Android、iOS、macOS 客户端下载与订阅导入，深度拆解规则模式、TUN 虚拟网卡与多端协同。`,
    coreAnalysis: [
      {
        heading: '一、科学上网标准化四步通关流程',
        paragraphs: [
          '任何复杂的代理配置都可以收敛为四个极简步骤：① 在正规服务商后台获取专属订阅 URL；② 下载并安装对应系统的开源原版客户端；③ 粘贴订阅并一键更新节点集群；④ 开启「规则模式（Rule）」并启用系统代理。',
          '千万不要使用所谓的“全局模式（Global）”全天候挂机，全局模式会将百度、淘宝、微信支付等国内流量也送往境外中转，不仅浪费流量，还极易触发国内网银异地风控封号。'
        ]
      },
      {
        heading: '二、TUN 虚拟网卡模式的底层接管威力',
        paragraphs: [
          '普通系统代理仅接管遵守系统 HTTP 代理接口的浏览器软件，CMD 终端、Git、Steam 游戏大作默认不走系统代理。',
          'TUN 模式通过在操作系统网络栈底层安装虚拟网卡（Virtual Adapter），强行将默认网关指向代理内核，实现系统级 100% 透明全流量接管，彻底解决游戏与命令行报错问题。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. 订阅管理与防泄露防盗刷',
        description: '保护订阅凭据安全，掌握本地订阅转换技巧。',
        articles: [
          { title: '机场订阅链接泄露了怎么办？手把手教你一键重置与本地转换', slug: 'reset-subscription-token-guide', targetKeyword: '订阅链接泄露解决', searchIntent: 'informational', userTask: '保障个人账户流量资产', status: 'planned' },
          { title: '为什么不推荐公共在线订阅转换？防范 Token 被黑产劫持', slug: 'online-subconverter-risks', targetKeyword: '在线订阅转换安全吗', searchIntent: 'investigative', userTask: '避免隐私凭证被偷窥', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 智能分流与去广告规则进阶',
        description: '自定义分流策略组与反广告 Rule-Set 集成。',
        articles: [
          { title: 'Clash 规则进阶：如何让国内网站直连、特定学术网站走特定专线？', slug: 'advanced-clash-routing-rules', targetKeyword: 'Clash自定义分流规则', searchIntent: 'informational', userTask: '实现精细化网络分流', status: 'planned' },
          { title: '代理客户端去广告：集成 anti-AD 规则集一键屏蔽网页牛皮癣', slug: 'anti-ad-rule-integration', targetKeyword: '代理去广告规则教程', searchIntent: 'informational', userTask: '提升网页纯净阅读体验', status: 'planned' }
        ]
      }
    ]
  };
}

function getTroubleshootingDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `网络代理故障终极诊断中心：节点超时 9999ms、订阅失败与连上无网秒修指南`,
    metaDescription: `标准化六步故障自检树。快速解决科学上网常见 Bug：系统时间同步偏差、系统代理残留导致断网、DNS 污染、端口冲突与 1020 报错。`,
    coreAnalysis: [
      {
        heading: '一、网络代理常见故障自检三定律',
        paragraphs: [
          '定律一：节点全红显示 9999ms 或 Timeout，70% 是因为本地系统时间与网络标准时间偏差超过 60 秒触发了 TLS 握手防重放保护，点击系统“自动同步时间”即可瞬间复原。',
          '定律二：关掉梯子后电脑连国内百度、微信都打不开，是因为非正常退出导致 Windows 系统代理开关未注销，手动进入设置关闭“使用代理服务器”即可秒级恢复。',
          '定律三：订阅更新失败多数是本地宽带 DNS 阻断了订阅服务器，开启手机 5G 热点重新点击更新即可顺利解决。'
        ]
      },
      {
        heading: '二、7890 端口冲突与客户端崩溃排障',
        paragraphs: [
          '启动软件提示“Port already in use”通常是有僵尸代理内核进程在后台驻留。在任务管理器中强制结束所有包含 Clash、Mihomo、v2ray 的进程即可。',
          'Windows 客户端闪退多因缺失微软官方 WebView2 运行库，从微软官网下载安装运行时环境即可根治。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. 连通性与节点超时深度攻坚',
        description: '彻底排查从本地网关到境外服务器各个环节的断连根因。',
        articles: [
          { title: '节点全部超时 9999ms：三大根因与 60 秒极速恢复自救指南', slug: 'fix-node-timeout-9999ms', targetKeyword: '节点全部超时9999ms', searchIntent: 'informational', userTask: '一键恢复节点连通性', status: 'planned' },
          { title: '关掉代理后连百度也打不开？Windows 系统代理残留一键修复', slug: 'fix-no-internet-after-closing-proxy', targetKeyword: '关闭梯子后没网解决', searchIntent: 'informational', userTask: '修复本地系统代理配置', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 订阅更新与 DNS 错误秒修',
        description: '解决订阅拉取失败与域名解析污染。',
        articles: [
          { title: 'Subscription download timed out 订阅更新失败的 4 种应对策略', slug: 'fix-subscription-download-timeout', targetKeyword: '订阅更新失败解决', searchIntent: 'informational', userTask: '成功同步最新节点列表', status: 'planned' },
          { title: '彻底解决 ERR_NAME_NOT_RESOLVED：开启 Fake-IP 与加密 DNS', slug: 'fix-dns-resolution-errors', targetKeyword: 'DNS污染错误排查', searchIntent: 'informational', userTask: '杜绝域名解析投毒故障', status: 'planned' }
        ]
      }
    ]
  };
}

function getSafetyDepth(subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `网络安全防护与避坑全解：跑路前兆识别、隐私加密与双供应商容灾架构`,
    metaDescription: `客观揭示网络代理行业潜规则与运营风险。拆解跑路前兆特征、终身套餐庞氏陷阱、HTTPS 加密真实边界与构建 10 秒切换的异构替代方案。`,
    coreAnalysis: [
      {
        heading: '一、机场跑路四大高危前兆与清仓特征',
        paragraphs: [
          '任何机场跑路前通常都会出现四大异常征兆：① 突然无底线大幅打折清仓，平时年付 300 突然推 59 元永久买断；② 官方 Telegram 群突然开启全员禁言，管理人员删号；③ 节点大面积断流持续超过 48 小时且无公告工单停摆；④ 聚合支付通道降级，仅支持加密货币或个人收款码。',
          '面对此类前兆，切勿抱有侥幸心理继续充值，应立即启动备用服务商方案平移资产。'
        ]
      },
      {
        heading: '二、数据安全真相与双供应商异构容灾模型',
        paragraphs: [
          '数据加密真相：全网普及 HTTPS/TLS 1.3 强加密的今天，中间人包括机场主只能看到你访问的目标域名（SNI），根本看不到你的明文账号密码与聊天内容！',
          '容灾模型：常备“主力高品质专线（如光速云）+ 便宜不限时备用包”，主力突发海缆故障时，客户端切换备用仅需 5 秒钟，彻底保障业务不中断。'
        ]
      }
    ],
    clusters: [
      {
        clusterName: 'A. 跑路预警与消费维权避坑',
        description: '掌握行业潜规则，识别资金盘，守护个人资产。',
        articles: [
          { title: '机场跑路前有哪些征兆？老司机教你提前识别割韭菜信号', slug: 'runaway-airport-warning-signs', targetKeyword: '机场跑路前兆特征', searchIntent: 'investigative', userTask: '提前避开失联跑路风险', status: 'planned' },
          { title: '买机场最容易交的 10 大学费：老司机血泪总结与避坑心得', slug: 'top-10-airport-purchasing-pitfalls', targetKeyword: '买机场避坑指南', searchIntent: 'investigative', userTask: '避免花冤枉钱买垃圾服务', status: 'planned' }
        ]
      },
      {
        clusterName: 'B. 隐私防护与异构容灾方案',
        description: '构建 1+1 高可用替代预案与防指纹追踪防线。',
        articles: [
          { title: '双供应商 10 秒异构容灾：主力断网时如何秒级平移备用线路？', slug: 'dual-provider-disaster-recovery', targetKeyword: '备用机场容灾方案', searchIntent: 'informational', userTask: '搭建高可用备选系统', status: 'planned' },
          { title: '翻墙会被机场主看到浏览记录吗？HTTPS 加密与安全边界科普', slug: 'is-proxy-safe-privacy-truth', targetKeyword: '翻墙安全与隐私真相', searchIntent: 'informational', userTask: '消除不必要的安全恐慌', status: 'planned' }
        ]
      }
    ]
  };
}

function getDefaultDepth(topicSlug: string, subSlug: string): SubtopicDeepContent {
  return {
    metaTitle: `专业网络知识中心与深度选型指南 | chatgpt指南`,
    metaDescription: `针对该主题的深度实测报告与配置指南。`,
    coreAnalysis: [
      {
        heading: '一、核心原理与深度选型建议',
        paragraphs: [
          '在复杂多变的网络访问环境中，选择合适的基础设施与配置规则是保障长久稳定体验的前提。',
          '结合真实测速数据与业务兼容性，合理配置分流与备份策略能显著提升使用效率。'
        ]
      }
    ],
    clusters: []
  };
}
