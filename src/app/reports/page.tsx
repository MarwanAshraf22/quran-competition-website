import Image from "next/image";
import { Camera } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold arabic-text mb-4">
              معرض الصور
            </h1>
            <p className="text-xl arabic-text max-w-3xl mx-auto leading-relaxed text-emerald-100">
              صور ومشاهد من فعاليات وأنشطة مسابقة دبي للقرآن الكريم لأصحاب الهمم
            </p>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold arabic-text mb-4">
              التغطية الإعلامية
            </h2>
            <p className="text-xl arabic-text max-w-3xl mx-auto leading-relaxed text-gray-300">
              تغطية إعلامية واسعة للمسابقة في وسائل الإعلام المحلية والخليجية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">50+</div>
              <p className="text-lg arabic-text text-gray-300">وسيلة إعلام</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">1M+</div>
              <p className="text-lg arabic-text text-gray-300">مشاهدة</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">100+</div>
              <p className="text-lg arabic-text text-gray-300">مقال ومقابلة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
