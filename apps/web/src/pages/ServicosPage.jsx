import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import FloralDecorator from '@/components/FloralDecorator.jsx';
import { User, Users, Sparkles, Heart } from 'lucide-react';

const ServicosPage = () => {
  const services = [
    {
      icon: User,
      title: 'Terapia individual',
      description: 'Espaço seguro para explorar pensamentos, emoções e comportamentos. Trabalho focado no autoconhecimento, desenvolvimento pessoal e manejo de ansiedade, estresse e outros desafios emocionais. Ideal para adultos que buscam crescimento pessoal ou estão enfrentando momentos difíceis.'
    },
    {
      icon: Users,
      title: 'Terapia de casal',
      description: 'Fortalecimento de vínculos e comunicação no relacionamento. Ajudo casais a melhorarem a comunicação, resolverem conflitos de forma saudável e reconectarem emocionalmente. Atendo casais em qualquer fase do relacionamento, desde o início até momentos de crise.'
    },
    {
      icon: Sparkles,
      title: 'Terapia para adolescentes',
      description: 'Apoio especializado para adolescentes em fase de desenvolvimento. Trabalho questões de autoestima, identidade, relacionamentos, desempenho escolar e transição para a vida adulta. Atendimento para adolescentes de 12 a 18 anos em um ambiente acolhedor e sem julgamentos.'
    },
    {
      icon: Heart,
      title: 'Orientação parental',
      description: 'Orientação para pais sobre desenvolvimento infantil e dinâmicas familiares. Ofereço estratégias de comunicação efetiva, estabelecimento de limites saudáveis e fortalecimento do vínculo familiar. Ideal para pais e responsáveis que buscam melhorar a relação com seus filhos.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Dra. Silvia Andrade | Terapia Individual, Casal e Adolescentes</title>
        <meta name="description" content="Conheça os serviços de psicologia clínica oferecidos: terapia individual, terapia de casal, atendimento para adolescentes e orientação parental. Atendimento presencial e online." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
          <FloralDecorator position="top-left" className="opacity-20" />
          <FloralDecorator position="bottom-right" className="opacity-20" />
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Serviços oferecidos
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Atendimento psicológico personalizado para diferentes necessidades e momentos da vida
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <FloralDecorator position="top-right" className="opacity-20" />
              
              <div className="relative z-10">
                <h2 className="heading-font text-3xl md:text-4xl font-semibold mb-6 text-balance">
                  Atendimento presencial e online
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="heading-font text-2xl font-semibold mb-4">Presencial</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Consultório localizado na Av. Paulista, 1842 - São Paulo, SP. Ambiente acolhedor e confortável, projetado para proporcionar privacidade e tranquilidade durante as sessões.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Estacionamento conveniado e fácil acesso por transporte público.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-font text-2xl font-semibold mb-4">Online</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Atendimento por videochamada com a mesma qualidade e sigilo do atendimento presencial. Ideal para quem tem agenda corrida ou prefere a comodidade de casa.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Plataforma segura e de fácil utilização, garantindo sua privacidade.
                    </p>
                  </div>
                </div>
              </div>
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
              className="text-center mb-12"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
                Como funciona o atendimento?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="heading-font text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <div>
                    <h3 className="heading-font text-xl font-semibold text-foreground mb-2">Primeiro contato</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Entre em contato pelo formulário, telefone ou WhatsApp para agendar sua primeira consulta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="heading-font text-2xl font-bold text-primary-foreground">2</span>
                  </div>
                  <div>
                    <h3 className="heading-font text-xl font-semibold text-foreground mb-2">Primeira sessão</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Na primeira sessão, conversaremos sobre suas necessidades, objetivos e expectativas para o processo terapêutico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="heading-font text-2xl font-bold text-primary-foreground">3</span>
                  </div>
                  <div>
                    <h3 className="heading-font text-xl font-semibold text-foreground mb-2">Acompanhamento</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As sessões seguintes são espaços para explorar seus pensamentos, emoções e desenvolver estratégias para alcançar seus objetivos.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <h3 className="heading-font text-2xl font-semibold text-foreground mb-6">Informações importantes</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">Duração das sessões: 50 minutos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">Frequência recomendada: semanal ou quinzenal</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">Sigilo profissional garantido</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">Formas de pagamento: dinheiro, PIX, cartão</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">Possibilidade de reembolso por plano de saúde</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicosPage;