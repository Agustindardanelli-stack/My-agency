import Link from 'next/link';

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
];

export default function Footer() {
    return (
        <footer className="bg-custom-blue text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-bold tracking-tight text-custom-green">My Agency</span>
                    <span className="mt-2 text-sm text-custom-lime">Soluciones digitales a tu medida</span>
                </div>
                <nav className="flex gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-custom-teal transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="text-xs text-custom-lime">
                    &copy; {new Date().getFullYear()} My Agency. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}