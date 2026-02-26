import { motion } from 'motion/react';
import { BookOpen, Clock, Tag } from 'lucide-react';
import { articles, pageMeta } from '@/src/content/siteConfig';
import { usePageMeta } from '@/src/hooks/usePageMeta';

export default function Blog() {
  usePageMeta(pageMeta.blog.title, pageMeta.blog.description);
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Blog & Pensamientos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Reflexiones sobre producto, sistemas y la intersección entre negocio y código.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-all cursor-pointer hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4 text-xs font-mono text-gray-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3 h-3" />
                  {article.category}
                </span>
                <span>{article.date}</span>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-gray-400 mb-8 line-clamp-3 flex-grow text-sm leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                  Leer artículo
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-white/3 border border-white/5 text-center"
        >
          <p className="text-slate-500 text-sm">
            Más artículos próximamente. Seguinos en{' '}
            <a
              href="https://linkedin.com/in/lisandroarguello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>{' '}
            para no perderte ninguno.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
