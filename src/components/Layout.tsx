import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Music4, Trophy, User, HelpCircle, Info, Mail, Github, Twitter, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { LanguageSelector } from './LanguageSelector';
import { useAuth } from '../hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Music4 className="h-8 w-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-900">
                  Wicked Lyrics
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-8 ml-12">
                <Link to="/modes" className="text-gray-600 hover:text-gray-900">
                  {t('common.start')}
                </Link>
                <Link to="/create" className="text-gray-600 hover:text-gray-900 flex items-center">
                  <Sparkles className="h-4 w-4 mr-1" />
                  {t('common.createLyrics')}
                </Link>
                <Link to="/leaderboard" className="text-gray-600 hover:text-gray-900">
                  {t('common.leaderboard')}
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  {t('common.about')}
                </Link>
                <Link to="/help" className="text-gray-600 hover:text-gray-900">
                  {t('common.help')}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{user?.username}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={logout}
                  >
                    {t('common.logout')}
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/login')}
                  >
                    {t('common.login')}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => navigate('/register')}
                  >
                    {t('common.signup')}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/modes" className="text-gray-400 hover:text-white">
                    {t('common.start')}
                  </Link>
                </li>
                <li>
                  <Link to="/create" className="text-gray-400 hover:text-white">
                    {t('common.createLyrics')}
                  </Link>
                </li>
                <li>
                  <Link to="/leaderboard" className="text-gray-400 hover:text-white">
                    {t('common.leaderboard')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-gray-400 hover:text-white">
                    {t('common.help')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    {t('common.about')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white">
                    {t('footer.privacy')}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white">
                    {t('footer.terms')}
                  </Link>
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
                  <Mail className="h-4 w-4" />
                  <span>support@wickedlyrics.game</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                {t('footer.rights', { year: new Date().getFullYear() })}
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
    </div>
  );
}