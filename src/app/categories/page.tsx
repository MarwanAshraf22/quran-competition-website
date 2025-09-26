'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trophy, BookOpen, Users, Clock, Award, CheckCircle } from 'lucide-react';

const maleCategories = [
  {
    id: 1,
    title: "حفظ القرآن الكريم كاملاً مع التجويد وحسن الأداء",
    description: "حفظ القرآن الكريم كاملاً مع التجويد وحسن الأداء لفئة الذكور تحت سن 16 عاماً، وهو مفتوح لجميع الجنسيات",
    participants: "تحت سن 16 عاماً",
    prize: "1,000,000 درهم",
    requirements: [
      "أن يكون المشارك حافظاً متقناً لكتاب الله تعالى كاملاً، مع الالتزام بأحكام التجويد والتلاوة",
      "أن يكون من فئة الذكور، ولا يتجاوز عمره 16 سنة ميلاديّة عند آخر يوم للتسجيل",
      "أن لا يكون قد وصل إلى التصفيات النهائية أو تم تكريمه في دورة سابقة للجائزة",
      "التزام المتسابق بالتوقيت المحدد لأداء الاختبار",
      "التزام المتسابق بارتداء الزي الوطني لبلاده",
      "التزام المتسابق بحسن السلوك ومراعاة الأنظمة والآداب العامة في دولة الإمارات العربية المتحدة"
    ]
  },
  {
    id: 2,
    title: "حفظ 20 جزءًا",
    description: "مسابقة حفظ عشرين جزءًا من القرآن الكريم",
    participants: "12-25 سنة",
    prize: "30,000 درهم",
    requirements: [
      "حفظ 20 جزءًا من القرآن الكريم",
      "إتقان أحكام التجويد الأساسية",
      "التلاوة الصحيحة والواضحة"
    ]
  },
  {
    id: 3,
    title: "حفظ 10 أجزاء",
    description: "مسابقة حفظ عشرة أجزاء من القرآن الكريم",
    participants: "12-25 سنة",
    prize: "20,000 درهم",
    requirements: [
      "حفظ 10 أجزاء من القرآن الكريم",
      "المعرفة الأساسية بأحكام التجويد",
      "التلاوة الصحيحة"
    ]
  },
  {
    id: 4,
    title: "حفظ 5 أجزاء",
    description: "مسابقة حفظ خمسة أجزاء من القرآن الكريم",
    participants: "8-25 سنة",
    prize: "15,000 درهم",
    requirements: [
      "حفظ 5 أجزاء من القرآن الكريم",
      "التلاوة الصحيحة",
      "المعرفة الأساسية بالتجويد"
    ]
  },
  {
    id: 5,
    title: "حفظ جزء واحد",
    description: "مسابقة حفظ جزء واحد من القرآن الكريم",
    participants: "6-25 سنة",
    prize: "10,000 درهم",
    requirements: [
      "حفظ جزء واحد من القرآن الكريم",
      "التلاوة الواضحة والصحيحة",
      "المعرفة الأساسية بالقراءة"
    ]
  }
];

const femaleCategories = [
  {
    id: 1,
    title: "حفظ القرآن الكريم كاملاً",
    description: "مسابقة حفظ القرآن الكريم كاملاً مع التلاوة الصحيحة",
    participants: "12-25 سنة",
    prize: "50,000 درهم",
    requirements: [
      "حفظ القرآن الكريم كاملاً",
      "إتقان أحكام التجويد",
      "التلاوة بصوت واضح ومسموع"
    ]
  },
  {
    id: 2,
    title: "حفظ 20 جزءًا",
    description: "مسابقة حفظ عشرين جزءًا من القرآن الكريم",
    participants: "12-25 سنة",
    prize: "30,000 درهم",
    requirements: [
      "حفظ 20 جزءًا من القرآن الكريم",
      "إتقان أحكام التجويد الأساسية",
      "التلاوة الصحيحة والواضحة"
    ]
  },
  {
    id: 3,
    title: "حفظ 10 أجزاء",
    description: "مسابقة حفظ عشرة أجزاء من القرآن الكريم",
    participants: "12-25 سنة",
    prize: "20,000 درهم",
    requirements: [
      "حفظ 10 أجزاء من القرآن الكريم",
      "المعرفة الأساسية بأحكام التجويد",
      "التلاوة الصحيحة"
    ]
  },
  {
    id: 4,
    title: "حفظ 5 أجزاء",
    description: "مسابقة حفظ خمسة أجزاء من القرآن الكريم",
    participants: "8-25 سنة",
    prize: "15,000 درهم",
    requirements: [
      "حفظ 5 أجزاء من القرآن الكريم",
      "التلاوة الصحيحة",
      "المعرفة الأساسية بالتجويد"
    ]
  },
  {
    id: 5,
    title: "حفظ جزء واحد",
    description: "مسابقة حفظ جزء واحد من القرآن الكريم",
    participants: "6-25 سنة",
    prize: "10,000 درهم",
    requirements: [
      "حفظ جزء واحد من القرآن الكريم",
      "التلاوة الواضحة والصحيحة",
      "المعرفة الأساسية بالقراءة"
    ]
  }
];

