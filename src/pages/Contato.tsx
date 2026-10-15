import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const solutions = [
  'Kode Gestão em Saúde',
  'Kode APS',
  'Kode Endemias',
  'Ferramentas',
  'Outro',
];

const Contato: React.FC = () => {
  const [formState, setFormState] = useState({
    nome: '',
    municipio: '',
    estado: '',
    instituicao: '',
    cargo: '',
    email: '',
    telefone: '',
    solucao: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio - aqui entraria integração com backend ou serviço de email
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-blue-600" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">Mensagem Enviada!</h1>
          <p className="text-slate-600 mb-8">
            Obrigado pelo contato. Nossa equipe analisará sua solicitação e retornará em breve através dos canais informados.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-brand-600 font-bold hover:text-brand-700 transition-colors"
          >
            Enviar nova mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <SectionTitle
              subtitle="FALE CONOSCO"
              title="Vamos transformar a saúde do seu município?"
            />
            <p className="text-lg text-slate-600 leading-relaxed">
              Preencha o formulário ao lado e nossa equipe de especialistas entrará em contato para entender suas necessidades e apresentar as melhores soluções.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">E-mail</h4>
                  <p className="text-slate-600">contato@kodesaude.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(37) 9 9876-7859</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Atendimento</h4>
                  <p className="text-slate-600">Todo o território nacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-bold text-slate-700">Nome Completo *</label>
                  <input
                    required
                    type="text"
                    id="nome"
                    name="nome"
                    value={formState.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">E-mail Institucional *</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="telefone" className="text-sm font-bold text-slate-700">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formState.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cargo" className="text-sm font-bold text-slate-700">Cargo / Função</label>
                  <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    value={formState.cargo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="Ex: Gestor, Coordenador..."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="municipio" className="text-sm font-bold text-slate-700">Município</label>
                  <input
                    type="text"
                    id="municipio"
                    name="municipio"
                    value={formState.municipio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    placeholder="Sua cidade"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="estado" className="text-sm font-bold text-slate-700">Estado</label>
                  <input
                    type="text"
                    id="estado"
                    name="estado"
                    maxLength={2}
                    value={formState.estado}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all uppercase"
                    placeholder="UF"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="instituicao" className="text-sm font-bold text-slate-700">Instituição / Órgão</label>
                <input
                  type="text"
                  id="instituicao"
                  name="instituicao"
                  value={formState.instituicao}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  placeholder="Secretaria de Saúde, Hospital..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="solucao" className="text-sm font-bold text-slate-700">Solução de Interesse</label>
                <select
                  id="solucao"
                  name="solucao"
                  value={formState.solucao}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all appearance-none"
                >
                  <option value="">Selecione uma opção</option>
                  {solutions.map(sol => (
                    <option key={sol} value={sol}>{sol}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-sm font-bold text-slate-700">Mensagem *</label>
                <textarea
                  required
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formState.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-600/20 mt-4"
              >
                Enviar Mensagem <Send size={18} />
              </button>

              <p className="text-xs text-slate-400 text-center mt-4">
                Seus dados estão protegidos conforme nossa Política de Privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;