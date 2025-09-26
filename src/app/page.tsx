import Image from "next/image";
import Link from "next/link";
import { Trophy, Users, BookOpen, Calendar, Award, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/comp-logo.jpg"
              alt="شعار المسابقة"
              width={120}
              height={120}
              className="mx-auto rounded-full shadow-lg mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold arabic-text mb-4 text-white">
              مسابقة دبي للقرآن الكريم
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold arabic-text mb-6 text-yellow-300">
              لأصحاب الهمم
            </h2>
            <p className="text-xl md:text-2xl font-medium arabic-text mb-8 text-blue-100">
              الدورة الثالثة عشر - 2025
            </p>
            <p className="text-lg arabic-text max-w-3xl mx-auto leading-relaxed text-gray-100">
              مسابقة سنوية مباركة تقام في دبي لتشجيع أصحاب الهمم على حفظ وتلاوة القرآن الكريم، 
              وتنمية مواهبهم في مجال القرآن الكريم والعلوم الإسلامية
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/registration"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg arabic-text transition-colors duration-200 shadow-lg"
            >
              سجل الآن
            </Link>
            <Link
              href="/categories"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-bold text-lg arabic-text transition-colors duration-200"
            >
              تصفح الفئات
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold arabic-text mb-4 text-white">
              إحصائيات المسابقة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-white">
                2025
              </div>
              <p className="text-white arabic-text font-medium">العام الحالي</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2 text-white">
                6
              </div>
              <p className="text-white arabic-text font-medium">دول مشاركة</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2 text-white">
                +500
              </div>
              <p className="text-white arabic-text font-medium">مشارك</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2 text-white">
                13
              </div>
              <p className="text-white arabic-text font-medium">دورة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center arabic-text mb-12 text-gray-800">
            مميزات المسابقة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold arabic-text mb-4 text-gray-800">تنمية المهارات</h3>
              <p className="text-gray-600 arabic-text leading-relaxed">
                تطوير مهارات الحفظ والتلاوة والتجويد للقرآن الكريم
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold arabic-text mb-4 text-gray-800">جوائز قيمة</h3>
              <p className="text-gray-600 arabic-text leading-relaxed">
                جوائز مالية ومعنوية تحفيزية للمشاركين المتميزين
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold arabic-text mb-4 text-gray-800">التميز والإبداع</h3>
              <p className="text-gray-600 arabic-text leading-relaxed">
                منصة لإظهار مواهب أصحاب الهمم وقدراتهم المميزة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold arabic-text mb-6">
            انضم إلينا في هذه المسابقة المباركة
          </h2>
          <p className="text-xl arabic-text mb-8 max-w-3xl mx-auto leading-relaxed">
            كن جزءًا من هذا الحدث الإسلامي المهم وساهم في تشجيع أصحاب الهمم على حفظ كتاب الله العزيز
          </p>
          <Link
            href="/registration"
            className="inline-flex items-center space-x-3 space-x-reverse bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg arabic-text transition-colors duration-200 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            <span>سجل الآن</span>
          </Link>
        </div>
      </section>
    </div>
  );
}