import React, { useState } from 'react';
import { NeoCard } from '../ui/NeoCard';
import { Search, ArrowUpRight, PlayCircle, BookOpen } from 'lucide-react';
import { ViewState } from '../../types';

interface ListViewProps {
  type: ViewState.ARTICLES | ViewState.VIDEOS;
}

export const ListView: React.FC<ListViewProps> = ({ type }) => {
  const isVideo = type === ViewState.VIDEOS;
  const [searchTerm, setSearchTerm] = useState('');

  const items = isVideo ? [
    { id: '1', title: '有一个捧杀式领导是什么体验？', meta: 'Bilibili • 5669 views', date: '02:27', image: 'https://picsum.photos/seed/video1/400/250', tag: '职场' },
    { id: '2', title: 'Vlog. 吸取大学生的元气才能生存下去', meta: 'Bilibili • 6281 views', date: '02:28', image: 'https://picsum.photos/seed/video2/400/250', tag: 'VLOG' },
    { id: '3', title: '25岁纯牛马全年消费支出大盘点', meta: 'Bilibili • 2.2w views', date: '02:48', image: 'https://picsum.photos/seed/video3/400/250', tag: '生活' },
    { id: '4', title: 'AI 编程实战：从零搭建个人网站', meta: 'YouTube • 1.2k views', date: '12:30', image: 'https://picsum.photos/seed/video4/400/250', tag: 'Coding' },
  ] : [
    { id: '1', title: '我可有可无的网友', meta: '2021-08-19', date: '随笔', image: 'https://picsum.photos/seed/art1/400/200', tag: 'Essay' },
    { id: '2', title: '#SJTU游离日记#0004', meta: '2021-05-03', date: '日记', image: 'https://picsum.photos/seed/art2/400/200', tag: 'Diary' },
    { id: '3', title: '关于枸杞岛和我的恋爱', meta: '2021-02-28', date: '情感', image: 'https://picsum.photos/seed/art3/400/200', tag: 'Travel' },
    { id: '4', title: '产品经理的自我修养', meta: '2023-11-11', date: '干货', image: 'https://picsum.photos/seed/art4/400/200', tag: 'PM' },
  ];

  return (
    <div className="pt-28 pb-12 max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-neo-black text-white px-3 py-1 text-xs font-bold rounded mb-4 tracking-wider">
           {isVideo ? 'CINEMA HALL' : 'READING ROOM'}
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4 relative z-10">
          {isVideo ? (
            <>Video <span className="bg-neo-blue text-white px-2 transform -rotate-2 inline-block border-2 border-neo-black">Library</span></>
          ) : (
            <>The <span className="bg-neo-green px-2 border-2 border-neo-black inline-block transform rotate-1">Journal</span></>
          )}
        </h1>
        <p className="text-gray-600 font-medium">
          {isVideo 
            ? '分享抽象唠嗑视频、日常生活vlog、AI编程的小白进阶史！' 
            : '描绘乱七八糟稀奇古怪的世界，人类的大脑真神奇。'}
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-12">
        <input 
          type="text"
          placeholder={isVideo ? "搜索视频..." : "搜索文章标题或关键词..."}
          className="w-full border-2 border-neo-black rounded-full py-4 pl-14 pr-6 text-lg font-bold shadow-neo focus:outline-none focus:shadow-neo-hover transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neo-black" size={24} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <NeoCard key={item.id} hoverEffect className="group flex flex-col h-full overflow-hidden p-0" onClick={() => {}}>
            <div className="relative aspect-video border-b-2 border-neo-black overflow-hidden bg-gray-100">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-2 left-2">
                 <span className={`px-2 py-1 text-xs font-bold border border-neo-black rounded shadow-sm ${isVideo ? 'bg-neo-pink' : 'bg-neo-yellow'}`}>
                    {item.tag}
                 </span>
               </div>
               {isVideo && (
                 <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded font-mono">
                   {item.date}
                 </div>
               )}
            </div>
            <div className="p-5 flex flex-col flex-grow relative bg-white">
               <h3 className="text-xl font-bold mb-3 leading-snug line-clamp-2">{item.title}</h3>
               
               <div className="mt-auto flex justify-between items-center text-sm text-gray-500 font-medium pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    {isVideo ? <PlayCircle size={16}/> : <BookOpen size={16}/>}
                    <span>{item.meta}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-neo-black flex items-center justify-center bg-neo-yellow group-hover:bg-neo-green transition-colors">
                     <ArrowUpRight size={18} className="text-neo-black" />
                  </div>
               </div>
            </div>
          </NeoCard>
        ))}
      </div>
    </div>
  );
};
