import { useParams, Navigate, Link } from 'react-router-dom';
import { pillarPages } from '../data/pillarContent';
import SEOHead from '../components/SEOHead';
import QuickNavTable from '../components/QuickNavTable';
import { generateBreadcrumbSchema, generateFAQSchema, generateArticleSchema } from '../utils/schema';

export default function PillarPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageData = slug ? pillarPages[slug] : null;

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: pageData.h1, item: pageData.slug }
  ]);

  const faqSchema = generateFAQSchema(pageData.content.faqs);
  const articleSchema = generateArticleSchema(pageData.title, pageData.description, '2026-01-20');

  return (
    <>
      <SEOHead title={pageData.title} description={pageData.description} canonicalUrl={pageData.slug} schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <div className="border-b border-gray-200 py-10 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4 text-slate-500">
            <Link to="/" className="text-slate-600 hover:text-rrb-red hover:underline">Home</Link> / <span className="font-medium">{pageData.h1}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{pageData.h1}</h1>
          <p className="text-slate-600 m-0">{pageData.description}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article>
          <div className="bg-red-50 border-l-4 border-rrb-red p-6 rounded-r-lg mb-8">
            <p className="text-lg text-slate-800 m-0">{pageData.content.intro}</p>
          </div>

          <QuickNavTable />

          <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200">
            {pageData.content.sections.map((section, idx) => (
              <section key={idx} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                {typeof section.content === 'string'
                  ? <div dangerouslySetInnerHTML={{ __html: section.content }} className="prose prose-slate max-w-none text-slate-700" />
                  : section.content.map((para, pIdx) => <p key={pIdx} className="text-slate-700 mb-3">{para}</p>)}

                {section.table && (
                  <div className="overflow-x-auto mt-5 border rounded-lg">
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
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {pageData.content.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white border border-gray-200 rounded-lg">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-slate-800">
                    {faq.question}
                    <span className="text-rrb-red font-bold text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-4 pt-0 text-slate-600 border-t border-gray-100 mt-2">{faq.answer}</div>
                </details>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
