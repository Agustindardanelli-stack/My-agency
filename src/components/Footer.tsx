import Link from 'next/link';
import { Github, Mail, MapPin, Phone, ArrowUp, Code, Zap, Users } from 'lucide-react';

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
];

const services = [
    { name: 'Desarrollo Web', href: '/servicios/desarrollo-web', icon: <Code className="w-4 h-4" /> },
    { name: 'Optimización', href: '/servicios/optimizacion', icon: <Zap className="w-4 h-4" /> },
    { name: 'Consultoría', href: '/servicios/consultoria', icon: <Users className="w-4 h-4" /> },
];

const contactInfo = [
    { 
        icon: <Mail className="w-4 h-4" />, 
        text: 'agustin.dardanelli@gmail.com',
        href: 'mailto:agustin.dardanelli@gmail.com'
    },
    { 
        icon: <Phone className="w-4 h-4" />, 
        text: '+54 9 358 123-4567',
        href: 'tel:+5493581234567'
    },
    { 
        icon: <MapPin className="w-4 h-4" />, 
        text: 'Río Cuarto, Córdoba, Argentina',
        href: '#'
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-custom-blue text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
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
                            <div className="w-12 h-12 bg-gradient-to-br from-custom-lime to-white rounded-xl flex items-center justify-center">
                                <span className="text-custom-blue font-bold text-lg">CN</span>
                            </div>
                            <span className="text-2xl font-bold">
                                Code<span className="text-custom-lime">Nova</span>
                            </span>
                        </div>
                        <p className="text-white/80 leading-relaxed mb-6">
                            Transformamos ideas en experiencias digitales excepcionales. 
                            Especialistas en desarrollo web moderno y marketing digital.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/Agustindardanelli-stack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-custom-lime hover:text-custom-blue rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:agustin.dardanelli@gmail.com"
                                className="w-10 h-10 bg-white/10 hover:bg-custom-lime hover:text-custom-blue rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-custom-lime">
                            Navegación
                        </h4>
                        <nav className="space-y-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block text-white/80 hover:text-custom-lime transition-colors duration-300 hover:translate-x-2 transform"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-custom-lime">
                            Servicios
                        </h4>
                        <div className="space-y-3">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-center space-x-3 text-white/80 hover:text-custom-lime transition-colors duration-300 group"
                                >
                                    <span className="group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </span>
                                    <span>{service.name}</span>
                                </Link>
                            ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="mt-8 p-4 bg-custom-teal/20 rounded-xl border border-custom-teal/30">
                            <h5 className="font-semibold text-white mb-2">¿Tienes un proyecto?</h5>
                            <p className="text-white/80 text-sm mb-3">
                                Conversemos sobre tu idea
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center bg-custom-lime text-custom-blue px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors"
                            >
                                Contactar
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-custom-lime">
                            Contacto
                        </h4>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    className="flex items-start space-x-3 text-white/80 hover:text-custom-lime transition-colors duration-300 group"
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
                            <h5 className="font-semibold text-white mb-2">Horarios</h5>
                            <div className="text-sm text-white/80 space-y-1">
                                <div>Lun - Vie: 9:00 - 18:00</div>
                                <div>Sab: 10:00 - 14:00</div>
                                <div className="text-custom-lime">Soporte 24/7</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="bg-gradient-to-r from-custom-teal/20 to-transparent rounded-2xl p-8 border border-custom-teal/30">
                        <div className="max-w-md">
                            <h4 className="text-xl font-semibold text-white mb-2">
                                Newsletter
                            </h4>
                            <p className="text-white/80 mb-4">
                                Recibe tips de desarrollo y marketing digital
                            </p>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-custom-lime focus:border-transparent"
                                />
                                <button className="bg-custom-lime text-custom-blue px-6 py-2 rounded-lg font-semibold hover:bg-white transition-colors">
                                    Suscribir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-white/70 text-sm">
                        © {new Date().getFullYear()} CodeNova. Todos los derechos reservados. 
                        <span className="mx-2">|</span>
                        Hecho con ❤️ en Argentina
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <Link href="/privacidad" className="text-white/70 hover:text-custom-lime text-sm transition-colors">
                            Privacidad
                        </Link>
                        <Link href="/terminos" className="text-white/70 hover:text-custom-lime text-sm transition-colors">
                            Términos
                        </Link>
                        
                        {/* Scroll to Top */}
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 bg-custom-teal hover:bg-custom-lime hover:text-custom-blue rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}