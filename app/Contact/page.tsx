import Contact from '@/app/Contact/Contact';
import { Suspense } from 'react';
import Footer from '../_components/Footer';

export default function ContactPage() {
  return (
    <Suspense>
      <Contact />
      <Footer />
    </Suspense>
  )
}