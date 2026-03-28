import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloralDecorator from '@/components/FloralDecorator.jsx';
import { GraduationCap, Award, Heart, BookOpen } from 'lucide-react';

const SobrePage = () => {
  const education = [
    {
      degree: 'Graduação em Psicologia',
      institution: 'Universidade de São Paulo (USP)',
      year: '2008 - 2012'
    },
    {
      degree: 'Especialização em Psicologia Clínica',
      institution: 'Pontifícia Universidade Católica de São Paulo (PUC-SP)',
      year: '2013 - 2015'
    },
    {
      degree: 'Formação em Terapia Humanista',
      institution: 'Instituto de Psicologia Humanista',
      year: '2016 - 2018'
    }
  ];

  const credentials = [
    'CRP 06/123456',
    'Membro da Sociedade Brasileira de Psicologia',
    'Certificação em Atendimento Online',
    '12 anos de experiência clínica'
  ];

  return (
    <>
      <Helmet>
        <title>Sobre - Dra. Silvia Andrade | Psicóloga Clínica</title>
        <meta name="description" content="Conheça a trajetória profissional da Dra. Silvia Andrade, psicóloga clínica com abordagem humanista e 12 anos de experiência em atendimento terapêutico." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <FloralDecorator position="top-right" className="opacity-20" />
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Sobre mim
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Dedicada a promover saúde mental e bem-estar através de uma abordagem humanizada e acolhedora
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                    alt="Dra. Silvia Andrade em seu consultório"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-font text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
                  Minha trajetória
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Sou Silvia Andrade, psicóloga clínica com 12 anos de experiência dedicados ao cuidado da saúde mental e emocional. Minha jornada na psicologia começou com o desejo profundo de ajudar pessoas a encontrarem equilíbrio e bem-estar em suas vidas.
                  </p>
                  <p>
                    Ao longo dos anos, tive o privilégio de acompanhar centenas de pessoas em suas jornadas de autoconhecimento e transformação. Cada história me ensina algo novo e reforça minha paixão por essa profissão.
                  </p>
                  <p>
                    Acredito que cada pessoa possui recursos internos para superar desafios e alcançar seus objetivos. Meu papel é criar um espaço seguro e acolhedor onde você possa explorar seus pensamentos, emoções e comportamentos sem julgamentos.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <GraduationCap className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <h2 className="heading-font text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
                  Formação acadêmica
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Formação sólida e contínua atualização para oferecer o melhor atendimento
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card border-border/50">
                      <CardHeader>
                        <CardTitle className="heading-font text-xl text-balance">{item.degree}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-2">{item.institution}</p>
                        <p className="text-sm text-muted-foreground/80">{item.year}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <Heart className="w-12 h-12 text-primary-foreground mb-4" />
                  <h2 className="heading-font text-3xl font-semibold text-foreground mb-4 text-balance">
                    Abordagem terapêutica
                  </h2>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Trabalho com a abordagem humanista, que coloca você no centro do processo terapêutico. Essa perspectiva valoriza sua capacidade de crescimento pessoal e autodeterminação.
                  </p>
                  <p>
                    Acredito que cada pessoa é única e merece um atendimento personalizado. Por isso, adapto as técnicas e estratégias às suas necessidades específicas, respeitando seu ritmo e seus objetivos.
                  </p>
                  <p>
                    O foco está em promover o autoconhecimento, fortalecer sua autoestima e desenvolver recursos para lidar com os desafios da vida de forma mais saudável e equilibrada.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <Award className="w-12 h-12 text-primary-foreground mb-4" />
                  <h2 className="heading-font text-3xl font-semibold text-foreground mb-4 text-balance">
                    Credenciais profissionais
                  </h2>
                </div>
                <div className="space-y-3">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-muted"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-foreground flex-shrink-0"></div>
                      <span className="text-lg text-foreground">{credential}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-accent text-accent-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <FloralDecorator position="bottom-right" className="opacity-20" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-6" />
                <h2 className="heading-font text-3xl md:text-4xl font-semibold mb-6 text-balance">
                  Um espaço seguro para você
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Meu consultório é um ambiente acolhedor, livre de julgamentos, onde você pode se expressar com autenticidade. Aqui, suas emoções são validadas e suas experiências são respeitadas.
                </p>
                <p className="text-lg leading-relaxed">
                  Seja qual for o desafio que você está enfrentando, estou aqui para caminhar ao seu lado nessa jornada de autoconhecimento e transformação. Juntos, podemos construir caminhos para o seu bem-estar emocional.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SobrePage;