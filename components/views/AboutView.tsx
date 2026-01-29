import React from 'react';
import { NeoCard } from '../ui/NeoCard';
import { 
  BookOpen, MonitorPlay, Cpu, 
  Smile, ArrowRight
} from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 w-full font-sans">
      
      {/* --- HEADER --- */}
      <div className="mb-16">
         <h1 className="text-5xl md:text-7xl font-black text-neo-black mb-4 leading-tight">
            Welcome to <br/>
            <span className="relative inline-block px-4 py-1 mt-2">
               <span className="absolute inset-0 bg-neo-blue transform -rotate-2 border-2 border-neo-black rounded-lg shadow-neo"></span>
               <span className="relative z-10 text-white">又旋的世界!</span>
            </span>
         </h1>
      </div>

      {/* --- BIO & ID CARD GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
         
         {/* Left: Bio Text (Existing Content) */}
         <div className="space-y-6 text-lg text-neo-black leading-relaxed font-medium">
             <p>
                 我毕业于北京大学，目前就职于<strong>高德地图</strong>，负责 ToB 商业化与人地大数据产品。
             </p>
             <p>
                 比起纯粹的代码，我更喜欢研究数据背后的物理世界。致力于用技术手段解析城市脉搏，
                 同时也保持着对前端技术的热爱，喜欢折腾各种好玩的 UI 交互。
             </p>
             <p>
                 白天是追求逻辑与数据的 PM，晚上是追求 Vibe 的 Coder。
             </p>
             <p className="text-gray-500 text-base italic">
                (Anyway, 欢迎来到又旋的世界！)
             </p>
         </div>

         {/* Right: ID Card (New Layout) */}
         <div className="relative transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Sticker */}
            <div className="absolute -top-6 -right-6 z-20 animate-spin-slow">
                <div className="w-20 h-20 bg-neo-pink rounded-full border-2 border-neo-black flex items-center justify-center shadow-neo">
                    <Smile size={40} className="text-neo-black" />
                    <div className="absolute bottom-3 text-[8px] font-bold tracking-widest">XMMXOVO</div>
                </div>
            </div>

            <NeoCard className="bg-white p-0 overflow-hidden border-[3px]" hoverEffect={false}>
                {/* Green Header */}
                <div className="bg-neo-green h-24 border-b-2 border-neo-black p-4 relative">
                   <div className="text-[10px] font-bold tracking-widest opacity-60">SHANGHAI JIAOTONG UNIVERSITY (ALUMNI)</div>
                   <div className="absolute bottom-2 right-4 font-black text-4xl opacity-10">ID CARD</div>
                </div>

                <div className="p-6">
                   <div className="flex gap-4">
                      {/* Photo Area */}
                      <div className="w-32 h-40 bg-neo-blue border-2 border-neo-black rounded-xl overflow-hidden shrink-0 relative">
                          <img src="https://img.alicdn.com/imgextra/i4/O1CN01WEdnJz1NuahQmWK2w_!!6000000001630-2-tps-896-1200.png" alt="Profile" className="w-full h-full object-cover transition-all" />
                      </div>

                      {/* Info Fields */}
                      <div className="flex flex-col gap-2 w-full">
                         <div className="bg-neo-yellow border-2 border-neo-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                             <div className="text-[10px] font-bold uppercase text-gray-600">Name</div>
                             <div className="font-bold text-lg leading-none">何雨情</div>
                         </div>
                         <div className="bg-white border-2 border-neo-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                             <div className="text-[10px] font-bold uppercase text-gray-600">Major</div>
                             <div className="font-bold text-sm leading-tight">测绘工程、地球物理学</div>
                         </div>
                         <div className="bg-neo-pink/30 border-2 border-neo-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                             <div className="text-[10px] font-bold uppercase text-gray-600">Job</div>
                             <div className="font-bold text-sm leading-tight">大数据高级产品经理</div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="mt-6 flex items-end justify-between">
                       <div>
                           <div className="text-[10px] font-bold text-gray-400 mb-1">ID NO.</div>
                           <div className="font-mono font-bold text-sm">XM-20000508-OVO</div>
                           {/* Barcode representation */}
                           <div className="h-8 mt-2 flex items-end gap-[2px] opacity-70">
                               {[...Array(20)].map((_,i) => (
                                   <div key={i} className="bg-black w-1" style={{height: Math.random() > 0.5 ? '100%' : '60%'}}></div>
                               ))}
                           </div>
                       </div>
                       
                       <div className="w-12 h-12 rounded-full border-2 border-neo-black bg-neo-green flex items-center justify-center text-[10px] font-bold text-center leading-none p-1 transform rotate-12 shadow-neo-sm">
                           OFFICIAL<br/>VIBE
                       </div>
                   </div>
                </div>
            </NeoCard>
         </div>
      </div>

      {/* --- BANNER STATEMENT --- */}
      <div className="mb-24 transform -rotate-1">
          <div className="bg-neo-yellow border-2 border-neo-black p-6 shadow-neo text-center relative overflow-hidden">
               {/* Decorative tag */}
               <div className="absolute top-0 left-4 bg-white border-b-2 border-x-2 border-neo-black px-2 py-1 text-[10px] font-bold">
                   STATEMENT
               </div>
               <h2 className="text-2xl md:text-3xl font-black mt-4 mb-2">
                   "每一个大多数人看起来离经叛道的选择都让我很兴奋"
               </h2>
               <div className="w-full h-0.5 bg-neo-black/10 my-4"></div>
               <p className="font-medium text-gray-700">
                   我正在朝着自己喜欢的方向前进！不知道 3年 5年 10年后的我会成为什么样的人，过上什么样的生活呢？
               </p>
          </div>
      </div>

      {/* --- RECENT UPDATES --- */}
      <div className="mb-24">
         <div className="flex items-center gap-2 mb-8">
             <div className="w-3 h-3 rounded-full border-2 border-neo-black bg-white"></div>
             <div className="w-3 h-3 rounded-full border-2 border-neo-black bg-neo-pink"></div>
         </div>
         
         <div className="bg-neo-pink border-2 border-neo-black inline-block px-6 py-2 shadow-neo mb-12 transform -rotate-2">
             <h2 className="text-xl font-black text-neo-black uppercase">近日生活 | Recent Updates</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Arrows (Absolute for desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-16 h-8 border-t-2 border-r-2 border-dashed border-neo-black rounded-tr-3xl -translate-y-1/2 translate-x-[-50%] z-0"></div>
            <div className="hidden md:block absolute top-1/2 left-2/3 w-16 h-8 border-b-2 border-r-2 border-dashed border-neo-black rounded-br-3xl -translate-y-1/2 translate-x-[-50%] z-0"></div>

            {/* Item 1 */}
            <div className="bg-white border-2 border-neo-black rounded-xl p-4 shadow-neo relative z-10 flex items-center gap-4">
               <div className="w-10 h-10 bg-neo-blue rounded-lg border-2 border-neo-black flex items-center justify-center text-white shrink-0">
                  <BookOpen size={20} />
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-500 mb-1">最近在读</div>
                  <div className="font-bold text-sm">《纳瓦尔宝典》</div>
               </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white border-2 border-neo-black rounded-xl p-4 shadow-neo relative z-10 flex items-center gap-4">
               <div className="w-10 h-10 bg-neo-pink rounded-lg border-2 border-neo-black flex items-center justify-center text-white shrink-0">
                  <MonitorPlay size={20} />
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-500 mb-1">最近狂刷</div>
                  <div className="font-bold text-sm">鳌太线失事视频</div>
               </div>
               <div className="absolute top-2 right-2">
                  <ArrowRight size={14} className="transform rotate-45 text-gray-400" />
               </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white border-2 border-neo-black rounded-xl p-4 shadow-neo relative z-10 flex items-center gap-4">
               <div className="w-10 h-10 bg-neo-green rounded-lg border-2 border-neo-black flex items-center justify-center text-white shrink-0">
                  <Cpu size={20} />
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-500 mb-1">最近感兴趣</div>
                  <div className="font-bold text-sm">AI 编程</div>
               </div>
            </div>
         </div>
      </div>

      {/* --- GAME PROGRESS (TIMELINE) --- */}
      <div>
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black flex items-center justify-center gap-3">
                 地球Online <span className="bg-neo-pink px-2 text-2xl border-2 border-neo-black shadow-neo-sm transform rotate-1">开放游戏进度</span>
             </h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
              {/* Vertical Center Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 border-l-2 border-dashed border-neo-black/30"></div>

              {/* Node 1: Main Mission */}
              <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 group">
                  {/* Label Left (Desktop) */}
                  <div className="hidden md:block w-5/12 text-right pr-8">
                      <div className="inline-block bg-white border-2 border-neo-black px-4 py-2 rounded-lg shadow-neo font-bold transform -rotate-2">
                         <span className="text-neo-pink mr-2">●</span>
                         主线任务
                      </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-neo-black rounded-full z-10 md:-translate-x-1/2 flex items-center justify-center">
                     <div className="w-2 h-2 bg-neo-black rounded-full"></div>
                  </div>

                  {/* Content Right */}
                  <div className="ml-16 md:ml-0 md:w-5/12 pl-0 md:pl-8">
                      <div className="bg-white border-2 border-neo-black rounded-xl p-4 shadow-neo relative">
                          <div className="absolute -top-3 left-4 bg-neo-black text-white text-[10px] px-2 py-0.5 rounded font-mono">
                             2022.07 [ACHIEVED]
                          </div>
                          <div className="mt-2 font-bold text-lg">人地大数据产品经理</div>
                          <div className="text-xs font-bold text-neo-blue mb-2">高德地图</div>
                          <div className="text-sm text-gray-600">
                             负责人地大数据产品的规划与设计，通过数据驱动的方式优化地图服务体验。
                          </div>
                      </div>
                  </div>
              </div>

              {/* Node 2: Side Mission */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                   {/* Label Right (Desktop - visually left in row-reverse) */}
                  <div className="hidden md:block w-5/12 text-left pl-8">
                      <div className="inline-block bg-white border-2 border-neo-black px-4 py-2 rounded-lg shadow-neo font-bold transform rotate-2">
                         <span className="text-neo-green mr-2">●</span>
                         支线任务
                      </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-neo-black border-4 border-white ring-2 ring-neo-black rounded-full z-10 md:-translate-x-1/2 flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content Left */}
                  <div className="ml-16 md:ml-0 md:w-5/12 md:text-right pr-0 md:pr-8">
                       <div className="bg-pink-50 border-2 border-neo-black rounded-xl p-4 shadow-neo relative">
                          <div className="absolute -top-3 right-4 md:right-auto md:left-4 bg-neo-pink text-neo-black border-2 border-neo-black text-[10px] px-2 py-0.5 rounded font-mono">
                             2024.01 [LOADING]
                          </div>
                          <div className="mt-2 font-bold text-lg">AI 独立开发者</div>
                          <div className="text-xs font-bold text-neo-pink mb-2">个人探索</div>
                          <div className="text-sm text-gray-600">
                             业余时间持续学习 AI 技术，尝试将产品思维与 AI 能力结合，打造有价值的 AI 应用。
                          </div>
                          <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-neo-black text-white rounded-full flex items-center justify-center border-2 border-white text-xs">
                             &lt;&gt;
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>

    </div>
  );
};
