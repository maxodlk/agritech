import { useState } from 'react';
import { Sprout, TrendingUp, Users, Award, Calculator, Menu, X } from 'lucide-react';

function App() {
  const [hectares, setHectares] = useState<string>('');
  const [revenue, setRevenue] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const calculateRevenue = () => {
    const hectaresValue = parseFloat(hectares);
    if (!isNaN(hectaresValue) && hectaresValue > 0) {
      const result = hectaresValue * 1200 * 0.85;
      setRevenue(result);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      <nav className="relative z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Sprout className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Agri-Tech Bénin
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="hover:text-green-400 transition-colors">Accueil</a>
              <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
              <a href="#apropos" className="hover:text-green-400 transition-colors">À Propos</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all">
                Démarrer
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-gray-900/95 border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#accueil" className="block py-2 hover:text-green-400 transition-colors">Accueil</a>
              <a href="#services" className="block py-2 hover:text-green-400 transition-colors">Services</a>
              <a href="#apropos" className="block py-2 hover:text-green-400 transition-colors">À Propos</a>
              <a href="#contact" className="block py-2 hover:text-green-400 transition-colors">Contact</a>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold">
                Démarrer
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        <section id="accueil" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Révolutionnez l'Agriculture au{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Bénin
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                Optimisez vos rendements agricoles grâce à la technologie et aux données intelligentes
              </p>
            </div>

            <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-green-400 mr-3" />
                <h2 className="text-2xl sm:text-3xl font-bold">Simulateur de Revenus</h2>
              </div>
              <p className="text-gray-300 text-center mb-8">
                Estimez vos revenus potentiels en fonction de votre surface cultivable
              </p>

              <div className="space-y-6">
                <div>
                  <label htmlFor="hectares" className="block text-sm font-medium mb-2 text-gray-200">
                    Surface cultivable (hectares)
                  </label>
                  <input
                    type="number"
                    id="hectares"
                    value={hectares}
                    onChange={(e) => setHectares(e.target.value)}
                    placeholder="Entrez le nombre d'hectares"
                    className="w-full px-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                  />
                </div>

                <button
                  onClick={calculateRevenue}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105"
                >
                  Calculer le Revenu Estimé
                </button>

                {revenue !== null && (
                  <div className="backdrop-blur-md bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-6 animate-fade-in">
                    <p className="text-sm text-gray-300 mb-2">Revenu annuel estimé :</p>
                    <p className="text-4xl font-bold text-green-400">
                      {revenue.toLocaleString('fr-FR')} FCFA
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Basé sur un rendement optimisé de 1020 kg/ha
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nos Services</h2>
              <p className="text-xl text-gray-300">Des solutions innovantes pour l'agriculture moderne</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: "Optimisation des Rendements",
                  description: "Augmentez votre productivité jusqu'à 85% grâce à nos analyses de sols et recommandations personnalisées."
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Accompagnement Personnalisé",
                  description: "Bénéficiez d'un suivi par nos experts agronomes pour maximiser vos résultats sur le terrain."
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Certification & Qualité",
                  description: "Accédez aux certifications agricoles et améliorez la valeur marchande de vos productions."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all hover:scale-105 hover:border-green-400/50 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:text-green-300 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  L'Innovation au Service de l'Agriculture Béninoise
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Agri-Tech Bénin est née de la vision de transformer l'agriculture traditionnelle en une industrie moderne,
                  durable et prospère. Nous combinons expertise locale et technologies de pointe pour offrir des solutions
                  adaptées aux réalités du terrain béninois.
                </p>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Notre mission est d'accompagner plus de 10,000 agriculteurs vers une agriculture rentable et respectueuse
                  de l'environnement, tout en contribuant à la sécurité alimentaire nationale.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "10K+", label: "Agriculteurs" },
                    { number: "85%", label: "Rendement" },
                    { number: "50+", label: "Communes" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-4 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Agriculture moderne au Bénin"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-white/20 p-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Prêt à Transformer Votre Agriculture ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Rejoignez des milliers d'agriculteurs qui ont déjà fait le choix de l'innovation
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105">
                Contactez-Nous Maintenant
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 backdrop-blur-xl bg-white/5 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Agri-Tech Bénin</span>
              </div>
              <p className="text-gray-400">
                L'innovation au service de l'agriculture béninoise
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Optimisation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Accompagnement</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Certification</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Carrières</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cotonou, Bénin</li>
                <li>contact@agritech-benin.bj</li>
                <li>+229 XX XX XX XX</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agri-Tech Bénin. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
