"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Menu, X, BookOpen, Users, Award, Phone, Mail, MapPin, MessageCircle, Star, Check } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-orange-700">أكاديمية بداية</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">الرئيسية</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">عن الأكاديمية</a>
              <a href="#programs" className="text-gray-700 hover:text-orange-500 transition-colors">البرامج</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-500 transition-colors">المعرض</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">آراء الطلاب</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">التواصل</a>
            </div>

            <Button className="hidden md:flex bg-orange-500 hover:bg-orange-700">
              <a href="#contact">سجل الآن</a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setMobileMenuOpen(false)}>الرئيسية</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setMobileMenuOpen(false)}>عن الأكاديمية</a>
              <a href="#programs" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setMobileMenuOpen(false)}>البرامج</a>
              <a href="#gallery" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setMobileMenuOpen(false)}>المعرض</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setMobileMenuOpen(false)}>آراء الطلاب</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-orange-500" onClick={() => setMobileMenuOpen(false)}>التواصل</a>
              <Button className="w-full bg-orange-500 hover:bg-orange-700 mt-2">
                <a href="#contact">سجل الآن</a>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-orange-50 via-white to-amber-50 islamic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMjAgMjBtLTE1IDBhMTUgMTUgMCAxIDAgMzAgMGExNSAxNSAwIDEgMC0zMCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNTk2NjkiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 px-4 py-1 text-base">
              بإشراف الشيخ عبد الله جلال
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              أكاديمية بداية
              <br />
              <span className="text-orange-500">لتحفيظ القرآن الكريم</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              نساعدك على حفظ كتاب الله بطريقة علمية منظمة مع معلمين متخصصين ومناهج معتمدة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-700 text-lg px-8 py-6">
                <a href="#contact">ابدأ رحلتك الآن</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-6">
                <MessageCircle className="ml-2 w-5 h-5" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">طالب وطالبة</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <Award className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">معلم متخصص</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600">سنوات من الخبرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">عن الأكاديمية</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">رؤيتنا</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                نسعى لأن نكون المرجع الأول في تحفيظ القرآن الكريم وتعليم علومه، من خلال منهجية علمية متطورة وكوادر تعليمية متميزة، لنساهم في بناء جيل قرآني واعٍ يحمل كتاب الله في قلبه وعقله.
              </p>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-8">رسالتنا</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">تحفيظ القرآن الكريم بطريقة علمية منظمة</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">تعليم أحكام التجويد والقراءة الصحيحة</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">غرس حب القرآن في نفوس النشء</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">توفير بيئة تعليمية محفزة ومشجعة</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&h=600&fit=crop"
                  alt="الشيخ عبد الله جلال"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">الشيخ عبد الله جلال</h3>
                <p className="text-orange-500 font-semibold mb-4">مؤسس ومشرف الأكاديمية</p>
                <p className="text-gray-700 leading-relaxed">
                  حاصل على إجازة في القرآن الكريم برواية حفص عن عاصم، وله خبرة تزيد عن 15 عاماً في تحفيظ القرآن وتعليم أحكام التجويد. خريج كلية الشريعة والدراسات الإسلامية، وقد قام بتخريج المئات من حفظة كتاب الله.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">برامجنا وخططنا</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">نوفر برامج متنوعة تناسب جميع الفئات العمرية والمستويات</p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl">برنامج الحفظ المتقن</CardTitle>
                <CardDescription className="text-base">للأطفال والكبار</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>حفظ القرآن كاملاً أو أجزاء منه</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>مراجعة دورية منتظمة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>متابعة فردية مع كل طالب</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>شهادات معتمدة عند الإتمام</span>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-orange-700 mb-1">500 ريال/شهر</p>
                  <p className="text-sm text-gray-600">4 حصص أسبوعياً</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-amber-600 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">دورة التجويد</CardTitle>
                <CardDescription className="text-base">تعلم أحكام التلاوة</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>أحكام النون الساكنة والتنوين</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>أحكام الميم الساكنة والمدود</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>صفات الحروف ومخارجها</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>تطبيق عملي على القراءة</span>
                  </li>
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-amber-700 mb-1">300 ريال/شهر</p>
                  <p className="text-sm text-gray-600">3 حصص أسبوعياً</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">الحلقات المسائية</CardTitle>
                <CardDescription className="text-base">للمبتدئين</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>تعليم القراءة من الصفر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>حفظ قصار السور</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>مجموعات صغيرة (5-7 طلاب)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>أجواء تفاعلية محفزة</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-700 mb-1">250 ريال/شهر</p>
                  <p className="text-sm text-gray-600">3 حصص أسبوعياً</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">عرض خاص للمجموعات العائلية</h3>
            <p className="text-xl mb-6 opacity-90">خصم 20% عند تسجيل 3 أفراد أو أكثر من نفس العائلة</p>
            <Button size="lg" variant="secondary" className="bg-white text-orange-700 hover:bg-gray-100">
              <a href="#contact">استفسر عن العرض</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">معرض الصور</h2>
            <p className="text-xl text-gray-600">لمحات من أنشطتنا وفعالياتنا</p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=400&fit=crop"
                alt="طلاب يتعلمون القرآن"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">حلقات التحفيظ</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&h=400&fit=crop"
                alt="معلم مع طلاب"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">دروس التجويد</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                alt="مكتبة الأكاديمية"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">مكتبة الأكاديمية</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
                alt="حفل التخرج"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">حفل التخرج</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop"
                alt="قاعات الدراسة"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">قاعات الدراسة</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1581579186913-45ac3e648364?w=600&h=400&fit=crop"
                alt="الأنشطة الطلابية"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">الأنشطة الطلابية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">آراء طلابنا وأولياء الأمور</h2>
            <p className="text-xl text-gray-600">ما يقوله من درس معنا</p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "الحمد لله، ابني أتم حفظ جزء عم بفضل الله ثم بفضل المعلمين المتميزين في الأكاديمية. المنهج منظم والمتابعة مستمرة. جزاهم الله خيراً"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-700 font-bold text-lg">أم</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">أم عبد الرحمن</p>
                    <p className="text-sm text-gray-600">ولي أمر</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "تجربة رائعة، تعلمت أحكام التجويد بطريقة سهلة ومبسطة. الشيخ عبد الله جلال معلم متمكن وصبور. أنصح الجميع بالانضمام للأكاديمية"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-700 font-bold text-lg">م</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">محمد السعيد</p>
                    <p className="text-sm text-gray-600">طالب - برنامج التجويد</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "بناتي يحببن الذهاب إلى الأكاديمية، الأجواء رائعة والمعلمات متميزات. لاحظت تحسناً كبيراً في حفظهن ومخارج الحروف. بارك الله فيكم"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-700 font-bold text-lg">ف</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">فاطمة أحمد</p>
                    <p className="text-sm text-gray-600">ولية أمر</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Registration Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h2>
            <p className="text-xl text-gray-600">نسعد بتواصلك معنا</p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">نموذج التسجيل والاستفسار</CardTitle>
                  <CardDescription>املأ البيانات وسنتواصل معك في أقرب وقت</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input
                        id="name"
                        placeholder="أدخل اسمك الكامل"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="05xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">رسالتك</Label>
                      <Textarea
                        id="message"
                        placeholder="اكتب استفسارك أو طلب التسجيل هنا..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-700">
                      إرسال الطلب
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-r-4 border-orange-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">الهاتف</h3>
                      <p className="text-gray-600 text-lg" dir="ltr">01025197043</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-r-4 border-amber-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@bidaya-academy.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-r-4 border-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">العنوان</h3>
                      <p className="text-gray-600">الرياض - حي النرجس</p>
                      <p className="text-gray-600">طريق الملك عبد العزيز</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">واتساب</h3>
                      <p className="mb-3">تواصل معنا مباشرة عبر واتساب</p>
                      <Button variant="secondary" className="bg-white text-orange-700 hover:bg-gray-100">
                        <MessageCircle className="ml-2 w-5 h-5" />
                        <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer">
                          ابدأ المحادثة
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center pt-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">أكاديمية بداية</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                نساعدك على حفظ كتاب الله بطريقة علمية منظمة مع معلمين متخصصين
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">عن الأكاديمية</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-orange-400 transition-colors">البرامج</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">التواصل</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">البرامج</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">برنامج الحفظ المتقن</span></li>
                <li><span className="text-gray-400">دورة التجويد</span></li>
                <li><span className="text-gray-400">الحلقات المسائية</span></li>
                <li><span className="text-gray-400">البرامج الخاصة</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">أوقات العمل</h3>
              <ul className="space-y-2 text-gray-400">
                <li>السبت - الخميس</li>
                <li>8:00 ص - 9:00 م</li>
                <li className="pt-2">الجمعة</li>
                <li>4:00 م - 9:00 م</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 أكاديمية بداية لتحفيظ القرآن الكريم. جميع الحقوق محفوظة.</p>
            <p className="mt-2">بإشراف الشيخ عبد الله جلال</p>
          </div>
        </div>
      </footer>
    </div>
  )
}