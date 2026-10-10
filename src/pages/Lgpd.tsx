import { Shield, Lock, Eye, FileText, UserCheck, Server, RefreshCw, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const Lgpd: React.FC = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <SectionTitle
            subtitle="SEGURANÇA E PRIVACIDADE"
            title="Compromisso com a proteção dos seus dados."
          />
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            A Kode Saúde entende que dados de saúde são sensíveis e exigem tratamento especial.
            Nossas soluções são desenvolvidas considerando princípios e requisitos aplicáveis da LGPD,
            garantindo transparência, segurança e respeito à privacidade.
          </p>
        </div>
      </section>

      {/* Princípios */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Princípios de Proteção de Dados</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Finalidade', desc: 'Os dados são coletados apenas para propósitos legítimos, específicos e explícitos relacionados à gestão em saúde.' },
              { icon: Eye, title: 'Transparência', desc: 'Garantimos clareza sobre como os dados são tratados, quem acessa e por quanto tempo são armazenados.' },
              { icon: Lock, title: 'Minimização', desc: 'Coletamos e tratamos apenas os dados estritamente necessários para a prestação dos serviços contratados.' },
              { icon: Shield, title: 'Segurança', desc: 'Adoção de medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados.' },
              { icon: UserCheck, title: 'Direitos do Titular', desc: 'Respeito aos direitos de acesso, correção, exclusão e portabilidade conforme previsto na legislação.' },
              { icon: RefreshCw, title: 'Prestação de Contas', desc: 'Demonstração de medidas eficazes para comprovar o cumprimento das normas de proteção de dados.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança Técnica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900">Arquitetura Segura por Design</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A arquitetura das nossas soluções é planejada para permitir a implementação de camadas robustas de segurança, desde o desenvolvimento até a operação em produção.
            </p>

            <ul className="space-y-4">
              {[
                'Controle de acesso baseado em papéis (RBAC)',
                'Autenticação segura e proteção de credenciais',
                'Criptografia de dados em trânsito e em repouso',
                'Logs de auditoria e rastreabilidade de ações',
                'Segregação de ambientes (dev, homologação, prod)',
                'Backups automatizados e planos de recuperação',
                'Proteção de APIs contra acessos indevidos',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 mt-1 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Server size={32} className="text-brand-400" />
                <h3 className="text-2xl font-bold">Dados de Saúde</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Informações relacionadas à saúde possuem tratamento especialmente protegido pela legislação brasileira. Entendemos a responsabilidade envolvida no manuseio desses registros e aplicamos rigorosos padrões de confidencialidade.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-slate-400 italic">
                  "As soluções podem implementar funcionalidades adicionais de segurança conforme necessidades específicas de cada município ou instituição."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  );
};

export default Lgpd;