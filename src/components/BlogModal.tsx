import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Share2, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../data/blogsData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto liquid-glass rounded-3xl p-6 md:p-10 text-white bg-black/90 border border-white/10 shadow-2xl my-auto scrollbar-thin scrollbar-thumb-white/20"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Articles</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                aria-label="Share article"
                className="liquid-glass rounded-full p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="liquid-glass rounded-full p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Header Metadata */}
          <div className="mb-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs text-white/60">
              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="text-white font-medium text-sm">{post.author.name}</p>
                  <p className="text-white/50">{post.author.role}</p>
                </div>
              </div>

              {/* Time & Date */}
              <div className="flex items-center gap-4 text-white/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 border border-white/10">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed font-normal">
            {post.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-semibold text-white mt-8 mb-4 tracking-tight">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={idx}
                    className="liquid-glass rounded-2xl p-6 border-l-4 border-blue-500 my-6 italic text-white/90 font-serif text-xl"
                  >
                    "{block.text}"
                  </blockquote>
                );
              }
              if (block.type === 'list' && block.items) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2.5 my-4 text-white/70 pl-2">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-white/80 leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-white/40 mr-1" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
