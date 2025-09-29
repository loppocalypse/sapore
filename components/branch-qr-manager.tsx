'use client';

import { useState, useRef } from 'react';
import { useQRCode } from 'next-qrcode';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  qr_prefix: string;
}

export default function BranchQRManager({ branches }: { branches: Branch[] }) {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedTable, setSelectedTable] = useState(1);
  const [qrUrl, setQrUrl] = useState('');
  const canvasContainerRef = useRef<HTMLDivElement>(null); // Ref for the container div

  const domain = typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com'; // Dinamik domain

  const handleGenerate = () => {
    if (!selectedBranch) return;
    const url = `${domain}/menu/${selectedBranch.qr_prefix}?masa=${selectedTable}`;
    setQrUrl(url);
  };

  const { SVG, Canvas } = useQRCode(); // SVG ve Canvas (PNG için) kullan

  const handleDownload = () => {
    if (!selectedBranch || !canvasContainerRef.current) return;
    const canvas = canvasContainerRef.current.querySelector('canvas') as HTMLCanvasElement | null;
    if (canvas) {
      const link = document.createElement('a');
      link.download = `${selectedBranch.name}_masa_${selectedTable}_qr.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Şube QR Kodları Yönetimi</h2>
      <Card>
        <CardHeader>
          <CardTitle>QR Oluştur</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedBranch?.id || ''} onValueChange={(value) => setSelectedBranch(branches.find(b => b.id === value) || null)}>
            <SelectTrigger>
              <SelectValue placeholder="Şube Seç" />
            </SelectTrigger>
            <SelectContent>
              {branches.map(b => (
                <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedTable.toString()} onValueChange={(value) => setSelectedTable(parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Masa Seç" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                <SelectItem key={num} value={num.toString()}>Masa {num}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleGenerate}>QR Oluştur</Button>
        </CardContent>
      </Card>

      {qrUrl && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedBranch?.name} - Masa {selectedTable}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500">URL: {qrUrl}</p>
            <div className="flex flex-col items-center">
              <SVG
                text={qrUrl}
                options={{
                  width: 200,
                  margin: 2,
                  color: { dark: '#000000', light: '#FFFFFF' },
                }}
              />
              <div style={{ display: 'none' }} ref={canvasContainerRef}>
                <Canvas
                  text={qrUrl}
                  options={{
                    width: 200,
                    margin: 2,
                    color: { dark: '#000000', light: '#FFFFFF' },
                  }}
                />
              </div>
            </div>
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download size={16} /> İndir (PNG)
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}