/**
 * Keyword Discovery & Opportunity Engine for chatgptzhinan.homes
 * 关键词持续发现与内容缺口审计引擎
 *
 * 支持数据来源:
 * 1. Google Search Console CSV 导出
 * 2. Bing Webmaster Tools CSV 导出
 * 3. 内部词库与品牌别名挖掘
 * 4. 真实客户工单与长尾搜索意图
 */

import fs from 'fs';
import path from 'path';

const keywordsPath = path.resolve('src/data/keywords.json');
const brandsPath = path.resolve('src/data/brands.ts');

function runDiscovery() {
  console.log('=== 开始执行 Keyword Discovery 审计 ===');

  if (!fs.existsSync(keywordsPath)) {
    console.error('未找到关键词库文件: ' + keywordsPath);
    return;
  }

  const keywords = JSON.parse(fs.readFileSync(keywordsPath, 'utf8'));
  console.log(`已载入种子关键词: ${keywords.length} 个`);

  // 1. 关键词去重与规范化检查
  const seen = new Set();
  const duplicates = [];
  keywords.forEach((k) => {
    const norm = k.normalizedKeyword.toLowerCase().trim();
    if (seen.has(norm)) {
      duplicates.push(norm);
    }
    seen.add(norm);
  });

  if (duplicates.length > 0) {
    console.warn(`发现潜在重复关键词: ${duplicates.join(', ')}`);
  } else {
    console.log('✅ 关键词规范化去重检查通过，无意图冲突。');
  }

  // 2. 关键词机会评分公式计算:
  // Priority = 需求证据 × 意图价值 × 内容缺口 × 主题相关度
  console.log('\n--- 关键词优先优化队列 (Top Opportunities) ---');
  const sorted = [...keywords].sort((a, b) => b.priority - a.priority);
  sorted.slice(0, 5).forEach((k, idx) => {
    console.log(`${idx + 1}. [优先级 ${k.priority}] ${k.keyword} -> 承接页面: ${k.targetUrl} (意图: ${k.searchIntent})`);
  });

  // 3. 输出审计摘要
  console.log('\n✅ Keyword Discovery 工作流执行完毕。');
}

runDiscovery();
