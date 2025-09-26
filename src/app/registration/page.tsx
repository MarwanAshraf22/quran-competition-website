'use client';

import { useState } from 'react';
import { FileText, User, Calendar, Phone, Mail, MapPin, BookOpen, CheckCircle, Send } from 'lucide-react';

const categories = [
  { id: 'full-quran', name: 'حفظ القرآن الكريم كاملاً', prize: '50,000 درهم' },
  { id: '20-parts', name: 'حفظ 20 جزءًا', prize: '30,000 درهم' },
  { id: '10-parts', name: 'حفظ 10 أجزاء', prize: '20,000 درهم' },
  { id: '5-parts', name: 'حفظ 5 أجزاء', prize: '15,000 درهم' },
  { id: '1-part', name: 'حفظ جزء واحد', prize: '10,000 درهم' },
];

const countries = [
  'الإمارات العربية المتحدة',
  'المملكة العربية السعودية',
  'الكويت',
  'قطر',
  'البحرين',
  'سلطنة عمان',
  'أخرى'
];

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    nationality: '',
    country: '',
    city: '',
    phone: '',
    email: '',
    guardianName: '',
    guardianPhone: '',
    category: '',
    disabilityType: '',
    medicalCertificate: null,
    previousParticipation: '',
    experience: '',
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 arabic-text mb-4">
            تم التسجيل بنجاح!
          </h2>
          <p className="text-gray-600 arabic-text mb-6 leading-relaxed">
            شكرًا لك على التسجيل في مسابقة دبي للقرآن الكريم لأصحاب الهمم. 
            سيتم التواصل معك قريبًا بتفاصيل المسابقة.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg arabic-text transition-colors duration-200"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold arabic-text mb-4 text-gray-800">
            استمارة التسجيل
          </h1>
          <p className="text-lg text-gray-600 arabic-text max-w-2xl mx-auto leading-relaxed">
            املأ النموذج التالي للتسجيل في مسابقة دبي للقرآن الكريم لأصحاب الهمم
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold arabic-text mb-6 text-gray-800 flex items-center">
              <User className="w-5 h-5 text-blue-600 ml-2" />
              المعلومات الشخصية
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                  placeholder="أدخل الاسم الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  العمر *
                </label>
                <input
                  type="number"
                  name="age"
                  required
                  min="6"
                  max="25"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="6-25"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  الجنس *
                </label>
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                >
                  <option value="">اختر الجنس</option>
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  الجنسية *
                </label>
                <input
                  type="text"
                  name="nationality"
                  required
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                  placeholder="أدخل الجنسية"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  الدولة *
                </label>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                >
                  <option value="">اختر الدولة</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  المدينة *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                  placeholder="أدخل المدينة"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold arabic-text mb-6 text-gray-800 flex items-center">
              <Phone className="w-5 h-5 text-green-600 ml-2" />
              معلومات التواصل
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+971501234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  اسم ولي الأمر *
                </label>
                <input
                  type="text"
                  name="guardianName"
                  required
                  value={formData.guardianName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                  placeholder="أدخل اسم ولي الأمر"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  رقم هاتف ولي الأمر *
                </label>
                <input
                  type="tel"
                  name="guardianPhone"
                  required
                  value={formData.guardianPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+971501234567"
                />
              </div>
            </div>
          </div>

          {/* Competition Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold arabic-text mb-6 text-gray-800 flex items-center">
              <BookOpen className="w-5 h-5 text-purple-600 ml-2" />
              معلومات المسابقة
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  فئة المسابقة *
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                >
                  <option value="">اختر فئة المسابقة</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} - {category.prize}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  نوع الإعاقة *
                </label>
                <input
                  type="text"
                  name="disabilityType"
                  required
                  value={formData.disabilityType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                  placeholder="أدخل نوع الإعاقة"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  هل شاركت في المسابقة من قبل؟ *
                </label>
                <select
                  name="previousParticipation"
                  required
                  value={formData.previousParticipation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                >
                  <option value="">اختر الإجابة</option>
                  <option value="yes">نعم</option>
                  <option value="no">لا</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 arabic-text mb-2">
                  خبرتك في تلاوة القرآن الكريم
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent arabic-text"
                  placeholder="اكتب عن خبرتك في تلاوة وحفظ القرآن الكريم..."
                />
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="mb-8">
            <div className="flex items-start space-x-3 space-x-reverse">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                required
                checked={formData.agreement}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="agreement" className="text-sm text-gray-700 arabic-text leading-relaxed">
                أوافق على شروط وأحكام المسابقة وأتعهد بتقديم المستندات المطلوبة والالتزام بقوانين المسابقة
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-lg font-bold text-lg arabic-text transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>إرسال الطلب</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
