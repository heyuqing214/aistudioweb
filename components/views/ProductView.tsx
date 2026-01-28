import React from 'react';
import { NeoCard } from '../ui/NeoCard';
import { NeoButton } from '../ui/NeoButton';
import { 
  ArrowRight, Database, MapPin, BarChart3, ScanSearch, 
  Bot, Store, Globe, FileText, Code2, Cloud, Server,
  Activity, Smile, Smartphone, ScanLine, Layers,
  Lightbulb, ExternalLink, ClipboardCheck, Laptop, Sparkles, Map,
  MessageSquareMore, Search, TrendingUp, BookOpen, GraduationCap
} from 'lucide-react';

export const ProductView: React.FC = () => {
  return (
    <div className="pt-28 pb-12 max-w-6xl mx-auto px-4 w-full flex flex-col gap-24">
      
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Product <span className="bg-neo-blue px-2 text-white transform -rotate-2 inline-block border-2 border-neo-black shadow-neo">Universe</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From massive-scale geospatial data platforms to experimental AI agents.
        </p>
      </div>

      {/* ---------------- DATA PRODUCTS SECTION ---------------- */}
      <section className="bg-white border-2 border-neo-black rounded-[2rem] p-8 md:p-12 shadow-neo relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Database size={200} />
           </div>
           
           <div className="mb-12 relative z-10">
             <div className="inline-block bg-[#E0E7FF] text-[#4338ca] px-4 py-1 rounded-full text-xs font-bold mb-4">
                WORK @ AMAP
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-neo-black mb-4">
                大数据选址产品
             </h2>
             <p className="text-gray-500 max-w-2xl">
                深耕大数据选址领域，打造服务零售品牌的数字化选址与经营分析产品。
                通过数据驱动的方式，帮助企业进行科学的商业决策。
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* Product 1 */}
              <div className="bg-[#f8fafc] border-2 border-neo-black/10 rounded-2xl p-6 hover:border-neo-black hover:bg-white transition-all duration-300 group">
                 <div className="w-14 h-14 bg-[#6366f1] rounded-xl flex items-center justify-center text-white mb-6 border-2 border-neo-black shadow-neo-sm group-hover:-translate-y-1 transition-transform">
                    <MapPin size={28} />
                 </div>
                 <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                   选点通 <span className="text-xs font-normal text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">选址</span>
                 </h3>
                 <p className="text-gray-600 text-sm mb-4">行业通用智能选址产品，基于 KA 客户交付项目，以解决方案工厂驱动搭建。</p>
                 <div className="border-t border-dashed border-gray-300 pt-4 mt-4">
                    <div className="text-xs font-bold text-[#6366f1]">选址特征数据可视化</div>
                 </div>
              </div>

              {/* Product 2 */}
              <div className="bg-[#f8fafc] border-2 border-neo-black/10 rounded-2xl p-6 hover:border-neo-black hover:bg-white transition-all duration-300 group">
                 <div className="w-14 h-14 bg-[#06b6d4] rounded-xl flex items-center justify-center text-white mb-6 border-2 border-neo-black shadow-neo-sm group-hover:-translate-y-1 transition-transform">
                    <BarChart3 size={28} />
                 </div>
                 <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                   经营通 <span className="text-xs font-normal text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">经营</span>
                 </h3>
                 <p className="text-gray-600 text-sm mb-4">线下经营数字化分析标品，提供门店经营诊断、全域商业数据地图。</p>
                 <div className="border-t border-dashed border-gray-300 pt-4 mt-4">
                    <div className="text-xs font-bold text-[#06b6d4]">地块推荐评分卡模型</div>
                 </div>
              </div>

              {/* Product 3 */}
              <div className="bg-[#f8fafc] border-2 border-neo-black/10 rounded-2xl p-6 hover:border-neo-black hover:bg-white transition-all duration-300 group">
                 <div className="w-14 h-14 bg-[#1e293b] rounded-xl flex items-center justify-center text-white mb-6 border-2 border-neo-black shadow-neo-sm group-hover:-translate-y-1 transition-transform">
                    <ScanSearch size={28} />
                 </div>
                 <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                   相地 <span className="text-xs font-normal text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">洞察</span>
                 </h3>
                 <p className="text-gray-600 text-sm mb-4">语言交互式行业洞察报告及选址推荐，灵活圈选区域，深度洞察商业潜力。</p>
                 <div className="border-t border-dashed border-gray-300 pt-4 mt-4">
                    <div className="text-xs font-bold text-[#1e293b]">自定义区域洞察评估</div>
                 </div>
              </div>
           </div>
        </section>

        {/* ---------------- AI PLATFORM PRODUCTS SECTION ---------------- */}
        <section>
          <div className="flex items-center gap-4 mb-12">
             <div className="w-14 h-14 bg-[#dbeafe] rounded-2xl border-2 border-neo-black flex items-center justify-center text-[#2563eb] shadow-neo-sm">
                <Server size={32} />
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-neo-black">
                AI 平台类产品
             </h2>
          </div>

          <div className="flex flex-col gap-8">
             {/* Product 1: 相地 */}
             <NeoCard className="bg-[#f0f9ff] p-8 flex flex-col md:flex-row gap-8 items-start" hoverEffect>
                <div className="w-24 h-24 bg-white border-2 border-neo-black rounded-2xl flex items-center justify-center shrink-0 shadow-neo-sm text-[#0ea5e9]">
                   <Globe size={48} />
                </div>
                <div className="flex-grow">
                   <h3 className="text-2xl font-black mb-4 text-neo-black">相地</h3>
                   <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      生成式行业洞察报告产品，基于大模型自动生成行业分析报告，结合语言交互式选址推荐能力。
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-white text-[#0ea5e9] font-bold text-sm rounded-full border border-[#0ea5e9]/30 shadow-sm">生成式AI</span>
                      <span className="px-4 py-1.5 bg-white text-[#0ea5e9] font-bold text-sm rounded-full border border-[#0ea5e9]/30 shadow-sm">行业洞察</span>
                      <span className="px-4 py-1.5 bg-white text-[#0ea5e9] font-bold text-sm rounded-full border border-[#0ea5e9]/30 shadow-sm">交互式推荐</span>
                   </div>
                </div>
             </NeoCard>

             {/* Product 2: 云睿时空智能大模型应用平台 */}
             <NeoCard className="bg-[#f0f9ff] p-8 flex flex-col md:flex-row gap-8 items-start" hoverEffect>
                <div className="w-24 h-24 bg-white border-2 border-neo-black rounded-2xl flex items-center justify-center shrink-0 shadow-neo-sm text-[#8b5cf6]">
                   <Cloud size={48} />
                </div>
                <div className="flex-grow">
                   <h3 className="text-2xl font-black mb-4 text-neo-black">云睿时空智能大模型应用平台</h3>
                   <ul className="space-y-3 mb-6 text-gray-600">
                      <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <span className="font-bold text-neo-black whitespace-nowrap">• 低技术门槛：</span>
                        <span>允许用户无需编程基础即可创建和发布智能体。</span>
                      </li>
                      <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <span className="font-bold text-neo-black whitespace-nowrap">• 多渠道部署：</span>
                        <span>支持将智能体发布为API接口或部署到钉钉、Web服务等多个渠道。</span>
                      </li>
                      <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <span className="font-bold text-neo-black whitespace-nowrap">• 多类型支持：</span>
                        <span>零售行业洞察报告、交通场景分析报告、ChatBI、业务客服机器人等。</span>
                      </li>
                   </ul>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-white text-[#0ea5e9] font-bold text-sm rounded-full border border-[#0ea5e9]/30 shadow-sm">低代码</span>
                      <span className="px-4 py-1.5 bg-white text-[#0ea5e9] font-bold text-sm rounded-full border border-[#0ea5e9]/30 shadow-sm">多渠道部署</span>
                      <span className="px-4 py-1.5 bg-white text-[#0ea5e9] font-bold text-sm rounded-full border border-[#0ea5e9]/30 shadow-sm">行业大模型</span>
                      <span className="px-4 py-1.5 bg-white text-[#0ea5e9] font-bold text-sm rounded-full border border-[#0ea5e9]/30 shadow-sm">智能体生态</span>
                   </div>
                </div>
             </NeoCard>
          </div>
        </section>

        {/* ---------------- AI INNOVATION PRODUCTS SECTION ---------------- */}
        <section>
          <div className="mb-12">
             <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-xs font-bold mb-4 flex items-center gap-2 w-fit">
                <Bot size={14} /> AI INNOVATION
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-neo-black mb-4">
                AI 创造有价值的产品
             </h2>
             <p className="text-gray-500 max-w-2xl">
               Exploring the intersection of Product Management and Artificial Intelligence.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* AI Card 1 */}
             <NeoCard className="bg-white flex flex-col" hoverEffect>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-16 h-16 bg-[#e0e7ff] rounded-2xl border-2 border-neo-black flex items-center justify-center text-[#4338ca]">
                      <Store size={32} />
                   </div>
                   <div className="font-bold text-lg">选址通识报告生成 Agent</div>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  基于 SHAP 图解释 AI 预测结果，自动生成专业的选址通识报告，让选址决策有据可依。
                </p>
                <div className="flex gap-2">
                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded border border-gray-200">SHAP</span>
                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded border border-gray-200">可解释AI</span>
                </div>
             </NeoCard>

             {/* AI Card 2 */}
             <NeoCard className="bg-white flex flex-col" hoverEffect>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-16 h-16 bg-[#ecfdf5] rounded-2xl border-2 border-neo-black flex items-center justify-center text-[#059669]">
                      <Globe size={32} />
                   </div>
                   <div className="font-bold text-lg">点位资讯挖掘 Agent</div>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  自动抓取、整合多源点位信息，形成结构化的点位资讯库，助力选址调研效率提升。
                </p>
                <div className="flex gap-2">
                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded border border-gray-200">数据挖掘</span>
                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded border border-gray-200">自动化</span>
                </div>
             </NeoCard>

             {/* AI Card 3 */}
             <NeoCard className="bg-white flex flex-col" hoverEffect>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-16 h-16 bg-[#fff7ed] rounded-2xl border-2 border-neo-black flex items-center justify-center text-[#ea580c]">
                      <FileText size={32} />
                   </div>
                   <div className="font-bold text-lg">数据报告智能解读 Agent</div>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  基于 LLM 对数据报告进行智能解读，自动提取关键洞察，辅助业务决策。
                </p>
                <div className="flex gap-2">
                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded border border-gray-200">LLM</span>
                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded border border-gray-200">智能解读</span>
                </div>
             </NeoCard>

             {/* ---------------- NEW MODULE: Companion Agent ---------------- */}
             <div className="md:col-span-2 lg:col-span-3 mt-12 mb-8">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-[#e0f2fe] border-2 border-neo-black rounded-3xl flex items-center justify-center shadow-neo-sm transform -rotate-3">
                           <MessageSquareMore size={32} className="text-neo-blue" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-neo-black">伴随 Agent 智能客服</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       {/* Card 1: 选点通-小选 */}
                       <NeoCard className="bg-white flex flex-col p-6" hoverEffect>
                           {/* Icon Area */}
                           <div className="w-full aspect-[4/3] bg-[#f0f9ff] border-2 border-neo-black/10 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                               <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/mapbg/400/300')] opacity-10 bg-cover"></div>
                               <div className="w-16 h-16 bg-white border-2 border-neo-black rounded-full flex items-center justify-center shadow-sm z-10 relative">
                                   <MapPin size={32} className="text-[#3b82f6]" />
                                   <div className="absolute -bottom-1 -right-1 bg-neo-yellow border-2 border-neo-black rounded-full p-1">
                                      <Search size={10} className="text-neo-black" />
                                   </div>
                               </div>
                           </div>
                           
                           <h4 className="text-2xl font-black mb-1">选点通-小选</h4>
                           <p className="text-sm text-gray-400 font-bold mb-4">选点通 SaaS 伴随 Agent</p>
                           <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                              选址全流程智能助手，支持选址咨询、操作指引、数据解读等场景。
                           </p>
                           
                           <div className="flex flex-wrap gap-2">
                              {['智能客服', '选址助手', '7x24'].map(t => (
                                  <span key={t} className="px-3 py-1 bg-[#ede9fe] text-[#7c3aed] text-xs font-bold rounded-lg">
                                      {t}
                                  </span>
                              ))}
                           </div>
                       </NeoCard>

                       {/* Card 2: 小零通 */}
                       <NeoCard className="bg-white flex flex-col p-6" hoverEffect>
                           {/* Icon Area */}
                           <div className="w-full aspect-[4/3] bg-[#f0f9ff] border-2 border-neo-black/10 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                               <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/chartbg/400/300')] opacity-10 bg-cover"></div>
                               <div className="w-16 h-16 bg-white border-2 border-neo-black rounded-full flex items-center justify-center shadow-sm z-10 relative">
                                   <TrendingUp size={32} className="text-[#3b82f6]" />
                                   <div className="absolute -bottom-1 -right-1 bg-neo-green border-2 border-neo-black rounded-full p-1">
                                      <FileText size={10} className="text-neo-black" />
                                   </div>
                               </div>
                           </div>
                           
                           <h4 className="text-2xl font-black mb-1">小零通</h4>
                           <p className="text-sm text-gray-400 font-bold mb-4">经营通 SaaS 伴随 Agent</p>
                           <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                              支持 ChatBI 数据查询、产品操作问答、零售行业行业知识咨询，一站式经营智能助手。
                           </p>
                           
                           <div className="flex flex-wrap gap-2">
                              {['ChatBI', '操作指引', '零售行业知识'].map(t => (
                                  <span key={t} className="px-3 py-1 bg-[#ede9fe] text-[#7c3aed] text-xs font-bold rounded-lg">
                                      {t}
                                  </span>
                              ))}
                           </div>
                       </NeoCard>

                       {/* Card 3: 晓得 */}
                       <NeoCard className="bg-white flex flex-col p-6" hoverEffect>
                           {/* Icon Area */}
                           <div className="w-full aspect-[4/3] bg-[#f0f9ff] border-2 border-neo-black/10 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                               <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/botbg/400/300')] opacity-10 bg-cover"></div>
                               <div className="w-16 h-16 bg-white border-2 border-neo-black rounded-full flex items-center justify-center shadow-sm z-10 relative">
                                   <Bot size={32} className="text-[#3b82f6]" />
                                   <div className="absolute -bottom-1 -right-1 bg-neo-pink border-2 border-neo-black rounded-full p-1">
                                      <GraduationCap size={10} className="text-neo-black" />
                                   </div>
                               </div>
                           </div>
                           
                           <h4 className="text-2xl font-black mb-1">晓得</h4>
                           <p className="text-sm text-gray-400 font-bold mb-4">人地产品知识助理</p>
                           <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                              支持人地业务通用知识问答、指标说明、流程了解等。基于 1000+ 词条沉淀，实现业务流程自动化指引。
                           </p>
                           
                           <div className="flex flex-wrap gap-2 mb-4">
                              {['知识库', '指标说明', '流程引导'].map(t => (
                                  <span key={t} className="px-3 py-1 bg-[#ede9fe] text-[#7c3aed] text-xs font-bold rounded-lg">
                                      {t}
                                  </span>
                              ))}
                           </div>
                           
                           {/* Stats Tags */}
                           <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-gray-200">
                               {['知识覆盖率 95%', '问答准确率 92%', '沉淀 1000+ 词条', '支持多轮交互'].map(t => (
                                   <span key={t} className="px-2 py-1 bg-[#ecfdf5] text-[#059669] text-[10px] font-bold rounded border border-[#059669]/20">
                                      {t}
                                   </span>
                               ))}
                           </div>
                       </NeoCard>
                  </div>
             </div>
             
             {/* VIBE-CODING Products Section */}
             <div className="md:col-span-2 lg:col-span-3 mt-4">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-[#e0f2fe] border-2 border-neo-black rounded-2xl flex items-center justify-center shadow-neo-sm">
                     <Laptop size={28} className="text-neo-blue" />
                  </div>
                  <h3 className="text-3xl font-black text-neo-black">VIBE-CODING 产品</h3>
               </div>

               <div className="flex flex-col gap-6">
                   {/* Card 1 */}
                   <NeoCard className="bg-white p-8 flex flex-col md:flex-row gap-8 items-start md:items-center" hoverEffect>
                      <div className="w-24 h-24 bg-[#ecfeff] border-2 border-neo-black rounded-3xl flex items-center justify-center shrink-0 shadow-sm">
                           <Lightbulb size={40} className="text-[#0891b2] fill-[#cffafe]" />
                           <div className="absolute mt-8 ml-8 bg-[#84cc16] rounded-full border-2 border-neo-black text-white p-1">
                               <span className="text-xs font-bold">$</span>
                           </div>
                      </div>
                      <div className="flex-1">
                           <h4 className="text-2xl font-black flex items-center gap-2 mb-3">
                              经营通系列产品官网
                              <a href="https://jyt-landing.app.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neo-blue">
                                  <ExternalLink size={18} />
                              </a>
                           </h4>
                           <p className="text-gray-600 mb-5 text-base leading-relaxed">
                              完整搭建经营通系列产品官网 (jyt-landing.app.com)，从设计到开发全程 AI 辅助完成。
                           </p>
                           <div className="flex flex-wrap gap-3">
                               <span className="px-3 py-1 bg-red-50 text-red-500 font-bold text-xs rounded border border-red-100">Next.js</span>
                               <span className="px-3 py-1 bg-red-50 text-red-500 font-bold text-xs rounded border border-red-100">全栈开发</span>
                               <span className="px-3 py-1 bg-red-50 text-red-500 font-bold text-xs rounded border border-red-100">AI辅助</span>
                           </div>
                      </div>
                   </NeoCard>

                   {/* Card 2 */}
                   <NeoCard className="bg-white p-8 flex flex-col md:flex-row gap-8 items-start md:items-center" hoverEffect>
                      <div className="w-24 h-24 bg-[#ecfeff] border-2 border-neo-black rounded-3xl flex items-center justify-center shrink-0 shadow-sm">
                           <ClipboardCheck size={40} className="text-[#0891b2] fill-[#cffafe]" />
                      </div>
                      <div className="flex-1">
                           <h4 className="text-2xl font-black flex items-center gap-2 mb-3">
                              闪评-Insight
                           </h4>
                           <p className="text-gray-600 mb-5 text-base leading-relaxed">
                              AI 驱动的数据报告自动生产平台，支持模板化报告生成与自定义配置。
                           </p>
                           <div className="flex flex-wrap gap-3">
                               <span className="px-3 py-1 bg-red-50 text-red-500 font-bold text-xs rounded border border-red-100">报告市场</span>
                               <span className="px-3 py-1 bg-red-50 text-red-500 font-bold text-xs rounded border border-red-100">报告生成</span>
                               <span className="px-3 py-1 bg-red-50 text-red-500 font-bold text-xs rounded border border-red-100">模板引擎</span>
                               <span className="px-3 py-1 bg-red-50 text-red-500 font-bold text-xs rounded border border-red-100">自动化</span>
                           </div>
                      </div>
                   </NeoCard>
               </div>
             </div>
          </div>
        </section>

      {/* ---------------- PLAYGROUND SECTION (VIBE WORKSHOP) ---------------- */}
      <section>
        <div className="mb-12">
            <div className="inline-block bg-neo-yellow px-2 py-1 text-xs font-bold mb-4 border border-neo-black rounded">
            SIDE PROJECTS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neo-black">
            Vibe <span className="bg-neo-black text-white px-2 inline-block transform rotate-1">Workshop</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
            为了让生活和工作简单、有趣一点点，和 AI 大聪明聊出来的一些代码边角料。
            </p>
        </div>

        <div className="flex flex-col gap-8">
            {/* Card 001: 新想法 · 探索中 - 小众店铺挖掘 Agent */}
            <div>
              <div className="flex items-center gap-3 mb-6 ml-1">
                  <Lightbulb className="w-8 h-8 text-neo-yellow fill-neo-yellow" />
                  <h3 className="text-2xl font-black text-neo-black">新想法 · 探索中</h3>
              </div>
              
              <div className="border-2 border-dashed border-[#e6d7b0] rounded-[2rem] p-8 md:p-12 bg-[#fffbf0] relative overflow-hidden group transition-all duration-300 hover:border-neo-black hover:bg-white hover:shadow-neo">
                   {/* Coming Soon Badge */}
                   <div className="absolute top-8 right-8 z-20">
                      <div className="bg-neo-yellow px-4 py-2 rounded-full border-2 border-neo-black shadow-neo-sm flex items-center gap-2 font-bold text-sm">
                          <Sparkles size={16} className="text-purple-600 fill-purple-600" />
                          Coming Soon
                      </div>
                   </div>

                   <div className="flex flex-col md:flex-row gap-8 items-center">
                       {/* Left Image (Map) */}
                       <div className="w-full md:w-48 shrink-0 flex justify-center">
                           <div className="w-32 h-32 bg-[#bfdbfe] border-2 border-neo-black rounded-lg transform -rotate-6 transition-transform group-hover:rotate-0 duration-300 flex items-center justify-center shadow-sm relative overflow-hidden">
                                <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/seed/map/200/200')] bg-cover"></div>
                                <Map size={48} className="text-[#1e3a8a] relative z-10" />
                                <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/50 rounded"></div>
                           </div>
                       </div>

                       {/* Right Content */}
                       <div className="flex-1 space-y-4">
                           <div>
                              <h2 className="text-3xl md:text-4xl font-black text-neo-black mb-2">
                                 小众店铺挖掘 Agent
                              </h2>
                              <p className="text-gray-400 font-medium">扫街榜灵感延伸</p>
                           </div>
                           
                           <p className="text-gray-600 text-lg leading-relaxed">
                              引入小红书 MCP，基于关键词搜索相关图文/视频，形成点位数据库后结合智能导航规划能力，基于用户需求给出周末出行打卡计划。
                           </p>

                           <div className="flex flex-wrap gap-3 pt-2">
                              {['小红书MCP', 'POI挖掘', '路线规划', '周末出行'].map(tag => (
                                  <span key={tag} className="px-4 py-1.5 bg-white border border-red-100 text-red-400 rounded-full text-sm font-bold shadow-sm">
                                      {tag}
                                  </span>
                              ))}
                           </div>
                       </div>
                   </div>
              </div>
            </div>

            {/* Card 002: 安心压 */}
            <div className="border-2 border-neo-black rounded-[2rem] p-8 md:p-12 bg-white shadow-neo hover:shadow-neo-hover transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4d4f] rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                  <div className="flex-1 space-y-6">
                      <div className="bg-neo-black text-white px-3 py-1 inline-block text-xs font-mono font-bold tracking-wider">
                         # 002
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-neo-black tracking-tight leading-tight">
                         安心压
                      </h2>
                      <div className="text-xl md:text-2xl font-bold text-[#ff4d4f]">
                          温暖陪伴，科学守护
                      </div>
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                          一款以拟人化IP“一二布布”为核心陪伴元素，融合AI智能分析与情感化交互的全龄友好血压健康管理APP。
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-3">
                         <span className="px-3 py-1 border-2 border-neo-black/10 rounded-full text-xs font-bold text-gray-500 flex items-center gap-2">
                            <span className="w-2 h-2 bg-neo-pink rounded-full"></span> 情感化交互
                         </span>
                         <span className="px-3 py-1 border-2 border-neo-black/10 rounded-full text-xs font-bold text-gray-500 flex items-center gap-2">
                            <span className="w-2 h-2 bg-neo-green rounded-full"></span> 家庭共享
                         </span>
                      </div>

                      <div className="pt-2">
                          <button className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-neo-black font-bold bg-white hover:bg-gray-50 transition-all active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
                              <ArrowRight size={20} /> 
                              <span>View Product</span>
                          </button>
                          <div className="mt-4 text-xs text-gray-400 font-mono tracking-widest pl-2">
                             RELEASED ON 2024.10.01
                          </div>
                      </div>
                  </div>
                  
                  {/* Visual: Phone UI */}
                  <div className="w-full md:w-[400px] aspect-square shrink-0 bg-white border-2 border-neo-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-8 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-48 h-full bg-[#fff1f2] border-2 border-neo-black rounded-3xl flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
                           <div className="absolute top-0 w-full h-6 bg-white border-b-2 border-neo-black/10 flex justify-center items-center gap-1">
                               <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
                           </div>
                           <Smile size={64} className="text-[#ff4d4f] mb-4" />
                           <div className="font-black text-xl">一二布布</div>
                           <div className="text-xs text-gray-500 mt-2 bg-white px-2 py-1 rounded border border-gray-200">
                              今日血压: 118/78
                           </div>
                           <div className="absolute bottom-4 left-4 right-4 h-16 bg-white rounded-xl border border-gray-200 shadow-sm"></div>
                      </div>
                  </div>
                </div>
            </div>

            {/* Card 003: 万物皆可拆 */}
            <div className="border-2 border-neo-black rounded-[2rem] p-8 md:p-12 bg-white shadow-neo hover:shadow-neo-hover transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#22c55e] rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                  <div className="flex-1 space-y-6">
                      <div className="bg-neo-black text-white px-3 py-1 inline-block text-xs font-mono font-bold tracking-wider">
                         # 003
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-neo-black tracking-tight leading-tight">
                         万物皆可拆
                      </h2>
                      <div className="text-xl md:text-2xl font-bold text-[#22c55e]">
                          拍一拍，看透物品的“内在”
                      </div>
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                          安心压内置智能物品解析引擎。只需上传图片或对准拍摄，AI 即可自动识别物品类型，并以交互式爆炸图形式，层层拆解其成分。
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3">
                         <span className="px-3 py-1 border-2 border-neo-black/10 rounded-full text-xs font-bold text-gray-500 flex items-center gap-2">
                            <Layers size={12} /> 成分拆解
                         </span>
                         <span className="px-3 py-1 border-2 border-neo-black/10 rounded-full text-xs font-bold text-gray-500 flex items-center gap-2">
                            <Activity size={12} /> 风险提示
                         </span>
                         <span className="px-3 py-1 border-2 border-neo-black/10 rounded-full text-xs font-bold text-gray-500 flex items-center gap-2">
                            <ScanLine size={12} /> 广覆盖
                         </span>
                      </div>

                      <div className="pt-2">
                          <button className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-neo-black font-bold bg-white hover:bg-gray-50 transition-all active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
                              <ArrowRight size={20} /> 
                              <span>View Product</span>
                          </button>
                          <div className="mt-4 text-xs text-gray-400 font-mono tracking-widest pl-2">
                             RELEASED ON 2024.12.15
                          </div>
                      </div>
                  </div>
                  
                  {/* Visual: Layers */}
                  <div className="w-full md:w-[400px] aspect-square shrink-0 bg-white border-2 border-neo-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-8 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="relative w-48 h-48 flex items-center justify-center">
                          {/* Top Layer */}
                          <div className="absolute z-30 bg-white border-2 border-neo-black rounded-xl w-32 h-32 flex items-center justify-center shadow-lg transform -translate-y-8 translate-x-8 group-hover:-translate-y-10 group-hover:translate-x-10 transition-transform duration-500">
                               <ScanLine size={48} className="text-[#22c55e]" />
                               <div className="absolute -top-3 -right-3 bg-neo-yellow border-2 border-neo-black px-2 py-1 text-xs font-bold">SCANNING</div>
                          </div>
                          {/* Middle Layer */}
                          <div className="absolute z-20 bg-gray-50 border-2 border-neo-black/50 rounded-xl w-32 h-32 flex items-center justify-center shadow-md">
                               <div className="text-xs font-mono text-gray-400">ANALYZING...</div>
                          </div>
                          {/* Bottom Layer */}
                          <div className="absolute z-10 bg-gray-100 border-2 border-neo-black/20 rounded-xl w-32 h-32 transform translate-y-8 -translate-x-8 group-hover:translate-y-10 group-hover:-translate-x-10 transition-transform duration-500 flex items-center justify-center">
                               <div className="grid grid-cols-2 gap-2 p-4 w-full">
                                  <div className="h-2 bg-gray-300 rounded"></div>
                                  <div className="h-2 bg-gray-300 rounded"></div>
                                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                               </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};