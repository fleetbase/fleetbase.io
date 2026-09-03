import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PlaceholderPageProps {
 title: string;
 description: string;
 comingSoon?: boolean;
}

export default function PlaceholderPage({ 
 title, 
 description, 
 comingSoon = false 
}: PlaceholderPageProps) {
 return (
 <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
 <div className="max-w-2xl">
 {comingSoon && (
 <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
 Coming Soon
 </span>
 )}
 <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
 {title}
 </h1>
 <p className="text-lg md:text-xl text-muted-foreground mb-8">
 {description}
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io" rel="nofollow">
 Start Free Trial
 <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">
 Contact Sales
 </Link>
 </Button>
 </div>
 </div>
 </div>
 );
}
