import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogContent';
import SEOHead from '../components/SEOHead';

export default function BlogList() {
  return (
    <>
      <SEOHead 
        title="RRB Staff Nurse Preparation Blogs - Tips, Strategy & Notes" 
        description="Read the latest articles on RRB Staff Nurse preparation, exam strategy, previous year question analysis, and nursing career guidance." 
        canonicalUrl="/blog" 
      />
      
      <div className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Preparation Blogs</h1>
          <p className="text-slate-600 text-lg">Strategies, Updates, and Analysis for RRB Staff Nurse Aspirants</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden h-full">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-rrb-red bg-red-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-4 leading-snug group-hover:text-rrb-red transition-colors flex-grow">
                  <Link to={`/blog/${post.slug}`} className="no-underline hover:text-rrb-red text-slate-900">
                    {post.title}
                  </Link>
                </h2>
                {/* Excerpt Removed as per request */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                   <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-sm font-bold text-rrb-red hover:text-red-700"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
