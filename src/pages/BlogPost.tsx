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
             <span className="text-slate-500 text-xs font-medium">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="bg-white p-0 md:p-6 md:shadow-sm md:rounded-lg md:border md:border-gray-100">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-rrb-red prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          {/* FAQ Section for Blogs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-slate-50 border border-gray-200 rounded-lg open:shadow-sm transition-all">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-slate-800 select-none">
                      {faq.question}
                      <span className="text-rrb-red font-bold text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="p-4 pt-0 text-slate-600 border-t border-gray-200 mt-2">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/rrb-staff-nurse-syllabus" className="px-4 py-2 bg-slate-100 text-slate-700 font-medium text-sm rounded hover:bg-rrb-red hover:text-white transition-colors no-underline">Syllabus</Link>
              <Link to="/rrb-staff-nurse-notification" className="px-4 py-2 bg-slate-100 text-slate-700 font-medium text-sm rounded hover:bg-rrb-red hover:text-white transition-colors no-underline">Notification</Link>
              <Link to="/rrb-staff-nurse-cut-off" className="px-4 py-2 bg-slate-100 text-slate-700 font-medium text-sm rounded hover:bg-rrb-red hover:text-white transition-colors no-underline">Cut Off</Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
