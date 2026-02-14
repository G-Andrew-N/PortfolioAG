import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-6 sm:py-8 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-sm sm:text-base text-gray-400 dark:text-gray-500">
          <p>&copy; {currentYear} Andrew Gathuto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}