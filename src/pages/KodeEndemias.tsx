import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Monitor, WifiOff, MapPin, RefreshCw, FileText, BarChart3, CheckSquare } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const KodeEndemias: React.FC = () => {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                Solução Integrada
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Controle do setor de endemias com <br />
                <span className="text-indigo-600">inteligência e mobilidade.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                O Kode Endemias une um aplicativo mobile fácil e prático para trabalho em campo
                do ACE e um painel web completo para gestão e supervisão. Tudo sincronizado,
                mesmo sem conexão com a internet.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contato" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20">
                  Solicitar demonstração
                </Link>
              </div>
            </div>

            {/* Visual Composition: Web + Mobile */}
            <div className="relative h-[400px] w-full">
              {/* Web Dashboard Representation */}
              <div className="absolute top-0 left-0 w-3/4 h-64 bg-white rounded-xl border border-slate-200 shadow-xl p-4 z-10">
                <div className="w-full h-full bg-slate-50 rounded-lg border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 space-y-2">
                  <Monitor size={32} className="opacity-50" />
                  <span className="text-xs font-medium">Painel Web de Gestão</span>
                </div>
              </div>

              {/* Mobile App Representation */}
              <div className="absolute bottom-0 right-0 w-48 h-80 bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl p-2 z-20">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden flex flex-col">
                  <div className="h-6 bg-indigo-600 w-full" />
                  <div className="flex-1 bg-slate-50 p-3 flex flex-col items-center justify-center text-slate-400 space-y-2">
                    <Smartphone size={24} className="opacity-50" />
                    <span className="text-[10px] font-medium text-center">App do Agente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="RECURSOS"
          title="Tecnologia ponta a ponta para o combate às endemias."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Lado do App */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Smartphone className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Aplicativo Mobile</h3>
            </div>
            <ul className="space-y-4">
              {[
                { icon: WifiOff, text: 'Funcionamento 100% Offline' },
                { icon: RefreshCw, text: 'Sincronização das visitas com e-SUS PEC e SISPNCD' },
                { icon: MapPin, text: 'Georreferenciamento de imóveis e focos' },
                { icon: CheckSquare, text: 'Registro rápido de visitas e ações' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon size={20} className="text-indigo-600 mt-1 shrink-0" />
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lado do Web */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Monitor className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Painel Web</h3>
            </div>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: 'Gestão territorial (quadras, faces, setores)' },
                { icon: BarChart3, text: 'Indicadores de produtividade e cobertura' },
                { icon: FileText, text: 'Relatórios gerenciais e operacionais' },
                { icon: CheckSquare, text: 'Planejamento e monitoramento de ciclos' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon size={20} className="text-blue-600 mt-1 shrink-0" />
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fluxo de Trabalho */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-12">Como funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" />

            {[
              { step: '01', title: 'Coleta em Campo', desc: 'O ACE utiliza o app para registrar visitas, focos e ações, mesmo sem internet.' },
              { step: '02', title: 'Sincronização', desc: 'Ao retornar à base, os dados são sincronizados automaticamente com o servidor.' },
              { step: '03', title: 'Gestão e Análise', desc: 'Supervisores acompanham tudo pelo painel web em tempo real.' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xl mx-auto mb-6 relative z-10 ring-4 ring-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-black text-indigo-700 uppercase tracking-widest mb-2">Diferencial</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Por que escolher o Kode Endemias?</h2>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-indigo-100 shadow-sm space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Com ele é possível trazer todos os imóveis já cadastrados na base de dados do e-SUS PEC pelos Agentes de Saúde (ACS) e os ACE poderem realizar os demais tipos de imóveis que os mesmos realizam visitas, como Comércios, Pontos Estratégicos, etc.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              O aplicativo traz a possibilidade do ACE em campo registrar a visita no imóvel com a geolocalização ativa e, após sincronizar as visitas diretamente para o e-SUS PEC, permitir que o Ministério da Saúde acompanhe o trabalho conjunto do ACE e do ACS na Atenção Primária, tendo essas visitas registradas no território. Além disso, também é enviado para o SISPNCD, que são os indicadores epidemiológicos que os ACE devem realizar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center py-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">
          Otimize o trabalho dos seus agentes.
        </h2>
        <p className="text-slate-600 mb-8 text-lg">
          Modernize o controle de endemias do seu município com tecnologia desenvolvida para a realidade do campo.
        </p>
        <Link to="/contato" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-xl transition-all">
          Falar com especialista <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default KodeEndemias;