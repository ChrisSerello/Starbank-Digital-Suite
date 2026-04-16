import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHistoria = location.pathname === "/historia";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav links: anchor links on Home, regular links from Historia page
  const navLinks = [
    { name: "Ecossistema",    href: isHistoria ? "/#ecossistema" : "#ecossistema"  },
    { name: "Soluções",       href: isHistoria ? "/#solucoes"    : "#solucoes"     },
    { name: "Diferenciais",   href: isHistoria ? "/#diferenciais": "#diferenciais" },
    { name: "Para Quem",      href: isHistoria ? "/#publico"     : "#publico"      },
    { name: "Nossa História", href: "/historia", isPage: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-bold text-xl tracking-tight">Grupo Starbank</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isHistoria
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" className="hidden lg:flex" onClick={() => window.open("https://wa.me/5511939329765", "_blank")}>Falar com Consultor</Button>
          <Button>Acessar Plataforma</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg absolute top-20 left-0 right-0">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-base font-medium py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" className="w-full justify-center" onClick={() => window.open("https://wa.me/5511939329765", "_blank")}>Falar com Consultor</Button>
            <Button className="w-full justify-center">Acessar Plataforma</Button>
          </div>
        </div>
      )}
    </header>
  );
}