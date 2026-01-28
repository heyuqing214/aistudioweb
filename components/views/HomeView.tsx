import React, { useState } from 'react';
import { NeoCard } from '../ui/NeoCard';
import { NeoButton } from '../ui/NeoButton';
import { 
  User, ArrowRight, MapPin, Database, Sparkles, Sparkle, 
  Store, BarChart3, ScanSearch, Bot, Code2, FileText, Globe,
  HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { ViewState } from '../../types';

interface HomeViewProps {
  setView: (view: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const marqueeItems = [
    "AI 探索", "用户体验", "人地大数据", "独立开发", "创新设计", "技术热爱", "产品思维"
  ];

  const faqs = [
    {
      question: "你为什么想成为 AI 独立开发者?",
      answer: "作为产品经理，我深刻理解用户需求和产品价值。AI 时代降低了技术门槛，让产品人也能独立实现想法。我希望将产品思维与 AI 技术结合，创造真正解决问题的产品。"
    },
    {
      question: "你目前在高德地图做什么工作?",
      answer: "负责 ToB 商业化与人地大数据产品。深耕大数据选址领域，通过数据驱动的方式优化地图服务体验，探索 AI 技术在地理信息领域的创新应用。"
    },
    {
      question: "你的 AI 作品是否开源?",
      answer: "是的，我坚信开源精神。目前大部分实验性项目都已在 GitHub 开源，欢迎感兴趣的朋友一起交流探讨，共同推动 AI 应用落地。"
    },
    {
      question: "如何与你取得联系?",
      answer: "非常欢迎交流！你可以通过页面底部的社交媒体图标找到我，或者直接发送邮件。我通常会在 24 小时内回复。"
    }
  ];

  const MarqueeContent = () => (
    <div className="flex items-center gap-12 px-6 shrink-0">
      {marqueeItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-xl md:text-2xl font-bold tracking-wider">{item}</span>
          <Sparkle className="text-[#8B5CF6] fill-current" size={20} />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          <div className="space-y-6 relative z-10">
            <div className="inline-block bg-white border-2 border-neo-black px-4 py-1.5 rounded-full text-sm font-bold text-neo-black shadow-neo-sm transform -rotate-1">
               <span className="text-neo-blue mr-2">●</span>
               正在探索 AI 的无限可能
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-neo-black">
              你好，我是 <span className="relative inline-block px-2 transform -rotate-2">
                <span className="absolute inset-0 bg-neo-pink border-2 border-neo-black rounded-lg translate-y-2 translate-x-1"></span>
                <span className="relative z-10">又旋</span>
              </span>
              <br />
              Building the <br/>
              future with <span className="bg-neo-blue px-2 border-2 border-neo-black rounded-md text-white shadow-neo-sm inline-block transform rotate-1">Data & AI</span>
            </h1>
            
            <div className="text-lg md:text-xl font-medium text-gray-700 space-y-4 leading-relaxed max-w-lg">
              <p>
                目前就职于<strong>高德地图</strong>， <span className="underline decoration-4 decoration-neo-yellow underline-offset-4">人地大数据高级产品经理</span>。
              </p>
              <p className="text-base text-gray-600">
                热衷于将地图产品与 AI 技术结合，探索数据驱动的创新可能。
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <NeoButton 
                label="More about me" 
                icon={<User size={18} />} 
                variant="black" 
                onClick={() => setView(ViewState.ABOUT)}
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end relative">
             <div className="absolute -top-6 right-0 md:right-10 z-20 hidden md:block animate-[bounce_3s_infinite]">
                <div className="bg-white border-2 border-neo-black px-4 py-2 rounded-xl font-bold shadow-neo transform rotate-6 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-neo-blue"></span>
                   地图SaaS产品
                </div>
             </div>
             <div className="absolute top-1/2 -left-4 md:-left-8 z-20 hidden md:block animate-[bounce_4s_infinite]">
                <div className="bg-white border-2 border-neo-black px-4 py-2 rounded-xl font-bold shadow-neo transform -rotate-6 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-neo-pink"></span>
                   数据洞察
                </div>
             </div>
             <div className="absolute -bottom-6 right-8 md:-right-6 z-20 hidden md:block animate-[bounce_5s_infinite]">
                <div className="bg-white border-2 border-neo-black px-4 py-2 rounded-xl font-bold shadow-neo transform -rotate-3 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                   AI 探索
                </div>
             </div>

             <NeoCard className="w-full max-w-md aspect-[4/5] flex items-center justify-center bg-[#5B86E5] relative overflow-hidden p-0 group">
                <img 
                  src="https://img.alicdn.com/imgextra/i4/O1CN01WEdnJz1NuahQmWK2w_!!6000000001630-2-tps-896-1200.png" 
                  alt="Profile Illustration" 
                  className="w-full h-full object-cover"
                />
             </NeoCard>
          </div>
        </div>
      </div>

      {/* ---------------- MARQUEE SECTION ---------------- */}
      <div className="w-full bg-neo-black border-y-2 border-neo-black py-4 mb-20 overflow-hidden relative">
        <div className="flex w-max animate-marquee text-white">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20 w-full flex flex-col gap-32">
        
        {/* ---------------- CAREER PATH SECTION (OVERVIEW) ---------------- */}
        <section>
          <div className="text-center mb-16">
            <div className="inline-block bg-neo-bg px-4 py-1 rounded-full text-xs font-bold text-gray-500 mb-4 border border-gray-300">
               职业旅程
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neo-black">
               从产品经理到 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-neo-pink relative inline-block">
                 AI 开发者
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-neo-pink opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                 </svg>
               </span>
            </h2>
            <p className="text-gray-500 mt-4 mb-8">一段不断探索、持续成长的职业之路</p>
            <NeoButton label="View Full Bio" icon={<ArrowRight size={18}/>} variant="secondary" onClick={() => setView(ViewState.ABOUT)} />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-neo-blue/50 -translate-x-1/2"></div>
             
             <div className="relative">
                <div className="hidden md:block absolute right-[-54px] top-8 w-4 h-4 rounded-full bg-white border-4 border-[#6366f1] z-10"></div>
                <NeoCard className="bg-[#f5f7ff]" hoverEffect>
                   <div className="inline-block bg-[#6366f1] text-white px-3 py-1 rounded-full text-xs font-bold mb-4">2022 - 至今</div>
                   <h3 className="text-2xl font-black mb-1">人地大数据产品经理</h3>
                   <div className="text-[#6366f1] font-bold text-sm mb-4">高德地图</div>
                   <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      负责人地大数据产品的规划与设计，通过数据驱动的方式优化地图服务体验，探索 AI 技术在地理信息领域的创新应用。
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600">数据产品</span>
                      <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600">toB SaaS产品</span>
                      <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600">大客户服务</span>
                   </div>
                </NeoCard>
             </div>

             <div className="relative mt-8 md:mt-48">
                <div className="hidden md:block absolute left-[-54px] top-8 w-4 h-4 rounded-full bg-white border-4 border-neo-pink z-10"></div>
                <NeoCard className="bg-white" hoverEffect>
                   <div className="inline-block bg-neo-pink text-white px-3 py-1 rounded-full text-xs font-bold mb-4">持续进行</div>
                   <h3 className="text-2xl font-black mb-1">AI 独立开发者（进行中）</h3>
                   <div className="text-neo-pink font-bold text-sm mb-4">个人探索</div>
                   <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      业余时间持续学习 AI 技术，尝试将产品思维与 AI 能力结合，打造有价值的 AI 应用。
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600">AI 应用开发</span>
                      <span className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600">Prompt Engineering</span>
                      <span className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600">独立产品</span>
                   </div>
                </NeoCard>
             </div>
          </div>
        </section>

        {/* ---------------- DATA PRODUCTS SECTION (OVERVIEW) ---------------- */}
        <section className="bg-white border-2 border-neo-black rounded-[2rem] p-8 md:p-12 shadow-neo relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Database size={200} />
           </div>
           
           <div className="text-center mb-16 relative z-10">
             <div className="inline-block bg-[#E0E7FF] text-[#4338ca] px-4 py-1 rounded-full text-xs font-bold mb-4">
                大数据选址产品
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-neo-black mb-4">
                用数据驱动 <span className="bg-neo-blue px-2 text-white transform -rotate-1 inline-block border-2 border-neo-black shadow-neo-sm">商业决策</span>
             </h2>
             <p className="text-gray-500 mb-8">深耕大数据选址领域，打造服务零售品牌的数字化选址与经营分析产品</p>
             <NeoButton label="Explore All Products" icon={<ArrowRight size={18}/>} variant="primary" onClick={() => setView(ViewState.PRODUCTS)} />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-[#f8fafc] border-2 border-neo-black/10 rounded-2xl p-6 hover:border-neo-black hover:bg-white transition-all duration-300 group">
                 <div className="w-14 h-14 bg-[#6366f1] rounded-xl flex items-center justify-center text-white mb-6 border-2 border-neo-black shadow-neo-sm group-hover:-translate-y-1 transition-transform">
                    <MapPin size={28} />
                 </div>
                 <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                   选点通 <span className="text-xs font-normal text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">选址</span>
                 </h3>
                 <p className="text-gray-600 text-sm mb-4">行业通用智能选址产品，基于 KA 客户交付项目，以解决方案工厂驱动搭建。</p>
              </div>

              <div className="bg-[#f8fafc] border-2 border-neo-black/10 rounded-2xl p-6 hover:border-neo-black hover:bg-white transition-all duration-300 group">
                 <div className="w-14 h-14 bg-[#06b6d4] rounded-xl flex items-center justify-center text-white mb-6 border-2 border-neo-black shadow-neo-sm group-hover:-translate-y-1 transition-transform">
                    <BarChart3 size={28} />
                 </div>
                 <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                   经营通 <span className="text-xs font-normal text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">经营</span>
                 </h3>
                 <p className="text-gray-600 text-sm mb-4">线下经营数字化分析标品，提供门店经营诊断、全域商业数据地图。</p>
              </div>

              <div className="bg-[#f8fafc] border-2 border-neo-black/10 rounded-2xl p-6 hover:border-neo-black hover:bg-white transition-all duration-300 group">
                 <div className="w-14 h-14 bg-[#1e293b] rounded-xl flex items-center justify-center text-white mb-6 border-2 border-neo-black shadow-neo-sm group-hover:-translate-y-1 transition-transform">
                    <ScanSearch size={28} />
                 </div>
                 <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                   相地 <span className="text-xs font-normal text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">洞察</span>
                 </h3>
                 <p className="text-gray-600 text-sm mb-4">语言交互式行业洞察报告及选址推荐，灵活圈选区域，深度洞察商业潜力。</p>
              </div>
           </div>
        </section>

        {/* ---------------- AI PRODUCTS SECTION (OVERVIEW) ---------------- */}
        <section>
          <div className="text-center mb-16">
             <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-xs font-bold mb-4 flex items-center justify-center gap-2 w-fit mx-auto">
                <Bot size={14} /> AI 探索作品
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-neo-black mb-4">
                用 AI 创造 <span className="bg-[#8B5CF6] px-2 text-white transform rotate-1 inline-block border-2 border-neo-black shadow-neo-sm">有价值的产品</span>
             </h2>
             <p className="text-gray-500 mb-8">从业务耦合 Agent 到智能客服，从平台产品到 Vibe-Coding 实践</p>
             <NeoButton label="Enter AI Lab" icon={<ArrowRight size={18}/>} variant="black" onClick={() => setView(ViewState.PRODUCTS)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
             </NeoCard>

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
             </NeoCard>

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
             </NeoCard>
          </div>
        </section>

        {/* ---------------- FAQ SECTION ---------------- */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Content */}
            <div>
                <div className="inline-flex items-center gap-2 bg-[#f3e8ff] text-[#9333ea] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#9333ea]/20 shadow-sm">
                    <HelpCircle size={16} /> 常见问题
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-neo-black mt-8 mb-6 leading-tight">
                    你可能想<span className="relative inline-block text-[#8b5cf6]">
                        了解
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#8b5cf6] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                           <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                        </svg>
                    </span>的
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                    关于我的一些常见问题和回答，帮助你更好地了解我。如果还有其他好奇的地方，欢迎随时联系。
                </p>
            </div>

            {/* Right Accordion */}
            <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className={`
                            border-2 rounded-2xl p-6 transition-all duration-300 cursor-pointer relative overflow-hidden
                            ${openFaq === index 
                                ? 'bg-[#f5f3ff] border-[#8b5cf6] shadow-neo' 
                                : 'bg-white border-neo-black/10 hover:border-neo-black hover:shadow-sm'
                            }
                        `}
                    >
                        <div className="flex justify-between items-center gap-4">
                            <h3 className={`text-lg font-bold transition-colors ${openFaq === index ? 'text-[#8b5cf6]' : 'text-neo-black'}`}>
                                {faq.question}
                            </h3>
                            <div className={`
                                w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors
                                ${openFaq === index 
                                    ? 'bg-[#8b5cf6] border-[#8b5cf6] text-white' 
                                    : 'bg-gray-100 border-gray-200 text-gray-500'
                                }
                            `}>
                                {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </div>
                        </div>
                        
                        <div className={`
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${openFaq === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                        `}>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};