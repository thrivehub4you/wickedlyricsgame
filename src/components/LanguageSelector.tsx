import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'fr', name: 'French', nativeName: 'Français' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const getCurrentLanguage = () => {
    const current = languages.find(lang => lang.code === i18n.language);
    return current || languages[0];
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline">
          {getCurrentLanguage().nativeName}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => i18n.changeLanguage(language.code)}
              className={`flex items-center justify-between px-4 py-3 w-full text-left hover:bg-gray-50 transition-colors ${
                i18n.language === language.code
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700'
              }`}
            >
              <span className="font-medium">{language.name}</span>
              <span className="text-sm text-gray-500">
                {language.nativeName}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}