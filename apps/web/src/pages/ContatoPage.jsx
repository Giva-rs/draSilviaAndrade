import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import FloralDecorator from '@/components/FloralDecorator.jsx';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContatoPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 98765-4321',
      link: 'tel:+5511987654321'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@silviaandrade.com.br',
      link: 'mailto:contato@silviaandrade.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Paulista, 1842 - São Paulo, SP',
      link: 'https://maps.google.com'
    }
  ];

  const officeHours = [
    { day: 'Segunda a Sexta', hours: '8h às 20h' },
    { day: 'Sábado', hours: '9h às 14h' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Dra. Silvia Andrade | Agende sua Consulta</title>
        <meta name="description" content="Entre em contato com a Dra. Silvia Andrade para agendar sua consulta de psicologia. Atendimento presencial e online. Telefone: (11) 98765-4321" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative py-20 bg-accent text-accent-foreground overflow-hidden">
          <FloralDecorator position="top-right" className="opacity-20" />
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Entre em contato
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Estou aqui para ajudar você. Agende sua consulta e dê o primeiro passo em direção ao seu bem-estar
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-font text-3xl font-semibold text-foreground mb-6 text-balance">
                  Envie sua mensagem
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Preencha o formulário abaixo e entrarei em contato em até 24 horas. Todas as informações são tratadas com total confidencialidade.
                </p>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="heading-font text-3xl font-semibold text-foreground mb-6 text-balance">
                    Informações de contato
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target={item.icon === MapPin ? '_blank' : undefined}
                        rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-200"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.content}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="bg-card border-border/50">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                        <CardTitle className="heading-font text-2xl">Horário de atendimento</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {officeHours.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                            <span className="font-medium text-foreground">{item.day}</span>
                            <span className="text-muted-foreground">{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-secondary text-secondary-foreground rounded-2xl p-6 relative overflow-hidden"
                >
                  <FloralDecorator position="bottom-right" className="opacity-20" />
                  
                  <div className="relative z-10">
                    <h3 className="heading-font text-2xl font-semibold mb-4">Atendimento de emergência</h3>
                    <p className="leading-relaxed mb-4">
                      Em caso de emergência psicológica, procure imediatamente o serviço de saúde mais próximo ou ligue para o CVV (Centro de Valorização da Vida):
                    </p>
                    <a
                      href="tel:188"
                      className="inline-flex items-center space-x-2 font-semibold hover:underline"
                    >
                      <Phone className="w-5 h-5" />
                      <span>188 (24 horas, gratuito)</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
                Perguntas frequentes
              </h2>
              <div className="space-y-6 text-left">
                <div className="bg-card rounded-xl p-6">
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-3">Como funciona a primeira consulta?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A primeira consulta é um momento de conhecimento mútuo. Conversaremos sobre suas necessidades, expectativas e objetivos. É também uma oportunidade para você conhecer meu trabalho e decidir se deseja iniciar o processo terapêutico.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6">
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-3">Quanto tempo dura o tratamento?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A duração varia de acordo com cada pessoa e seus objetivos. Algumas pessoas buscam apoio para questões pontuais, enquanto outras preferem um acompanhamento mais longo. Você tem total autonomia para decidir quando encerrar o processo.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6">
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-3">Aceita plano de saúde?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trabalho como profissional particular, mas forneço recibos que podem ser utilizados para reembolso junto ao seu plano de saúde. Consulte sua operadora sobre as condições de reembolso.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContatoPage;