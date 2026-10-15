import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart3, Database, FileText, ShieldCheck, Users, HeartPulse, Smartphone, Filter } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const categories = ['Todas', 'Plataformas', 'APS', 'Faturamento', 'Dados', 'Social'];

const colorStyles: Record<string, { bg: string; text: string; hoverBg: string }> = {
  teal:     { bg: 'bg-blue-50',     text: 'text-blue-600',     hoverBg: 'group-hover:bg-blue-600' },
  emerald:  { bg: 'bg-indigo-50',   text: 'text-indigo-600',   hoverBg: 'group-hover:bg-indigo-600' },
  brand:    { bg: 'bg-blue-50',     text: 'text-blue-600',     hoverBg: 'group-hover:bg-blue-600' },
  blue:     { bg: 'bg-blue-50',     text: 'text-blue-600',     hoverBg: 'group-hover:bg-blue-600' },
  indigo:   { bg: 'bg-indigo-50',   text: 'text-indigo-600',   hoverBg: 'group-hover:bg-indigo-600' },
  amber:    { bg: 'bg-amber-50',    text: 'text-amber-600',    hoverBg: 'group-hover:bg-amber-600' },
  rose:     { bg: 'bg-rose-50',     text: 'text-rose-600',     hoverBg: 'group-hover:bg-rose-600' },
};

const tools = [
  {
    name: 'Kode APS',
    category: 'Plataformas',
    description: 'Ferramenta de inteligência e monitoramento para acompanhamento de indicadores, qualidade de cadastros e relatórios do e-SUS PEC, de forma nominal e consolidada.',
    icon: BarChart3,
    status: 'Disponível',
    color: 'teal',
    link: '/kode-aps',
  },
  {
    name: 'Kode Endemias',
    category: 'Plataformas',
    description: 'Aplicativo mobile para trabalho de campo do ACE integrado a um painel web completo para gestão e supervisão. Sincroniza mesmo sem conexão com a internet.',
    icon: Smartphone,
    status: 'Disponível',
    color: 'emerald',
    link: '/kode-endemias',
  },
  {
    name: 'Kode Gestão em Saúde',
    category: 'Plataformas',
    description: 'Plataforma completa para gestão municipal na Média Complexidade: atendimento ao cidadão, Regulação, Transporte, faturamento e relatórios gerenciais.',
    icon: HeartPulse,
    status: 'Disponível',
    color: 'brand',
    link: '/kode-saude',
  },
  {
    name: 'Gerador BPA/SIA-SUS',
    category: 'Faturamento',
    description: 'Extrai procedimentos SIGTAP do e-SUS PEC para faturamento no SIA/SUS. Permite utilizar o PEC na Média Complexidade com extração correta para o BPA.',
    icon: FileText,
    status: 'Em Breve',
    color: 'blue',
  },
  {
    name: 'Analisador de Indicadores SIAPS',
    category: 'APS',
    description: 'Análise dos indicadores da Atenção Primária baseada nas planilhas oficiais do Ministério da Saúde (SIAPS/SISAB). Identifica erros e melhorias de forma nominal e intuitiva.',
    icon: BarChart3,
    status: 'Disponível',
    color: 'teal',
  },
  {
    name: 'Acompanhamentos Cidadãos e-SUS PEC',
    category: 'Dados',
    description: 'Análise de qualidade de dados via importação de planilhas do e-SUS PEC. Identifica cadastros sem endereço, desatualizados, sem domicílio ou duplicados.',
    icon: Database,
    status: 'Disponível',
    color: 'indigo',
  },
  {
    name: 'Acompanhamento Bolsa Família',
    category: 'Social',
    description: 'Cruza o Mapa de Acompanhamento do Bolsa Família com cidadãos vinculados do e-SUS PEC, permitindo identificar beneficiários de forma organizada por microárea.',
    icon: Users,
    status: 'Disponível',
    color: 'amber',
  },
  {
    name: 'Qualidade e Correção BPA',
    category: 'Faturamento',
    description: 'Analisa arquivos BPA-I/BPA-C com painéis, filtros e verificações de qualidade por procedimento SIGTAP. Inclui correção automática de erros para evitar glosas.',
    icon: ShieldCheck,
    status: 'Disponível',
    color: 'rose',
  },
];

const Ferramentas: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = activeCategory === 'Todas' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionTitle
          subtitle="ECOSSISTEMA DE FERRAMENTAS"
          title="Utilitários práticos para o dia a dia da gestão."
        />
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Além das nossas plataformas completas, desenvolvemos ferramentas específicas
          para resolver problemas pontuais e agilizar rotinas operacionais.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Buscar ferramenta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              const styles = colorStyles[tool.color] || colorStyles.teal;
              const cardClassName = "group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block";

              const inner = (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.bg} ${styles.hoverBg} transition-colors`}>
                      <tool.icon size={24} className={`${styles.text} group-hover:text-white transition-colors`} />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                      tool.status === 'Disponível' ? 'bg-blue-100 text-blue-700' :
                      tool.status === 'Em Breve' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {tool.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{tool.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{tool.category}</span>
                    {tool.link ? (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 group-hover:text-brand-700 transition-colors">
                        Acessar <ArrowRight size={14} />
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-slate-400 cursor-default">
                        {tool.status === 'Em Breve' ? 'Em breve' : 'Indisponível'}
                      </span>
                    )}
                  </div>
                </>
              );

              return tool.link ? (
                <Link key={tool.name} to={tool.link} className={cardClassName}>{inner}</Link>
              ) : (
                <div key={tool.name} className={cardClassName}>{inner}</div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhuma ferramenta encontrada</h3>
            <p className="text-slate-500">Tente ajustar os filtros ou termos de busca.</p>
          </div>
        )}
      </section>

      {/* CTA Custom Tool */}
      <section className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <div className="bg-slate-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
            Precisa de uma solução personalizada?
          </h2>
          <p className="text-slate-300 mb-8 relative z-10">
            Desenvolvemos ferramentas sob medida para desafios específicos da sua gestão.
          </p>
          <Link to="/contato" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3 rounded-xl transition-all relative z-10">
            Falar com nossa equipe
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ferramentas;