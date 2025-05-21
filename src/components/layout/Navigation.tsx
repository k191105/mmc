import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
  { href: '/portal', label: 'Client Portal' }, // Added portal link
];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-brand-light-text hover:text-brand-highlight-blue transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
