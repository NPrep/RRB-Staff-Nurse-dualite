import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogContent';
import SEOHead from '../components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '../utils/schema';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get 6 Related Articles (excluding current one)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 6);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blogs', item: '/blog' },
    { name: post.title, item: `/blog/${post.slug}` }
  ]);

  const articleSchema = generateArticleSchema(
    post.title,
    post.excerpt,
    post.date
  );

  const faqSchema = post.faqs ? generateFAQSchema(post.faqs) : undefined;

  return (
    <>
      <SEOHead 
        title={post.title} 
        description={post.excerpt} 
        canonicalUrl={`/blog/${post.slug}`} 
        type="article"
        schema={[breadcrumbSchema, articleSchema, faqSchema].filter(Boolean)}
      />

      <div className="bg-slate-50 border-b border-gray-200 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <nav className="text-sm text-slate-500 mb-4">
            <Link to="/" className="hover:text-rrb-red hover:underline">Home</Link> / <Link to="/blog" className="hover:text-rrb-red hover:underline">Blogs</Link>
          </nav>
          <div className="flex items-center space-x-4 mb-4">
             <span className="bg-red-100 text-rrb-red text-xs font-bold px-2 py-1 rounded">{post.category}</span>
             <span className="text-slate-500 text-xs font-medium">Updated: {post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="bg-white p-0 md:p-8 md:shadow-sm md:rounded-xl md:border md:border-gray-100">
          
          {/* Main Content Injection */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:scroll-mt-24 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-rrb-red prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-li:text-slate-700"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          {/* FAQ Section (Schema Ready) */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-200" id="faq-section">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-slate-50 border border-gray-200 rounded-lg open:shadow-sm transition-all duration-200">
                    <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-slate-800 select-none hover:text-rrb-red transition-colors">
                      {faq.question}
                      <span className="text-rrb-red font-bold text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="p-5 pt-0 text-slate-600 border-t border-gray-100 mt-2 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles Block (6 Links) */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-rrb-red pl-3">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.slug}
                  to={`/blog/${related.slug}`} 
                  className="group block p-4 bg-slate-50 rounded-lg border border-gray-200 hover:border-rrb-red hover:shadow-sm transition-all no-underline"
                >
                  <span className="text-xs font-bold text-rrb-red uppercase tracking-wider mb-1 block">{related.category}</span>
                  <h4 className="font-bold text-slate-900 group-hover:text-rrb-red transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </div>
    </>
  );
}