export default function CategoriesPage() {
  const [activeTab, setActiveTab] = useState('male');

  const currentCategories = activeTab === 'male' ? maleCategories : femaleCategories;
  const currentColor = activeTab === 'male' ? 'blue' : 'pink';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br from-${currentColor}-900 via-${currentColor}-800 to-${currentColor === 'blue' ? 'blue' : 'rose'}-700 text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`w-20 h-20 bg-${currentColor}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
              <Users className={`w-10 h-10 text-${currentColor}-600`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold arabic-text mb-4">
              فئات المسابقة
            </h1>
            <p className={`text-xl arabic-text max-w-3xl mx-auto leading-relaxed text-${currentColor}-100`}>
              اختر الفئة المناسبة لمستوى حفظك وسنك في مسابقة القرآن الكريم لأصحاب الهمم
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('male')}
                className={`px-8 py-3 rounded-md font-bold arabic-text transition-all duration-200 ${
                  activeTab === 'male'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                ذكور
              </button>
              <button
                onClick={() => setActiveTab('female')}
                className={`px-8 py-3 rounded-md font-bold arabic-text transition-all duration-200 ${
                  activeTab === 'female'
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                إناث
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold arabic-text mb-4 text-gray-800">
              {activeTab === 'male' ? 'فئات المسابقة للذكور' : 'فئات المسابقة للإناث'}
            </h2>
            <p className="text-lg text-gray-600 arabic-text max-w-2xl mx-auto">
              {activeTab === 'male' 
                ? 'اختر الفئة المناسبة لمستوى حفظك وسنك' 
                : 'اختاري الفئة المناسبة لمستوى حفظك وسنك'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold arabic-text mb-2 text-gray-800">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 arabic-text mb-4 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className={`w-12 h-12 ${activeTab === 'male' ? 'bg-yellow-100' : 'bg-rose-100'} rounded-lg flex items-center justify-center flex-shrink-0 mr-4`}>
                    <Trophy className={`w-6 h-6 ${activeTab === 'male' ? 'text-yellow-600' : 'text-rose-600'}`} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Users className={`w-5 h-5 text-${currentColor}-600`} />
                    <span className="text-sm text-gray-600 arabic-text">
                      العمر: {category.participants}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600 arabic-text">
                      الجائزة: {category.prize}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 arabic-text mb-3">
                    متطلبات المشاركة:
                  </h4>
                  <ul className="space-y-2">
                    {category.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 arabic-text">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/registration"
                    className={`flex-1 bg-${currentColor}-600 hover:bg-${currentColor}-700 text-white text-center py-2 px-4 rounded-lg font-medium arabic-text transition-colors duration-200`}
                  >
                    {activeTab === 'male' ? 'سجل في هذه الفئة' : 'سجلي في هذه الفئة'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r from-${currentColor}-50 to-${currentColor === 'blue' ? 'emerald' : 'rose'}-50 rounded-xl p-8`}>
            <h2 className="text-2xl font-bold arabic-text mb-6 text-gray-800 text-center">
              {activeTab === 'male' ? 'معلومات مهمة للمشاركين' : 'معلومات مهمة للمشاركات'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold arabic-text mb-4 text-gray-800 flex items-center">
                  <Clock className={`w-5 h-5 text-${currentColor}-600 ml-2`} />
                  مواعيد مهمة
                </h3>
                <ul className="space-y-2 text-gray-600 arabic-text">
                  <li>• آخر موعد للتسجيل: 15 مارس 2025</li>
                  <li>• التصفيات الأولى: 1-5 أبريل 2025</li>
                  <li>• النهائيات: 15-20 أبريل 2025</li>
                  <li>• حفل التكريم: 25 أبريل 2025</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold arabic-text mb-4 text-gray-800 flex items-center">
                  <BookOpen className="w-5 h-5 text-green-600 ml-2" />
                  شروط المشاركة
                </h3>
                <ul className="space-y-2 text-gray-600 arabic-text">
                  <li>• {activeTab === 'male' ? 'أن يكون المتسابق من أصحاب الهمم' : 'أن تكون المتسابقة من أصحاب الهمم'}</li>
                  <li>• إحضار الشهادات الطبية المطلوبة</li>
                  <li>• التسجيل من خلال النموذج الإلكتروني</li>
                  <li>• الالتزام بآداب التلاوة والمسابقة</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/registration"
                className={`inline-flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-${currentColor}-600 to-${currentColor === 'blue' ? 'emerald' : 'rose'}-600 hover:from-${currentColor}-700 hover:to-${currentColor === 'blue' ? 'emerald' : 'rose'}-700 text-white px-8 py-3 rounded-lg font-bold arabic-text transition-all duration-200 shadow-lg hover:shadow-xl`}
              >
                <Trophy className="w-5 h-5" />
                <span>{activeTab === 'male' ? 'ابدأ التسجيل الآن' : 'ابدئي التسجيل الآن'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
