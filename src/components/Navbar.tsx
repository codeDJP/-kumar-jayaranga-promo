import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
{ to: "/", label: "Home" },
{ to: "/packages", label: "Packages" },
{ to: "/downloads", label: "Downloads" },
{ to: "/terms", label: "T&C" },
{ to: "/privacy", label: "Privacy" },
{ to: "/contact", label: "Contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          <span className="text-gradient">Kumar Jayaranga </span>
          <span className="text-foreground"> Promo</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) =>
          <Link
            key={l.to}
            to={l.to}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            location.pathname === l.to ?
            "text-primary" :
            "text-muted-foreground hover:text-foreground"}`
            }>

              {l.label}
            </Link>
          )}
          <Link to="/contact">
            <Button variant="hero" size="sm" className="ml-2">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">

          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((l) =>
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            location.pathname === l.to ?
            "text-primary" :
            "text-muted-foreground hover:text-foreground"}`
            }>

                {l.label}
              </Link>
          )}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button variant="hero" size="sm" className="mt-2 w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;
