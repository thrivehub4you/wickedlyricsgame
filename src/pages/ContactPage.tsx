import React from 'react';
import { Building2, Mail, Globe } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            成都惟鲸出海电子商务有限公司
          </h1>
          <h2 className="text-xl text-gray-600">
            Chengdu ThriveHub E-commerce Co., Ltd.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <Building2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">公司地址 / Address</h3>
              <p className="text-gray-600">中国四川省成都市</p>
              <p className="text-gray-600">Chengdu, Sichuan, China</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">联系邮箱 / Email</h3>
              <a 
                href="mailto:support@wickedlyrics.game" 
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                support@wickedlyrics.game
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">关于我们</h3>
              <p className="text-gray-600">
                成都惟鲸出海电子商务有限公司是一家专注于跨境电商的创新企业。我们致力于为客户提供优质的电子商务解决方案，帮助企业开拓国际市场。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">About Us</h3>
              <p className="text-gray-600">
                Chengdu ThriveHub E-commerce Co., Ltd. is an innovative cross-border e-commerce company. We are committed to providing high-quality e-commerce solutions and helping businesses expand into international markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}