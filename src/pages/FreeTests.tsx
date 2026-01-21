import SEOHead from '../components/SEOHead';
import { generateOrganizationSchema } from '../utils/schema';
import { ClipboardCheck, ExternalLink } from 'lucide-react';

export default function FreeTests() {
  const schema = generateOrganizationSchema();

  const tests = [
    { title: "RRB Shift - I (20 JULY)", link: "https://links.nprep.in/Wm36lpRx0Zb", tag: "Previous Year Paper" },
    { title: "RRB Shift - I (21 July 2019)", link: "https://links.nprep.in/9PwNw5DuPZb", tag: "Previous Year Paper" },
    { title: "RRB Nursing Superintendent 29 APRIL Shift 3", link: "https://links.nprep.in/8LR9YaHPEZb", tag: "Advanced Level" },
    { title: "RRB Nursing Officer Test", link: "https://links.nprep.in/iYJK63NtHZb", tag: "Mock Test" },
    { title: "RRB Nursing Officer-2021", link: "https://links.nprep.in/QNGYhi8GfZb", tag: "Practice Set" },
  ];

  return (
    <>
      <SEOHead 
        title="Free RRB Staff Nurse Mock Tests & PYQ Papers" 
        description="Attempt free RRB Staff Nurse previous year question papers and mock tests. Practice online with NPrep's high-quality test series." 
        canonicalUrl="/free-tests"
        schema={schema}
      />
      
      <div className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Free Practice Tests</h1>
          <p className="text-slate-600 text-lg">Boost your preparation with official previous year papers and mock tests.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-4">
          {tests.map((test, index) => (
            <a 
              key={index} 
              href={test.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-rrb-red hover:shadow-md transition-all no-underline"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-50 text-rrb-red p-3 rounded-lg group-hover:bg-rrb-red group-hover:text-white transition-colors">
                    <ClipboardCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rrb-red transition-colors m-0">
                      {test.title}
                    </h3>
                    <span className="inline-block mt-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {test.tag}
                    </span>
                  </div>
                </div>
                <ExternalLink size={20} className="text-slate-400 group-hover:text-rrb-red" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Want more tests?</h3>
          <p className="text-slate-600 mb-6">Get access to 30,000+ Topic-wise questions and Daily Test Series.</p>
          <a 
            href="https://nprepnursing.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-rrb-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors no-underline"
          >
            Explore Paid Test Series
          </a>
        </div>
      </div>
    </>
  );
}
