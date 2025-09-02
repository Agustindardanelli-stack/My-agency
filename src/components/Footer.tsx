import Link from 'next/link';
import { Github, Mail, MapPin, Phone, ArrowUp, Code, Zap, Users, ExternalLink, Heart, Clock } from 'lucide-react';

const navigation = [
    { name: 'Inicio', href: '/', description: 'Página principal' },
    { name: 'Proyectos', href: '/proyectos', description: 'Nuestro portfolio' },
    { name: 'Servicios', href: '/servicios', description: 'Qué ofrecemos' },
    { name: 'Nosotros', href: '/nosotros', description: 'Conoce el equipo' },
    { name: 'Contacto', href: '/contacto', description: 'Habla con nosotros' },
];

const services = [
    { 
        name: 'Desarrollo Web', 
        href: '/servicios/desarrollo-web', 
        icon: <Code className="w-4 h-4" />,
        description: 'Apps modernas con React y Next.js'
    },
    { 
        name: 'Optimización', 
        href: '/servicios/optimizacion', 
        icon: <Zap className="w-4 h-4" />,
        description: 'Mejora velocidad y rendimiento'
    },
    { 
        name: 'Consultoría', 
        href: '/servicios/consultoria', 
        icon: <Users className="w-4 h-4" />,
        description: 'Asesoramiento técnico especializado'
    },
];

const contactInfo = [
    { 
        icon: <Mail className="w-4 h-4" />, 
        text: 'agustin.dardanelli@gmail.com',
        href: 'mailto:agustin.dardanelli@gmail.com',
        label: 'Enviar email a CodeNova'
    },
    { 
        icon: <Phone className="w-4 h-4" />, 
        text: '+54 9 358 123-4567',
        href: 'tel:+5493581234567',
        label: 'Llamar a CodeNova'
    },
    { 
        icon: <MapPin className="w-4 h-4" />, 
        text: 'Río Cuarto, Córdoba, Argentina',
        href: 'https://maps.google.com/?q=Rio+Cuarto,+Cordoba,+Argentina',
        label: 'Ver ubicación en Google Maps'
    },
];

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/Agustindardanelli-stack',
        icon: <Github className="w-5 h-5" />,
        label: 'Visitar perfil de GitHub'
    },
    {
        name: 'Email',
        href: 'mailto:agustin.dardanelli@gmail.com',
        icon: <Mail className="w-5 h-5" />,
        label: 'Enviar email'
    },
];

