import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloralDecorator from '@/components/FloralDecorator.jsx';
import { Heart, Shield, Sparkles, Clock } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Acolhimento humanizado',
      description: 'Espaço seguro e livre de julgamentos para você se expressar com autenticidade e confiança.'
    },
    {
      icon: Shield,
      title: 'Sigilo profissional',
      description: 'Suas informações são tratadas com total confidencialidade, respeitando o código de ética da psicologia.'
    },
    {
      icon: Sparkles,
      title: 'Abordagem personalizada',
      description: 'Cada pessoa é única. O atendimento é adaptado às suas necessidades e objetivos específicos.'
    },
    {
      icon: Clock,
      title: 'Horários flexíveis',
      description: 'Atendimento presencial e online com horários que se ajustam à sua rotina.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Silvia Andrade - Psicologia Clínica | Atendimento Humanizado</title>
        <meta name="description" content="Consultório de psicologia clínica com abordagem humanista. Atendimento individual, casal e adolescentes. Agende sua consulta com a Dra. Silvia Andrade." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1590658112106-9d0ae4bcf7fa"
              alt="Ambiente acolhedor de consultório de psicologia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/90"></div>
          </div>

          <FloralDecorator position="top-right" className="z-10 opacity-30" />
          <FloralDecorator position="bottom-left" className="z-10 opacity-30" />

          <div className="relative z-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Bem-vindo ao consultório da Dra. Silvia Andrade
              </h1>
              <p className="heading-font text-2xl md:text-3xl text-primary-foreground/90 mb-8 text-balance">
                Psicologia Clínica
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                Um espaço acolhedor para você cuidar da sua saúde mental e emocional. Atendimento humanizado com foco no seu bem-estar.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-card text-card-foreground hover:bg-card/90 active:scale-[0.98] transition-all duration-200 text-lg px-8 py-6 shadow-lg"
              >
                <Link to="/contato">Agendar consulta</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
                Por que escolher nosso consultório?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Oferecemos um ambiente seguro e acolhedor para sua jornada de autoconhecimento e transformação.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                        <feature.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="heading-font text-2xl text-balance">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
          <FloralDecorator position="top-left" className="opacity-20" />
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-font text-3xl md:text-4xl font-semibold mb-6 text-balance">
                  Sobre a Dra. Silvia Andrade
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Com 12 anos de experiência em psicologia clínica, minha missão é oferecer um espaço de acolhimento e transformação para cada pessoa que busca apoio emocional.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Utilizo a abordagem humanista, que valoriza o potencial de cada indivíduo e promove o autoconhecimento como caminho para o bem-estar.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-secondary-foreground/30 hover:bg-secondary-foreground/10 active:scale-[0.98] transition-all duration-200"
                >
                  <Link to="/sobre">Conheça mais sobre mim</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-secondary-foreground/10 overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                    alt="Dra. Silvia Andrade, psicóloga clínica"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
                Pronto para começar sua jornada?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Agende sua primeira consulta e dê o primeiro passo em direção ao seu bem-estar emocional.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 text-lg px-8 py-6"
              >
                <Link to="/contato">Entrar em contato</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;