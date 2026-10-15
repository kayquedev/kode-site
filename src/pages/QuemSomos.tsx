import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Shield, Lightbulb, Users, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const QuemSomos: React.FC = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <SectionTitle
            subtitle="QUEM SOMOS"
            title="Tecnologia com propósito na saúde pública."
          />
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            A Kode Gestão em Saúde desenvolve soluções tecnológicas voltadas às necessidades reais
            da gestão pública em saúde, buscando transformar dados e processos em ferramentas
            práticas para profissionais, equipes e gestores.
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Nossas soluções são construídas pensando na rotina real dos serviços de saúde,
            unindo conhecimento técnico em tecnologia e experiência prática dentro do SUS.
          </p>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
              <p className="text-slate-600 leading-relaxed">
                Desenvolver soluções tecnológicas que facilitem a gestão e contribuam para
                a melhoria dos processos na saúde pública, tornando o trabalho mais eficiente
                e os resultados mais transparentes.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
              <p className="text-slate-600 leading-relaxed">
                Ser referência no desenvolvimento de soluções tecnológicas aplicadas à gestão
                e análise de dados em saúde, reconhecida pela qualidade, inovação e compromisso
                com a transformação digital do SUS.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Heart size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
              <ul className="space-y-2">
                {[
                  { icon: Lightbulb, text: 'Inovação' },
                  { icon: Shield, text: 'Responsabilidade e Segurança' },
                  { icon: CheckCircle2, text: 'Simplicidade e Eficiência' },
                  { icon: Users, text: 'Respeito aos Dados e ao Usuário' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-2 text-slate-600">
                    <item.icon size={16} className="text-indigo-600 shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
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
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
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