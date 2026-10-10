import { Link } from 'react-router-dom';
import { ArrowRight, Database, Server, Activity, FileText, Shield, Users, Monitor } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const systems = [
  { name: 'eSUS PEC', icon: Monitor },
  { name: 'eSUS Território', icon: Activity },
  { name: 'eSUS Regulação', icon: FileText },
  { name: 'eSUS AF/SIGAF', icon: FileText },
  { name: 'SIA/SUS', icon: Database },
  { name: 'BPA', icon: FileText },
  { name: 'CNES', icon: Server },
  { name: 'SISPNCD/LOCALIDADE', icon: Activity },
  { name: 'CADSUS/CADWEB', icon: Users },
  { name: 'RNDS', icon: Shield },
  { name: 'TABWIN/TABNET', icon: Database },
];

const QuemSomos: React.FC = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      {/* Hero - Quem está por trás */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <SectionTitle
            subtitle="QUEM SOMOS"
            title="Quem está por trás da Kode Saúde."
          />
          <div className="mt-8 space-y-6">
            <p className="text-xl text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-900">Kayque Oliveira</span> atua na área da saúde pública municipal e possui experiência prática na Atenção Primária à Saúde, sistemas de informação em saúde, análise de dados e processos relacionados ao SUS.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Possui formação na área de tecnologia, com conhecimento em desenvolvimento de sistemas, banco de dados e criação de soluções digitais. Sua experiência profissional dentro dos serviços de saúde permitiu identificar problemas reais enfrentados por profissionais e gestores.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Essa vivência levou à criação de ferramentas voltadas para facilitar rotinas, melhorar análises e apoiar decisões. A <span className="font-bold text-blue-700">Kode Saúde</span> surge da união entre conhecimento em tecnologia e experiência prática dentro da saúde pública.
            </p>
          </div>
        </div>
      </section>

      {/* Sistemas com Experiência */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
              Experiência Técnica
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Sistemas que Kayque tem Experiência
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Conhecimento prático nos principais sistemas de informação do SUS e ferramentas de gestão em saúde.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {systems.map((system) => (
              <div
                key={system.name}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <system.icon size={20} className="text-blue-600" />
                </div>
                <span className="text-sm font-bold text-slate-700">{system.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Da realidade da saúde pública para soluções que funcionam.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Não desenvolvemos software genérico adaptado para saúde. Criamos ferramentas
              a partir da vivência diária nos serviços, entendendo os desafios reais que
              gestores, profissionais e agentes enfrentam no dia a dia do SUS.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Conheça nossas soluções <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;