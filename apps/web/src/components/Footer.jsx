import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="heading-font text-lg font-semibold text-foreground mb-4">
              Silvia Andrade
            </h3>
            <p className="text-sm leading-relaxed">
              Psicologia humanizada para seu bem-estar. Atendimento presencial e online com foco em acolhimento e transformação.
            </p>
          </div>

          <div>
            <h3 className="heading-font text-lg font-semibold text-foreground mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">(11) 98765-4321</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">contato@silviaandrade.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Av. Paulista, 1842 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="heading-font text-lg font-semibold text-foreground mb-4">
              Redes sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-primary/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-primary/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-primary/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm">
            © 2026 Silvia Andrade. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/contato" className="hover:text-foreground transition-colors duration-200">
              Política de Privacidade
            </Link>
            <Link to="/contato" className="hover:text-foreground transition-colors duration-200">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;