import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export function MainContent() {
  return (
    <main className="flex-1">
      <div className="space-y-12">
        {/* Hero Section */}
        <section
          id="top"
          className="py-20 text-center bg-linear-to-b from-primary/5 to-background"
        >
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
              GeoExploration
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные геологические и геодезические услуги в
              Казахстане. Бурение скважин, инженерно-геологические изыскания,
              топографические съемки.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Наши услуги
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-shadow border-primary/10"
                >
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Услуга {i + 1}
                    </CardTitle>
                    <CardDescription>
                      Краткое описание услуги и её преимущества
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  О компании
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Наш опыт</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Более 10 лет на рынке геологических и геодезических услуг
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Наша команда</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Профессиональные специалисты с большим опытом работы
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Наши работы
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Проект {i + 1}
                    </CardTitle>
                    <CardDescription>
                      Описание выполненного проекта
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-primary/10 rounded-md mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Видео отзывы
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-primary/10 rounded-t-lg" />
                    <div className="p-6">
                      <h3 className="font-semibold mb-2 text-primary">
                        Отзыв клиента {i + 1}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-us" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Свяжитесь с нами
            </h2>
            <Card className="max-w-2xl mx-auto border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-primary/10 rounded-md" />
                  <p className="text-sm text-muted-foreground text-center">
                    Форма обратной связи будет добавлена позже
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional content for scrolling */}
        <section className="py-20">
          <div className="container">
            <div className="prose prose-slate mx-auto max-w-3xl">
              <h2 className="text-primary">Дополнительная информация</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
