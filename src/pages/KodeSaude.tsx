import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, LayoutGrid, Server, Users, FlaskConical, Truck, Stethoscope, ShieldCheck, ClipboardList, Pill, CalendarCheck, Activity, FileText, HeartPulse, PhoneCall } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const modules = [
  { name: 'Painel de Chamadas', icon: PhoneCall, desc: 'Painel de chamadas intuitivo e personalizado, com texto e voz para a recepção.' },
  { name: 'Pronto Atendimento', icon: Stethoscope, desc: 'Atendimento médico/enfermagem' },
  { name: 'Regulação', icon: ClipboardList, desc: 'Central de regulação e vagas' },
  { name: 'Especialidades', icon: Activity, desc: 'Agendamento de consultas especializadas' },
  { name: 'TFD', icon: FileText, desc: 'Tratamento Fora de Domicílio' },
  { name: 'Farmácia', icon: Pill, desc: 'Dispensação e controle de medicamentos' },
  { name: 'Internação', icon: Server, desc: 'Controle de pacientes e altas' },
  { name: 'Almoxarifado', icon: LayoutGrid, desc: 'Entrada/saída de materiais' },
  { name: 'Laboratório', icon: FlaskConical, desc: 'Agendamento e resultados de exames' },
  { name: 'Transporte Sanitário', icon: Truck, desc: 'Controle da frota e agendamentos' },
  { name: 'Faturamento SUS', icon: ShieldCheck, desc: 'Gerador BPA/SIA-SUS' },
  { name: 'Assistência Social', icon: Users, desc: 'Atendimento multiprofissional' },
  { name: 'Agenda Centralizada', icon: CalendarCheck, desc: 'Gestão unificada de agendas' },
  { name: 'Relatórios Gerenciais', icon: HeartPulse, desc: 'Indicadores e dashboards' },
];

const KodeSaude: React.FC = () => {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
                Plataforma Completa
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Kode Gestão em Saúde
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Plataforma completa de gestão pública em saúde. Módulos integrados para recepção, atendimento urgência/emergência, farmácia, laboratório, transporte, regulação e faturamento SUS.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contato" className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/20">
                  Solicitar demonstração
                </Link>
                <Link to="/quem-somos" className="text-slate-600 hover:text-brand-600 font-semibold px-6 py-3.5 transition-colors">
                  Saiba mais sobre nós
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-200/20 blur-3xl rounded-full transform scale-90" />
              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
                <img src="/images/kode-gestao-dashboard.png" alt="Painel do Kode Gestão em Saúde" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura Modular */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="ARQUITETURA MODULAR"
          title="Todos os módulos que sua secretaria precisa."
        />
        <p className="mt-4 text-slate-600 max-w-3xl mb-12">
          A arquitetura do Kode Gestão em Saúde permite ativar apenas os módulos necessários para
          seu município, garantindo simplicidade na implantação e escalabilidade conforme
          a demanda cresce.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modules.map((mod) => (
            <div key={mod.name} className="group p-4 rounded-xl border border-slate-100 bg-white hover:border-brand-200 hover:shadow-md transition-all cursor-default">
              <div className="w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-brand-50 flex items-center justify-center mb-3 transition-colors">
                <mod.icon size={20} className="text-slate-500 group-hover:text-brand-600 transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{mod.name}</h3>
              <p className="text-xs text-slate-500 leading-snug">{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tight">
              Por que escolher o Kode Gestão em Saúde?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Banco de dados dos cidadãos', desc: 'Os dados podem advir diretamente do e-SUS PEC, evitando retrabalho de cadastros de pacientes.' },
                { title: 'Integração Total', desc: 'Dados fluem entre todos os módulos sem retrabalho.' },
                { title: 'Conformidade SUS', desc: 'Relatórios e exportações compatíveis com o Ministério da Saúde.' },
                { title: 'Segurança de Dados', desc: 'Criptografia, backups e controle de acesso rigoroso.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="text-brand-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center py-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">
          Modernize a saúde do seu município.
        </h2>
        <p className="text-slate-600 mb-8 text-lg">
          Agende uma apresentação técnica e veja como o Kode Gestão em Saúde pode se adaptar à realidade local.
        </p>
        <Link to="/contato" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-10 py-4 rounded-xl transition-all">
          Falar com consultor <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default KodeSaude;