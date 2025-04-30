
import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import InteractiveElement from '@/components/InteractiveElement';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulated form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contato. Retornarei em breve.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Mark contact achievement
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    visitedSections.contact = true;
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  };
  
  return (
    <MainLayout>
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 neon-text">
              ENTRE EM CONTATO
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interessado em colaborar ou saber mais sobre meu trabalho? Envie uma mensagem!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-muted/30 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-muted/30 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-muted/30 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <InteractiveElement>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Enviar Mensagem
                    </button>
                  </InteractiveElement>
                </form>
              </div>
            </div>
            
            {/* Info and social */}
            <div className="space-y-8">
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <a href="mailto:contato@exemplo.com" className="text-sm text-primary hover:underline">
                        contato@exemplo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Telefone</div>
                      <a href="tel:+5511998765432" className="text-sm text-primary hover:underline">
                        +55 (11) 99876-5432
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Localização</div>
                      <div className="text-sm text-muted-foreground">
                        São Paulo, SP, Brasil
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SocialButton 
                    name="Twitter"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>}
                    link="https://twitter.com"
                    color="bg-gradient-to-r from-blue-400 to-blue-600"
                  />
                  
                  <SocialButton 
                    name="LinkedIn"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                    link="https://linkedin.com"
                    color="bg-gradient-to-r from-blue-600 to-blue-800"
                  />
                  
                  <SocialButton 
                    name="GitHub"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>}
                    link="https://github.com"
                    color="bg-gradient-to-r from-gray-700 to-gray-900"
                  />
                  
                  <SocialButton 
                    name="Instagram"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>}
                    link="https://instagram.com"
                    color="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

interface SocialButtonProps {
  name: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const SocialButton = ({ name, icon, link, color }: SocialButtonProps) => {
  return (
    <InteractiveElement>
      <a 
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 px-4 py-3 rounded-md text-white ${color}`}
      >
        <div>{icon}</div>
        <span className="font-medium">{name}</span>
      </a>
    </InteractiveElement>
  );
};

export default Contact;
