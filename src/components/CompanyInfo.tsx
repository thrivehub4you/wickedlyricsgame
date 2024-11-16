import React from 'react';
import { Building2, Mail } from 'lucide-react';

export function CompanyInfo() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
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
              href="mailto:contact@thrivehub4you.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              contact@thrivehub4you.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}