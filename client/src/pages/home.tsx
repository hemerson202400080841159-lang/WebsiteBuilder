import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, AlertTriangle, Leaf, ChevronDown, Gamepad2, Brain, Users, Zap, Eye, Moon, Recycle, Battery } from "lucide-react";

import heroBg from "@assets/generated_images/abstract_tech_network_background.png";
import benefitsImg from "@assets/generated_images/futuristic_educational_gaming_scene_with_holograms.png";
import harmsImg from "@assets/generated_images/moody_abstract_digital_burnout_scene.png";
import sustainabilityImg from "@assets/generated_images/green_technology_and_nature_blending.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/90 backdrop-blur-md border-gray-200 py-4 shadow-sm" : "bg-transparent border-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className={cn("text-xl font-bold font-heading tracking-tight flex items-center gap-2 transition-colors", scrolled ? "text-slate-900" : "text-white")}>
          <Gamepad2 className="w-6 h-6" />
          <span>GameImpact</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Benefícios", "Malefícios", "Sustentabilidade"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
              className={cn(
                "text-sm font-medium transition-colors hover:opacity-80",
                scrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/50 to-slate-950" />
      </div>

      <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Tecnologia e Sociedade
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-heading">
            Videogames: <span className="text-blue-400">Benefícios</span>, <span className="text-orange-400">Malefícios</span> e <span className="text-green-400">Sustentabilidade</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Um olhar completo sobre como os jogos influenciam nossa vida e o planeta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base"
              onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar o Impacto
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

const Section = ({ 
  id, 
  title, 
  description, 
  listTitle, 
  items, 
  extraText, 
  image, 
  theme, 
  icon: Icon,
  reversed = false 
}: {
  id: string,
  title: string,
  description: string,
  listTitle: string,
  items: { label: string; text: string; icon?: any }[],
  extraText?: string,
  image: string,
  theme: "blue" | "orange" | "green",
  icon: any,
  reversed?: boolean
}) => {
  const themeColors = {
    blue: { badge: "bg-blue-100 text-blue-700 border-blue-200", title: "text-blue-600", bg: "bg-white", iconBg: "bg-blue-100 text-blue-600" },
    orange: { badge: "bg-orange-100 text-orange-700 border-orange-200", title: "text-orange-600", bg: "bg-slate-50", iconBg: "bg-orange-100 text-orange-600" },
    green: { badge: "bg-green-100 text-green-700 border-green-200", title: "text-green-600", bg: "bg-white", iconBg: "bg-green-100 text-green-600" },
  };

  const currentTheme = themeColors[theme];

  return (
    <section id={id} className={cn("py-24", currentTheme.bg)}>
      <div className="container mx-auto px-6">
        <div className={cn("flex flex-col lg:flex-row items-center gap-16", reversed ? "lg:flex-row-reverse" : "")}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className={cn("absolute -inset-4 rounded-2xl blur-xl opacity-30 transition-opacity duration-500 group-hover:opacity-50", 
                theme === "blue" ? "bg-blue-500" : theme === "orange" ? "bg-orange-500" : "bg-green-500"
              )} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 aspect-video lg:aspect-[4/3]">
                <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 backdrop-blur-md bg-white/90 p-3 rounded-xl shadow-lg">
                  <Icon className={cn("w-8 h-8", currentTheme.title)} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-4", currentTheme.badge)}>
                <span>{id.toUpperCase()}</span>
              </div>
              
              <h2 className={cn("text-4xl font-bold mb-6 font-heading", "text-slate-900")}>
                {title}
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {description}
              </p>

              <div className="mt-8 space-y-6">
                <h3 className={cn("text-xl font-semibold flex items-center gap-2", currentTheme.title)}>
                  {listTitle}
                </h3>
                <ul className="space-y-4">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={cn("mt-1 p-1 rounded-full flex-shrink-0", currentTheme.iconBg)}>
                        {item.icon ? <item.icon className="w-3 h-3" /> : <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                      </div>
                      <div className="text-slate-700">
                        <span className="font-semibold text-slate-900">{item.label}</span> {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {extraText && (
                <p className="text-slate-600 italic border-l-4 border-slate-200 pl-4 mt-6">
                  {extraText}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />

      <Section 
        id="beneficios"
        theme="blue"
        title="Benefícios dos Videogames"
        description="Videogames deixaram de ser apenas entretenimento e se tornaram ferramentas importantes para educação, desenvolvimento cognitivo e até para tratamento de algumas condições neurológicas. Pesquisas mostram que jogos bem aplicados podem melhorar diversas áreas do cérebro e habilidades sociais."
        listTitle="Principais benefícios:"
        image={benefitsImg}
        icon={Check}
        items={[
          { label: "Melhora da coordenação motora:", text: "jogos de ação exigem reflexos, precisão e agilidade.", icon: Zap },
          { label: "Desenvolvimento do raciocínio lógico:", text: "jogos de estratégia estimulam planejamento e tomada de decisões.", icon: Brain },
          { label: "Aprimoramento da memória:", text: "muitos jogos exigem lembrar mapas, padrões e regras.", icon: Brain },
          { label: "Alívio do estresse:", text: "jogar pode ajudar a relaxar e reduzir a ansiedade.", icon: Users },
          { label: "Socialização online:", text: "jogos multiplayer criam comunidades e fortalecem amizades.", icon: Users },
          { label: "Aplicações educacionais:", text: "jogos são usados em escolas para ensinar matemática, história e ciências.", icon: Users },
          { label: "Treinamentos profissionais:", text: "simuladores ajudam pilotos, médicos e militares a praticar habilidades.", icon: Users },
        ]}
        extraText="Além disso, estudos indicam que jogos podem melhorar a criatividade, estimular a persistência e proporcionar experiências culturais ricas e imersivas."
      />

      <Section 
        id="maleficios"
        theme="orange"
        title="Malefícios dos Videogames"
        description="Assim como qualquer tecnologia, o videogame pode trazer efeitos negativos quando usado sem moderação. Jogar demais pode prejudicar a saúde física, emocional e social, especialmente em crianças e adolescentes."
        listTitle="Principais riscos e malefícios:"
        image={harmsImg}
        icon={AlertTriangle}
        reversed={true}
        items={[
          { label: "Sedentarismo:", text: "ficar longas horas sentado eleva riscos cardíacos e obesidade.", icon: AlertTriangle },
          { label: "Problemas de visão:", text: "excesso de telas causa fadiga ocular e ressecamento.", icon: Eye },
          { label: "Distúrbios do sono:", text: "jogar à noite atrapalha o ciclo natural de descanso.", icon: Moon },
          { label: "Ansiedade e irritabilidade:", text: "jogos competitivos podem gerar estresse.", icon: AlertTriangle },
          { label: "Dependência de jogos:", text: "a OMS reconhece como um transtorno real.", icon: AlertTriangle },
          { label: "Isolamento social:", text: "jogadores podem substituir interações reais pelas virtuais.", icon: Users },
          { label: "Queda no desempenho escolar:", text: "excesso de tempo jogando reduz foco e disciplina.", icon: AlertTriangle },
        ]}
        extraText="O segredo é o equilíbrio: jogar pode ser muito positivo, desde que não prejudique atividades essenciais como estudo, trabalho, sono e convívio social."
      />

      <Section 
        id="sustentabilidade"
        theme="green"
        title="Sustentabilidade Ambiental"
        description="A indústria dos videogames, assim como todas as áreas da tecnologia, também tem impacto ambiental. O consumo de energia, produção de consoles e servidores online são fatores importantes. No entanto, o setor vem buscando soluções para reduzir danos ao meio ambiente."
        listTitle="Impactos e Ações:"
        image={sustainabilityImg}
        icon={Leaf}
        items={[
          { label: "Alto consumo de energia:", text: "consoles, PCs gamers e servidores usam muita eletricidade.", icon: Zap },
          { label: "Resíduos eletrônicos:", text: "troca constante de consoles gera lixo eletrônico.", icon: Recycle },
          { label: "Consoles mais eficientes:", text: "empresas estão reduzindo consumo energético dos aparelhos.", icon: Battery },
          { label: "Materiais recicláveis:", text: "embalagens de jogos e consoles usam menos plástico.", icon: Leaf },
          { label: "Jogos digitais:", text: "reduzem necessidade de mídia física e transporte.", icon: Leaf },
          { label: "Servidores com energia limpa:", text: "muitas empresas usam energia solar e eólica.", icon: Leaf },
        ]}
        extraText="A junção entre tecnologia e sustentabilidade é um dos maiores desafios do futuro, e o mundo dos videogames tem grande potencial para ser parte dessa mudança."
      />

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="container mx-auto px-6">
          <Gamepad2 className="w-8 h-8 mx-auto text-slate-600 mb-4" />
          <p className="mb-4">Desenvolvido para fins educacionais — 2025</p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Sobre</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
