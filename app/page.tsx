'use client';

import { useState } from 'react';
import {
  Heart,
  Pill,
  Apple,
  Scissors,
  Brain,
  MessageCircle,
  X,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Dog,
  Cat,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/90">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">PetCare</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dịch Vụ
            </a>
            <a href="#pets" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Chăm Sóc Thú Cưng
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#footer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Liên Hệ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Chăm Sóc <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Những Người Bạn Lông Xù</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Giải pháp chăm sóc thú cưng toàn diện được thiết kế với tình yêu và chuyên môn. Từ kiểm tra sức khỏe đến lời khuyên về dinh dưỡng, chúng tôi ở đây cho mọi giai đoạn của hành trình thú cưng của bạn.
              </p>
              <Button
                size="lg"
                className="w-fit bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Bắt Đầu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 rounded-[3rem] bg-gradient-to-br from-accent/20 to-primary/10 shadow-xl flex items-center justify-center overflow-hidden border-2 border-accent/30">
                <div className="flex gap-8">
                  <Dog className="h-32 w-32 text-primary animate-bounce" style={{ animationDelay: '0s' }} />
                  <Cat className="h-32 w-32 text-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section id="services" className="px-4 py-20 sm:px-6 sm:py-32 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Mọi thứ thú cưng của bạn cần để phát triển với sự chăm sóc chuyên gia và sự chú ý cá nhân
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Pill, title: 'Kiểm Tra Sức Khỏe', description: 'Kiểm tra sức khỏe thường xuyên và tiêm chủng' },
              { icon: Apple, title: 'Lời Khuyên Dinh Dưỡng', description: 'Kế hoạch ăn uống tùy chỉnh cho thú cưng của bạn' },
              { icon: Scissors, title: 'Làm Đẹp', description: 'Làm đẹp và tạo kiểu chuyên nghiệp' },
              { icon: Brain, title: 'Huấn Luyện Hành Vi', description: 'Sửa chữa hành vi chuyên gia' },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="group cursor-pointer border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 rounded-3xl"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/30 group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                    <Icon className="h-7 w-7 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pet Profiles Section */}
      <section id="pets" className="px-4 py-20 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Hướng Dẫn Chăm Sóc Thú Cưng</h2>
            <p className="text-muted-foreground text-lg">Thông tin chăm sóc chuyên biệt cho chó và mèo</p>
          </div>

          <div className="flex justify-center">
            <Tabs defaultValue="dogs" className="w-full max-w-3xl">
              <TabsList className="grid w-full grid-cols-2 bg-white border border-border rounded-2xl p-1">
                <TabsTrigger value="dogs" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white flex gap-2">
                  <Dog className="h-4 w-4" />
                  <span>Chăm Sóc Chó</span>
                </TabsTrigger>
                <TabsTrigger value="cats" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white flex gap-2">
                  <Cat className="h-4 w-4" />
                  <span>Chăm Sóc Mèo</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dogs" className="mt-8 space-y-6">
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-3xl shadow-lg">
                  <h3 className="mb-6 text-2xl font-bold text-foreground">Những Điều Cần Thiết Chăm Sóc Chó</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tập Thể Dục Hàng Ngày: 30-60 phút hoạt động thể chất giúp chó khỏe mạnh và vui vẻ</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dinh Dưỡng: Thức ăn cho chó chất lượng cao với protein và chất dinh dưỡng thích hợp</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Làm Đẹp: Chải lông thường xuyên và cắt móng mỗi 4-6 tuần</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Huấn Luyện: Tăng cường tích cực liên tục để quản lý hành vi</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="cats" className="mt-8 space-y-6">
                <Card className="border-0 bg-gradient-to-br from-accent/10 to-primary/5 p-8 rounded-3xl shadow-lg">
                  <h3 className="mb-6 text-2xl font-bold text-foreground">Những Điều Cần Thiết Chăm Sóc Mèo</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Môi Trường Trong Nhà: Không gian an toàn với khu vực leo trèo và nơi ẩn nấp</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Dinh Dưỡng: Chế độ ăn cân bằng giàu protein và taurin</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Làm Đẹp: Chải lông thường xuyên để ngăn chặn sơ bóng và giảm rụng</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Thời Gian Chơi: Đồ chơi tương tác và hoạt động làm giàu hàng ngày</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-4 py-20 sm:px-6 sm:py-32 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Mẹo Sức Khỏe Thú Cưng</h2>
            <p className="text-muted-foreground text-lg">Những bài viết mới nhất về sức khỏe và chăm sóc thú cưng</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Hướng Dẫn Dinh Dưỡng',
                excerpt: 'Tìm hiểu về chế độ ăn cân bằng và những thực phẩm tốt nhất cho sức khỏe thú cưng của bạn',
                date: '15 Tháng 3, 2024',
                icon: Apple,
              },
              {
                title: 'Quy Trình Tập Thể Dục',
                excerpt: 'Khám phá cách giữ cho thú cưng của bạn hoạt động và khỏe mạnh quanh năm',
                date: '12 Tháng 3, 2024',
                icon: Heart,
              },
              {
                title: 'Sức Khỏe Răng',
                excerpt: 'Mẹo duy trì vệ sinh răng tuyệt vời cho người bạn lông xù của bạn',
                date: '10 Tháng 3, 2024',
                icon: BookOpen,
              },
            ].map((article, idx) => {
              const IconComponent = article.icon;
              return (
                <Card
                  key={idx}
                  className="group cursor-pointer border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 rounded-3xl"
                >
                  <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{article.excerpt}</p>
                  <p className="text-xs text-muted-foreground/70">{article.date}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-border bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/90">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-foreground">PetCare</span>
              </div>
              <p className="text-sm text-muted-foreground">Chăm sóc những người bạn lông xù của bạn với tình yêu và chuyên môn</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Liên Kết Nhanh</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Dịch Vụ</a></li>
                <li><a href="#pets" className="hover:text-primary transition-colors">Chăm Sóc Thú Cưng</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Câu Hỏi Thường Gặp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Hỗ Trợ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:hello@petcare.com" className="hover:text-primary transition-colors">Liên Hệ Chúng Tôi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Chính Sách Bảo Mật</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Điều Khoản Dịch Vụ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trường Hợp Khẩn Cấp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Bản Tin</h4>
              <div className="space-y-3">
                <Input
                  placeholder="Email của bạn"
                  type="email"
                  className="rounded-xl border-border bg-white text-sm"
                />
                <Button className="w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-lg transition-all">
                  Đăng Ký
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PetCare. Bản quyền được bảo lưu. Được tạo bằng tình yêu cho những người yêu thích thú cưng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/90 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Mở trò chuyện Trợ Lý Thú Cưng"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex w-80 sm:w-96 flex-col rounded-3xl bg-white shadow-2xl overflow-hidden h-96 border-2 border-accent/10">
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-accent to-accent/90 p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <h3 className="font-semibold text-white">Trợ Lý Thú Cưng</h3>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="rounded-full p-1 hover:bg-accent/80 transition-colors"
              aria-label="Đóng trò chuyện"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Botpress Chatbot iframe */}
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/03/04/16/20260304161012-EMCM8OJX.json"
            className="flex-1 w-full border-0"
            title="Pet Care Chat Assistant"
          />
        </div>
      )}
    </main>
  );
}
