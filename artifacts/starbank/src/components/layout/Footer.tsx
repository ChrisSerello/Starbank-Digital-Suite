import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
                S
              </div>
              <span className="font-bold text-xl tracking-tight">Grupo Starbank</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Ecossistema financeiro enterprise-grade. Integrando infraestrutura bancária, crédito digital e soluções corporativas com máxima segurança e conformidade.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#ecossistema" className="hover:text-foreground transition-colors">Banking as a Service</a></li>
              <li><a href="#ecossistema" className="hover:text-foreground transition-colors">Credit as a Service</a></li>
              <li><a href="#ecossistema" className="hover:text-foreground transition-colors">Open Star</a></li>
              <li><a href="#solucoes" className="hover:text-foreground transition-colors">Crédito Consignado</a></li>
              <li><a href="#solucoes" className="hover:text-foreground transition-colors">Gestão Operacional</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Institucional</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#overview" className="hover:text-foreground transition-colors">Sobre o Grupo</a></li>
              <li><a href="#diferenciais" className="hover:text-foreground transition-colors">Governança</a></li>
              <li><a href="#confianca" className="hover:text-foreground transition-colors">Compliance</a></li>
              <li><a href="#publico" className="hover:text-foreground transition-colors">Públicos Atendidos</a></li>
              <li><a href="#contato" className="hover:text-foreground transition-colors">Contato Comercial</a></li>
            </ul>
          </div>

          <div id="contato">
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contato@grupostarbank.com.br</li>
              <li>Telefone comercial: informar número oficial</li>
              <li className="pt-2">
                <span className="block text-foreground font-medium mb-1">Endereço</span>
                Informar endereço corporativo oficial
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Grupo Starbank. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Segurança</a>
          </div>
        </div>
      </div>
    </footer>
  );
}