import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const siteUrlFromEnv = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '');
    const siteUrl = siteUrlFromEnv || window.location.origin;
    const currentUrl = `${siteUrl}${window.location.pathname}`;

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', currentUrl);
    if (!canonical.parentElement) {
      document.head.appendChild(canonical);
    }

    const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      const selector = `meta[${attribute}="${key}"]`;
      const tag = document.querySelector(selector) || document.createElement('meta');
      tag.setAttribute(attribute, key);
      tag.setAttribute('content', content);
      if (!tag.parentElement) {
        document.head.appendChild(tag);
      }
    };

    upsertMeta('property', 'og:url', currentUrl);
    upsertMeta('name', 'twitter:url', currentUrl);

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Andrew Gathuto',
      givenName: 'Andrew',
      familyName: 'Gathuto',
      alternateName: ['Gathuto'],
      url: siteUrl,
      jobTitle: 'Software Developer',
      image: `${siteUrl}/profile.jpg`,
      sameAs: [
        'https://github.com/G-Andrew-N',
        'https://x.com/andrew_gathuto'
      ]
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Andrew Gathuto Portfolio',
      url: siteUrl,
      inLanguage: 'en'
    };

    const upsertJsonLd = (id: string, schema: object) => {
      const existing = document.getElementById(id) || document.createElement('script');
      existing.setAttribute('id', id);
      existing.setAttribute('type', 'application/ld+json');
      existing.textContent = JSON.stringify(schema);
      if (!existing.parentElement) {
        document.head.appendChild(existing);
      }
    };

    upsertJsonLd('jsonld-person', personSchema);
    upsertJsonLd('jsonld-website', websiteSchema);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
