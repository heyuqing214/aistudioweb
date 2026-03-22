import { useEffect, useState } from 'react';
import { BookOpen, Calendar, Tag } from 'lucide-react';
import { diaryContent, diaryMetas } from '../data/diaries';
import type { ViewState } from '../types';

interface ArticleDetailViewProps {
  articleId: string;
  setView: (view: ViewState) => void;
}

// 简单的 Markdown 解析器（支持基础语法）
function parseMarkdown(markdown: string): React.ReactNode[] {
  const lines = markdown.split('\n');
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 代码块
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockContent = [];
      } else {
        elements.push(
          <pre key={elements.length} className="bg-slate-50 text-slate-800 p-4 rounded-lg border border-slate-200 overflow-x-auto my-4 font-mono text-sm">
            <code>{codeBlockContent.join('\n')}</code>
          </pre>
        );
        inCodeBlock = false;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // 空行
    if (line.trim() === '') {
      // 结束列表
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-1.5 mb-4 pl-4 text-slate-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      // 结束表格
      if (inTable && tableRows.length > 0) {
        elements.push(
          <table key={elements.length} className="w-full bg-white border border-slate-200 my-4 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                {tableRows[0].map((cell, idx) => (
                  <th key={idx} className="p-3 text-left font-semibold text-slate-800 border-b border-slate-200">{parseInlineMarkdown(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="p-3 border-b border-slate-100 text-slate-700">{parseInlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
        tableRows = [];
        inTable = false;
      }
      continue;
    }

    // 表格行
    if (line.includes('|') && !line.startsWith('#') && !line.startsWith('-')) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      const cells = line.split('|').map(c => c.trim()).filter(c => c);
      tableRows.push(cells);
      continue;
    }

    // 标题
    if (line.startsWith('# ')) {
      // 先关闭之前的元素
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-1.5 mb-4 pl-4 text-slate-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      if (inTable && tableRows.length > 0) {
        elements.push(
          <table key={elements.length} className="w-full bg-white border border-slate-200 my-4 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                {tableRows[0].map((cell, idx) => (
                  <th key={idx} className="p-3 text-left font-semibold text-slate-800 border-b border-slate-200">{parseInlineMarkdown(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="p-3 border-b border-slate-100 text-slate-700">{parseInlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
        tableRows = [];
        inTable = false;
      }
      
      elements.push(
        <h1 key={elements.length} className="text-4xl font-bold mt-8 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {line.substring(2)}
        </h1>
      );
      continue;
    }

    if (line.startsWith('## ')) {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-1.5 mb-4 pl-4 text-slate-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      if (inTable && tableRows.length > 0) {
        elements.push(
          <table key={elements.length} className="w-full bg-white border border-slate-200 my-4 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                {tableRows[0].map((cell, idx) => (
                  <th key={idx} className="p-3 text-left font-semibold text-slate-800 border-b border-slate-200">{parseInlineMarkdown(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="p-3 border-b border-slate-100 text-slate-700">{parseInlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
        tableRows = [];
        inTable = false;
      }
      
      elements.push(
        <h2 key={elements.length} className="text-3xl font-bold mt-6 mb-4 text-slate-800 border-l-4 border-purple-500 pl-4">
          {line.substring(3)}
        </h2>
      );
      continue;
    }

    if (line.startsWith('### ')) {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-1.5 mb-4 pl-4 text-slate-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      
      elements.push(
        <h3 key={elements.length} className="text-2xl font-bold mt-4 mb-3 text-slate-700">
          {line.substring(4)}
        </h3>
      );
      continue;
    }

    // 列表项
    if (line.startsWith('- ')) {
      if (!inTable) {
        inList = true;
        listItems.push(line.substring(2));
      }
      continue;
    }

    // 普通段落
    if (line.trim()) {
      // 先关闭之前的元素
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-1.5 mb-4 pl-4 text-slate-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      if (inTable && tableRows.length > 0) {
        elements.push(
          <table key={elements.length} className="w-full bg-white border border-slate-200 my-4 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                {tableRows[0].map((cell, idx) => (
                  <th key={idx} className="p-3 text-left font-semibold text-slate-800 border-b border-slate-200">{parseInlineMarkdown(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="p-3 border-b border-slate-100 text-slate-700">{parseInlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
        tableRows = [];
        inTable = false;
      }
      
      elements.push(
        <p key={elements.length} className="my-3 leading-relaxed text-slate-700">
          {parseInlineMarkdown(line)}
        </p>
      );
    }
  }

  // 关闭剩余的元素
  if (inList && listItems.length > 0) {
    elements.push(
      <ul key={elements.length} className="list-disc list-inside space-y-1.5 mb-4 pl-4 text-slate-700">
        {listItems.map((item, idx) => (
          <li key={idx}>{parseInlineMarkdown(item)}</li>
        ))}
      </ul>
    );
  }
  if (inTable && tableRows.length > 0) {
    elements.push(
      <table key={elements.length} className="w-full bg-white border border-slate-200 my-4 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-50">
            {tableRows[0].map((cell, idx) => (
              <th key={idx} className="p-3 text-left font-semibold text-slate-800 border-b border-slate-200">{parseInlineMarkdown(cell)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.slice(1).map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="p-3 border-b border-slate-100 text-slate-700">{parseInlineMarkdown(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return elements;
}

// 行内 Markdown 解析
function parseInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // 粗体
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch) {
      parts.push(
        <span key={key++}>{remaining.substring(0, boldMatch.index)}</span>,
        <strong key={key++} className="font-semibold text-purple-700">{boldMatch[1]}</strong>
      );
      remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
      continue;
    }

    // 斜体
    const italicMatch = remaining.match(/\*(.+?)\*/);
    if (italicMatch) {
      parts.push(
        <span key={key++}>{remaining.substring(0, italicMatch.index)}</span>,
        <em key={key++} className="italic text-pink-600">{italicMatch[1]}</em>
      );
      remaining = remaining.substring(italicMatch.index + italicMatch[0].length);
      continue;
    }

    // 代码
    const codeMatch = remaining.match(/`(.+?)`/);
    if (codeMatch) {
      parts.push(
        <span key={key++}>{remaining.substring(0, codeMatch.index)}</span>,
        <code key={key++} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-sm font-mono">{codeMatch[1]}</code>
      );
      remaining = remaining.substring(codeMatch.index + codeMatch[0].length);
      continue;
    }

    // 链接
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);
    if (linkMatch) {
      parts.push(
        <span key={key++}>{remaining.substring(0, linkMatch.index)}</span>,
        <a 
          key={key++} 
          href={linkMatch[2]} 
          className="text-purple-600 hover:text-purple-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.substring(linkMatch.index + linkMatch[0].length);
      continue;
    }

    parts.push(remaining);
    break;
  }

  return parts;
}

export default function ArticleDetailView({ articleId, setView }: ArticleDetailViewProps) {
  const content = diaryContent[articleId];
  const meta = diaryMetas[articleId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content || !meta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">文章不存在</h2>
          <button
            onClick={() => setView(ViewState.ARTICLES)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium text-white transition-colors"
          >
            返回文章列表
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 文章头部 */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {meta.tag}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {meta.title}
          </h1>

          <div className="flex items-center gap-4 text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-mono text-sm">{meta.date}</span>
            </div>
          </div>
        </div>

        {/* 文章内容 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mt-8">
          <div className="prose prose-slate prose-lg max-w-none">
            {parseMarkdown(content)}
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-8 text-center text-slate-500">
          <p className="text-sm">🦞 龙虾养成创业日记 · 记录从 0 到 1 的 AI Agent 创业之路</p>
        </div>
      </div>
    </div>
  );
}
