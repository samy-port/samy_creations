import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { blogsData, BlogPost } from '../data/blogsData';
import { BlogModal } from './BlogModal';
import { Logo } from './Logo';

interface BlogSectionProps {
  currentLogoMask: string;
  onLogoMaskChange: (maskClass: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  currentLogoMask,
  onLogoMaskChange,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI & Performance', 'UX & Neuromarketing', 'SEO & Organic Growth', 'Analytics & Attribution'];

  const colorPresets = [
    { label: 'Royal Blue', class: 'bg-blue-600' },
    { label: 'Neon Cyan', class: 'bg-cyan-400' },
    { label: 'Electric Violet', class: 'bg-purple-600' },
    { label: 'Pure White', class: 'bg-white' },
    { label: 'Sunset Amber', class: 'bg-amber-400' },
    {
      label: 'Holographic Gradient',
      class: 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500',
    },
  ];

  const filteredBlogs = blogsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-xs font-mono uppercase tracking-widest block mb-2">
            Thought Leadership
          </span>
          <h2 className="text-4xl md:text-6xl text-white tracking-tight font-serif mb-6">
            Latest Marketing <em className="italic">Insights</em>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-normal">
            Deep dives into AI-powered marketing strategy, SEO growth models, UI conversion architecture, and campaign analytics.
          </p>
        </div>

        {/* Dynamic Logo Mask Customizer Widget */}
        <div className="liquid-glass rounded-3xl p-6 md:p-8 mb-16 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
            <div>
              <h3 className="text-white text-base md:text-lg font-semibold flex items-center gap-2">
                Dynamic Logo Mask Customizer
              </h3>
              <p className="text-white/50 text-xs md:text-sm">
                Recolor the SAMY_CREATIONS logo mark dynamically across all sections:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-end">
            {colorPresets.map((preset) => (
              <button
                key={preset.label}
                onClick={() => onLogoMaskChange(preset.class)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  currentLogoMask === preset.class
                    ? 'bg-white text-black font-semibold shadow-lg scale-105'
                    : 'liquid-glass text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded-full ${preset.class} border border-white/30`} />
                <span>{preset.label}</span>
              </button>
            ))}
          </div>

          <div className="liquid-glass rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10 shrink-0">
            <span className="text-white/40 text-xs font-mono uppercase">Preview:</span>
            <Logo maskColor={currentLogoMask} className="h-7" showText={false} />
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-white/40 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'liquid-glass text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-3 max-w-sm w-full border border-white/10">
            <Search className="w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="bg-transparent text-white placeholder:text-white/40 text-sm focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredBlogs.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="liquid-glass rounded-3xl overflow-hidden group border border-white/10 hover:border-blue-500/40 transition-all duration-500 flex flex-col cursor-pointer bg-black/60"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-blue-400 border border-blue-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <div className="p-6 md:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-white text-xl font-medium mb-3 tracking-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-white/20"
                    />
                    <span className="text-white/80 text-xs font-medium">{post.author.name}</span>
                  </div>

                  <div className="liquid-glass rounded-full p-2 text-white/80 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};
