import { redirect } from 'next/navigation';

// Root redirects to dashboard
export default function AdminRootPage() {
  redirect('/dashboard');
}
