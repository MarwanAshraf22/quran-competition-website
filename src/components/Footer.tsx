import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 space-x-reverse mb-4">
              <Image
                src="/comp-logo.jpg"
                alt="شعار المسابقة"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold arabic-text">
                  مسابقة دبي للقرآن الكريم
                </h3>
                <p className="text-sm text-gray-300 arabic-text">
                  لأصحاب الهمم - الدورة الثالثة عشر 2025
                </p>
              </div>
            </div>
            <p className="text-gray-300 arabic-text leading-relaxed">
              مسابقة سنوية تقام في دبي لتشجيع أصحاب الهمم على حفظ وتلاوة القرآن الكريم، 
              وتنمية مواهبهم في مجال القرآن الكريم والعلوم الإسلامية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="/male" className="text-gray-300 hover:text-white transition-colors arabic-text">
                  فئة الذكور
                </a>
              </li>
              <li>
                <a href="/female" className="text-gray-300 hover:text-white transition-colors arabic-text">
                  فئة الإناث
                </a>
              </li>
              <li>
                <a href="/registration" className="text-gray-300 hover:text-white transition-colors arabic-text">
                  التسجيل
                </a>
              </li>
              <li>
                <a href="/reports" className="text-gray-300 hover:text-white transition-colors arabic-text">
                  التقارير
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@quran-dubai.ae</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 arabic-text">دبي، الإمارات العربية المتحدة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">www.quran-dubai.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 arabic-text">
            © 2025 مسابقة دبي للقرآن الكريم لأصحاب الهمم. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
