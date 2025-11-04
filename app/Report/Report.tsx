'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ParticlesBackground from '@/app/ParticlesBG/particles'
import { useSearchParams } from 'next/navigation'
import { Playfair_Display, Roboto, Poppins, Noto_Serif_Georgian, Amiri } from 'next/font/google'
import { getTranslations, isRtl } from '@/lib/i18n'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })
const poppins = Poppins({ subsets: ['latin'], weight: '600' })
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400' })
const amiri = Amiri({ subsets: ['arabic'], weight: '400' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define type for location names to match t.report.branches keys
type LocationName = 'davitAghmashenebeli95' | 'davitAghmashenebeli134' | 'koteApkhazis31' | 'ialbuzi9';

const locations: { id: number; name: LocationName; display: string }[] = [
  { id: 1, name: 'davitAghmashenebeli95', display: 'Davit Aghmashenebeli Ave. 95' },
  { id: 2, name: 'davitAghmashenebeli134', display: 'Davit Aghmashenebeli Ave. 134' },
  { id: 3, name: 'koteApkhazis31', display: 'Kote Apkhazis 31' },
  { id: 4, name: 'ialbuzi9', display: 'Ialbuzi 9'},
]

export default function Report() {
  const searchParams = useSearchParams()
  const langFinally = searchParams.get('lang') || 'en'
  const t = getTranslations(langFinally)

  const getFontClass = () => {
    if (langFinally === 'ka') return notoGeorgian.className
    if (langFinally === 'ar') return amiri.className
    return roboto.className
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    issue: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const { error } = await supabase.from('reports').insert([
        {
          name: formData.name,
          email: formData.email,
          branch: formData.branch,
          issue: formData.issue,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setMessage(t.report?.messages.success || 'Your issue has been reported successfully! We’ll get back to you soon.');
      setFormData({ name: '', email: '', branch: '', issue: '' });
    } catch (err: any) {
      setMessage(t.report?.messages.error.replace('{message}', err.message) || `Error: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBranchChange = (value: string) => {
    setFormData({ ...formData, branch: value });
  };

  return (
    <>
      <ParticlesBackground particleCount={1500} noiseIntensity={0.0025} className="absolute inset-0 z-0" />
      <main className={`relative mt-8 min-h-screen flex items-center justify-center py-14 px-4 sm:px-6 lg:px-8 overflow-hidden ${getFontClass()}`} dir={isRtl(langFinally) ? 'rtl' : 'ltr'}>
        <div className="relative z-10 max-w-[1000px] w-full space-y-8">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-[#D4A017] tracking-tight font-serif text-center`}>
            {t.report?.title || 'Report an Issue with Cafe Sapore'}
          </h1>
          <p className={`${roboto.className} text-lg sm:text-xl text-gray-400 max-w-xl mx-auto text-center`}>
            {t.report?.description || 'We value your feedback. Let us know about any issues so we can make your experience better!'}
          </p>
          <div className="bg-gray-90 p-6 sm:p-8 rounded-xl shadow-lg max-w-lg mx-auto backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.report?.form.name || 'Name'}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.report?.form.placeholderName || 'Your name'}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.report?.form.email || 'Email'}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.report?.form.placeholderEmail || 'Your email'}
                  required
                />
              </div>
              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.report?.form.branch || 'Branch'}
                </label>
                <Select onValueChange={handleBranchChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder={t.report?.form.selectBranch || 'Select a branch'} />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.id} value={location.name}>
                        {t.report?.branches[location.name] || location.display}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.report?.form.issue || 'Issue'}
                </label>
                <Textarea
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  placeholder={t.report?.form.placeholderIssue || 'Describe the issue'}
                  required
                  className="h-32"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg"
              >
                {isSubmitting ? (t.report?.form.submitting || 'Submitting...') : (t.report?.form.submit || 'Submit Report')}
                <Send className="ml-2 h-4 w-4" />
              </Button>
              {message && (
                <p className={`text-center ${message.startsWith(t.report?.messages.error.split('{message}')[0] || 'Error') ? 'text-red-600' : 'text-green-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}