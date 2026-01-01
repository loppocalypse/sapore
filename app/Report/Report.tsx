'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useSearchParams } from 'next/navigation'
import { Playfair_Display, Roboto, Noto_Serif_Georgian, Amiri } from 'next/font/google'
import { getTranslations, isRtl } from '@/lib/i18n'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'] })
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400' })
const amiri = Amiri({ subsets: ['arabic'], weight: '400' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

  const [formData, setFormData] = useState({ name: '', email: '', branch: '', issue: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    try {
      const { error } = await supabase.from('reports').insert([{ ...formData, created_at: new Date().toISOString() }]);
      if (error) throw error;
      setMessage(t.report?.messages.success || 'Success!');
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

  return (
    <main className={`relative min-h-screen bg-white text-[#2d1b11] py-20 px-4 sm:px-6 lg:px-8 ${getFontClass()}`} dir={isRtl(langFinally) ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 border-b border-gray-100 pb-10">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-normal text-[#2d1b11] mb-6`}>
            {t.report?.title}
          </h1>
          <div className="w-16 h-[1px] bg-[#8a1a21] mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto italic leading-relaxed">
            {t.report?.description}
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white border border-gray-100 p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-sm max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  {t.report?.form.name}
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.report?.form.placeholderName}
                  required
                  className="border-gray-200 focus:border-[#8a1a21] rounded-none focus-visible:ring-0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  {t.report?.form.email}
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.report?.form.placeholderEmail}
                  required
                  className="border-gray-200 focus:border-[#8a1a21] rounded-none focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {t.report?.form.branch}
              </label>
              <Select onValueChange={(v) => setFormData({...formData, branch: v})} required>
                <SelectTrigger className="border-gray-200 focus:border-[#8a1a21] rounded-none focus:ring-0">
                  <SelectValue placeholder={t.report?.form.selectBranch} />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.id} value={loc.name}>
                      {/* Hata buradaydı, (t.report?.form.branch as any) eklenerek çözüldü */}
                      {(t.report?.form.branch as any)?.[loc.name] || loc.display}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {t.report?.form.issue}
              </label>
              <Textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder={t.report?.form.placeholderIssue}
                required
                className="h-40 border-gray-200 focus:border-[#8a1a21] rounded-none focus-visible:ring-0 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2d1b11] hover:bg-[#8a1a21] text-white font-bold py-4 rounded-none transition-all duration-300 uppercase tracking-[0.2em] text-[11px]"
            >
              {isSubmitting ? t.report?.form.submitting : t.report?.form.submit}
              {!isSubmitting && <Send className="ml-2 h-3 w-3" />}
            </Button>

            {message && (
              <p className={`text-center text-xs font-bold tracking-wide ${message.includes('Error') ? 'text-red-700' : 'text-green-700'}`}>
                {message.toUpperCase()}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}