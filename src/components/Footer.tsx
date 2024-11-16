import React from 'react';
import { useTranslation } from 'react-i18next';
import { Twitter, Github, MessageSquare } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  {t('common.start')}
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="text-gray-400 hover:text-white">
                  {t('common.leaderboard')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-400 hover:text-white">
                  {t('common.help')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  {t('common.about')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <a 
                href="mailto:support@wickedlyrics.game"
                className="text-gray-400 hover:text-white flex items-center space-x-2"
              >
                support@wickedlyrics.game
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              {t('footer.rights', { year: currentYear })}
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://discord.com" className="text-gray-400 hover:text-white">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}