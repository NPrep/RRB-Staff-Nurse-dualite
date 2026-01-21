import { useParams, Navigate, Link } from 'react-router-dom';
import { pillarPages } from '../data/pillarContent';
import SEOHead from '../components/SEOHead';
import QuickNavTable from '../components/QuickNavTable';
import { generateBreadcrumbSchema, generateFAQSchema, generateArticleSchema } from '../utils/schema';
import { BookOpen, FileText, Download, AlertCircle } from 'lucide-react';

export default function PillarPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageData = slug ? pillarPages[slug] : null;

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  // Determine if this is the Syllabus page to apply distinct layout
  const isSyllabus = slug?.includes('syllabus');

  // Generate Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: pageData.h1, item: pageData.slug }
  ]);

  const faqSchema = generateFAQSchema(pageData.content.faqs);
  
  const articleSchema = generateArticleSchema(
    pageData.title,
    pageData.description,
    "2025-01-20"
  );

  return (
    <>
      <SEOHead 
        title={pageData.title} 
        description={pageData.description} 
        canonicalUrl={pageData.slug} 
        schema={[breadcrumbSchema, faqSchema, articleSchema]}
      />
      
      {/* Header Banner - Distinct styling for Syllabus vs Notification */}
      <div className={`border-b border-gray-200 py-12 ${isSyllabus ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className={`text-sm mb-4 ${isSyllabus ? 'text-slate-400' : 'text-slate-500'}`}>
            <Link to="/" className={`hover:underline ${isSyllabus ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-rrb-red'}`}>Home</Link> / <span className="font-medium">{pageData.h1}</span>
          </nav>
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${isSyllabus ? 'bg-white/10' : 'bg-red-50 text-rrb-red'}`}>
              {isSyllabus ? <BookOpen size={32} className="text-rrb-red" /> : <FileText size={32} />}
            </div>
            <div>
              <h1 className={`text-2xl md:text-4xl font-bold mb-2 ${isSyllabus ? 'text-white' : 'text-slate-900'}`}>{pageData.h1}</h1>
              {!isSyllabus && (
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <span className="w-2 h-2 mr-1.5 bg-green-400 rounded-full"></span>
                  Official Update
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="w-full">
          
          <div className={`${isSyllabus ? 'bg-blue-50 border-blue-600' : 'bg-red-50 border-rrb-red'} border-l-4 p-6 rounded-r-lg mb-10 shadow-sm`}>
            <p className="text-lg text-slate-800 font-medium m-0 leading-relaxed">
              {pageData.content.intro}
            </p>
          </div>

          <QuickNavTable />

          {/* Conditional Layout Rendering */}
          {isSyllabus ? (
            // GRID LAYOUT FOR SYLLABUS - Card based, colorful
            <div className="grid gap-8 md:grid-cols-2 mt-8">
              {pageData.content.sections.map((section, idx) => (
                <div 
                  key={idx} 
                  className={`
                    bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow
                    ${section.table ? 'md:col-span-2' : ''}
                  `}
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-gray-100 flex items-center">
                    <span className="w-1.5 h-6 bg-rrb-red rounded-full mr-3"></span>
                    {section.heading}
                  </h2>
                  
                  {typeof section.content === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: section.content }} className="prose prose-sm prose-slate max-w-none text-slate-600" />
                  ) : (
                    section.content.map((para, pIdx) => <p key={pIdx} className="text-slate-600 text-sm mb-3 last:mb-0">{para}</p>)
                  )}

                  {section.table && (
                    <div className="overflow-x-auto mt-4">
                      <table className="govt-table w-full text-sm">
                        <thead>
                          <tr>
                            {section.table.headers.map((h, hIdx) => <th key={hIdx} className="bg-slate-800">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // STANDARD LINEAR LAYOUT FOR NOTIFICATION & OTHERS - Document style
            <div className="max-w-4xl mx-auto mt-8">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                {/* Decorative top border to look like a file */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rrb-red to-red-400"></div>
                
                {pageData.content.sections.map((section, idx) => (
                  <section key={idx} className="mb-12 last:mb-0">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                      <span className="bg-red-100 text-rrb-red p-1.5 rounded mr-3">
                        <AlertCircle size={20} />
                      </span>
                      {section.heading}
                    </h2>
                    
                    {typeof section.content === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: section.content }} className="prose prose-slate max-w-none text-slate-700" />
                    ) : (
                      section.content.map((para, pIdx) => <p key={pIdx} className="text-slate-700 mb-4 leading-relaxed">{para}</p>)
                    )}

                    {section.table && (
                      <div className="overflow-x-auto mt-6 border rounded-lg">
                        <table className="govt-table mb-0 shadow-none">
                          <thead>
                            <tr>
                              {section.table.headers.map((h, hIdx) => <th key={hIdx} className="bg-slate-100 text-slate-900 border-b border-gray-300">{h}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}

                {/* Download CTA for Notification pages */}
                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center">
                   <button className="flex items-center space-x-2 text-slate-500 hover:text-rrb-red transition-colors font-medium text-sm">
                      <Download size={16} />
                      <span>Download Official PDF (Coming Soon)</span>
                   </button>
                </div>
              </div>
            </div>
          )}

          {/* High Visibility CTA Box */}
          <div className="bg-red-50 border border-red-100 p-8 rounded-lg my-12 text-center shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Dominate the Exam?</h3>
            <p className="mb-6 text-slate-700 font-medium">Join the elite nursing aspirants preparing with NPrep.</p>
            <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-rrb-red text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors no-underline shadow-lg shadow-red-900/20">
              Start Preparation
            </a>
          </div>

          {/* FAQs */}
          <section className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {pageData.content.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white border border-gray-200 rounded-lg open:shadow-sm transition-all">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-slate-800 select-none">
                    {faq.question}
                    <span className="text-rrb-red font-bold text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-4 pt-0 text-slate-600 border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
