import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Database, Users, Activity, Smartphone, BarChart3, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
            Tecnologia para Saúde Pública
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Transformando a gestão da <br className="hidden md:block" />
            <span className="text-brand-600">saúde pública</span> com tecnologia.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Soluções inteligentes para gestão, análise de dados, Atenção Primária,
            Urgência/Emergência, Endemias e diferentes áreas da saúde pública municipal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-600/20"
            >
              Conheça nossas soluções
              <ArrowRight size={20} />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-8 py-4 rounded-xl transition-all"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionTitle
              subtitle="SOBRE A KODE SAÚDE"
              title="Tecnologia desenvolvida a partir da realidade da saúde pública."
            />
            <p className="text-slate-600 leading-relaxed">
              A Kode Saúde desenvolve soluções tecnológicas voltadas às necessidades reais
              da gestão pública em saúde, buscando transformar dados e processos em ferramentas
              práticas para profissionais, equipes e gestores.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Da rotina dos serviços de saúde para soluções que facilitam a gestão.
              Nossas ferramentas são construídas por quem entende os desafios diários
              do SUS e da atenção primária.
            </p>
            <ul className="space-y-3 pt-2">
              {['Gestão baseada em dados', 'Segurança e LGPD', 'Apoio à tomada de decisão', 'Integração de sistemas'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Database, label: 'Dados Inteligentes', desc: 'Análise e integração' },
              { icon: Shield, label: 'Segurança Total', desc: 'LGPD e criptografia' },
              { icon: Users, label: 'Foco no Usuário', desc: 'Rotina real do SUS' },
              { icon: Activity, label: 'Indicadores', desc: 'Monitoramento contínuo' },
            ].map((card) => (
              <div key={card.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <card.icon size={32} className="text-brand-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-1">{card.label}</h3>
                <p className="text-sm text-slate-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossas Soluções */}
      <section id="solucoes" className="bg-slate-50 py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle
              subtitle="NOSSAS SOLUÇÕES"
              title="Ecossistema completo para gestão em saúde."
              centered
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kode Saúde Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
                <Activity size={24} className="text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Kode Saúde</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Plataforma completa de gestão pública em saúde. Módulos integrados para
                recepção, atendimento, farmácia, laboratório, regulação e faturamento SUS.
              </p>
              <Link to="/kode-saude" className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors">
                Saiba mais <ArrowRight size={16} />
              </Link>
            </div>

            {/* Kode APS Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <BarChart3 size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Kode APS</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Inteligência para Atenção Primária. Monitoramento de indicadores,
                qualidade cadastral, acompanhamento nominal e apoio às equipes de saúde.
              </p>
              <Link to="/kode-aps" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                Saiba mais <ArrowRight size={16} />
              </Link>
            </div>

            {/* Kode Endemias Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <Smartphone size={24} className="text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Kode Endemias</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Solução integrada para Agentes de Combate às Endemias. App mobile offline,
                painel web, controle vetorial e relatórios de produtividade.
              </p>
              <Link to="/kode-endemias" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                Saiba mais <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/ferramentas" className="inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-brand-600 transition-colors">
              Ver todas as ferramentas e utilitários <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">
            Pronto para modernizar a gestão?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg relative z-10">
            Entre em contato e descubra como as soluções Kode Saúde podem transformar
            a realidade do seu município.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-brand-600/30 relative z-10"
          >
            Fale com um especialista
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;