const legalLinks = [
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos de Servicio', href: '/terminos' },
    { name: 'Política de Cookies', href: '/cookies' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-custom-blue text-white relative overflow-hidden" role="contentinfo">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-white rotate-45"></div>
                <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-white rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-custom-lime to-white rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-custom-blue font-bold text-lg" aria-label="CodeNova logo">CN</span>
                            </div>
                            <span className="text-2xl font-bold">
                                Code<span className="text-custom-lime">Nova</span>
                            </span>
                        </div>
                        
                        <p className="text-white/80 leading-relaxed mb-6">
                            Transformamos ideas en experiencias digitales excepcionales. 
                            Especialistas en desarrollo web moderno y marketing digital en Río Cuarto, Córdoba.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="w-10 h-10 bg-white/10 hover:bg-custom-lime hover:text-custom-blue rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        
                        {/* Certifications/Awards */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-white/60 text-sm mb-2">Certificaciones</p>
                            <div className="space-y-1 text-xs text-white/50">
                                <div>React Developer Certified</div>
                                <div>Google Analytics Certified</div>
                                <div>AWS Cloud Practitioner</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-custom-lime">
                            Navegación
                        </h3>
                        <nav className="space-y-3" aria-label="Enlaces de navegación">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block group"
                                    title={item.description}
                                >
                                    <span className="text-white/80 hover:text-custom-lime transition-colors duration-300 group-hover:translate-x-2 transform inline-block">
                                        {item.name}
                                    </span>
                                    <span className="block text-xs text-white/50 mt-1">
                                        {item.description}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-custom-lime">
                            Servicios
                        </h3>
                        <div className="space-y-4">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-start space-x-3 text-white/80 hover:text-custom-lime transition-colors duration-300 group"
                                    title={service.description}
                                >
                                    <span className="group-hover:scale-110 transition-transform mt-1">
                                        {service.icon}
                                    </span>
                                    <div>
                                        <span className="font-medium">{service.name}</span>
                                        <p className="text-xs text-white/50 mt-1">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="mt-8 p-4 bg-custom-teal/20 rounded-xl border border-custom-teal/30">
                            <h4 className="font-semibold text-white mb-2">¿Tienes un proyecto?</h4>
                            <p className="text-white/80 text-sm mb-3">
                                Conversemos sobre tu idea y hagámosla realidad
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center bg-custom-lime text-custom-blue px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors group"
                            >
                                Contactar
                                <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-custom-lime">
                            Contacto
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-start space-x-3 text-white/80 hover:text-custom-lime transition-colors duration-300 group"
                                    aria-label={contact.label}
                                >
                                    <span className="flex-shrink-0 group-hover:scale-110 transition-transform mt-1">
                                        {contact.icon}
                                    </span>
                                    <span className="text-sm leading-relaxed">{contact.text}</span>
                                </a>
                            ))}
                        </div>

                        {/* Business Hours */}
                        <div className="mt-8 p-4 bg-white/5 rounded-xl">
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                Horarios de Atención
                            </h4>
                            <div className="text-sm text-white/80 space-y-1">
                                <div className="flex justify-between">
                                    <span>Lun - Vie:</span>
                                    <span>9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sáb:</span>
                                    <span>10:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between text-custom-lime">
                                    <span>Soporte:</span>
                                    <span>24/7</span>
                                </div>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="mt-4 p-3 bg-custom-lime/10 rounded-lg border border-custom-lime/20">
                            <p className="text-custom-lime text-sm font-medium">
                                ⚡ Respuesta garantizada en 24h
                            </p>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="bg-gradient-to-r from-custom-teal/20 to-transparent rounded-2xl p-8 border border-custom-teal/30">
                        <div className="max-w-md">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Newsletter Técnico
                            </h3>
                            <p className="text-white/80 mb-4">
                                Recibe tips de desarrollo web, tendencias tecnológicas y casos de estudio exclusivos
                            </p>
                            <form className="flex gap-3" aria-label="Suscribirse al newsletter">
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    required
                                    aria-label="Dirección de email para newsletter"
                                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-custom-lime focus:border-transparent transition-colors"
                                />
                                <button 
                                    type="submit"
                                    className="bg-custom-lime text-custom-blue px-6 py-2 rounded-lg font-semibold hover:bg-white transition-colors"
                                    aria-label="Suscribirse al newsletter"
                                >
                                    Suscribir
                                </button>
                            </form>
                            <p className="text-white/60 text-xs mt-2">
                                Sin spam. Cancela cuando quieras.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        
                        {/* Copyright */}
                        <div className="text-white/70 text-sm text-center lg:text-left">
                            <p>
                                © {currentYear} CodeNova. Todos los derechos reservados.
                            </p>
                            <p className="flex items-center justify-center lg:justify-start mt-1">
                                Hecho con <Heart className="w-4 h-4 mx-1 text-red-400" /> en Río Cuarto, Córdoba
                            </p>
                        </div>
                        
                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            {legalLinks.map((link, index) => (
                                <Link 
                                    key={link.name}
                                    href={link.href} 
                                    className="text-white/70 hover:text-custom-lime text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        
                        {/* Scroll to Top */}
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 bg-custom-teal hover:bg-custom-lime hover:text-custom-blue rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                            aria-label="Volver al inicio de la página"
                        >
                            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-custom-lime font-semibold text-sm mb-1">Tecnologías</div>
                                <div className="text-white/60 text-xs">React, Next.js, TypeScript, Node.js</div>
                            </div>
                            <div>
                                <div className="text-custom-lime font-semibold text-sm mb-1">Especialización</div>
                                <div className="text-white/60 text-xs">Desarrollo Web Moderno & Marketing Digital</div>
                            </div>
                            <div>
                                <div className="text-custom-lime font-semibold text-sm mb-1">Ubicación</div>
                                <div className="text-white/60 text-xs">Río Cuarto, Córdoba, Argentina</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schema.org structured data */}
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "CodeNova",
                            "url": "https://codenova.com.ar",
                            "logo": "https://codenova.com.ar/logo.png",
                            "description": "Agencia de desarrollo web y marketing digital especializada en React, Next.js en Río Cuarto, Córdoba",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Río Cuarto",
                                "addressRegion": "Córdoba", 
                                "addressCountry": "AR"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+54-358-123-4567",
                                "contactType": "customer service",
                                "email": "agustin.dardanelli@gmail.com",
                                "availableLanguage": ["Spanish"],
                                "hoursAvailable": "Mo-Fr 09:00-18:00"
                            },
                            "sameAs": [
                                "https://github.com/Agustindardanelli-stack"
                            ],
                            "founder": {
                                "@type": "Person",
                                "name": "Agustín Dardanelli"
                            },
                            "areaServed": [
                                {
                                    "@type": "Place",
                                    "name": "Río Cuarto, Córdoba, Argentina"
                                },
                                {
                                    "@type": "Place", 
                                    "name": "Argentina"
                                }
                            ],
                            "serviceType": [
                                "Desarrollo Web",
                                "Marketing Digital", 
                                "Consultoría Técnica",
                                "Optimización Web"
                            ]
                        })
                    }}
                />
            </div>
        </footer>
    );
}