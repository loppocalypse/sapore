import Report from '@/app/Report/Report';
import { Suspense } from 'react';
import Footer from '../_components/Footer';

export default function ReportPage() {
  return (
    <Suspense>
      <Report />
      <Footer />
    </Suspense>
  );
}