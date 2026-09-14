import { Link } from "@tanstack/react-router";
import logo from "@/assets/render-pro-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background/80 mt-24">
      <div className="container-page py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block font-display text-background">
              <div className="bg-white px-3 py-1.5 rounded-sm inline-block">
                <img src={logo} alt="Render Pro Service logo" className="h-12 sm:h-14 w-auto object-contain" width={460} height={110} loading="lazy" />
              </div>
            </Link>

            <p className="mt-8 max-w-md text-background/60 leading-relaxed">
              Rendering contractors based on the Gold Coast, delivering acrylic, cement,
              texture and blue board finishes for homes and businesses across South East Queensland.
            </p>
            <div className="mt-4 text-xs text-background/50 space-y-0.5 font-mono">
              <p>QBCC Status: <span className="text-background/80">Under Process</span></p>
              <p>ABN: <span className="text-background/80">98 676 120 166</span> | ACN: <span className="text-background/80">676 120 166</span></p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <div className="eyebrow text-background/50">Phone</div>
                <a href="tel:0431306910" className="mt-2 block text-background link-underline">
                  0431 306 910
                </a>
              </div>
              <div>
                <div className="eyebrow text-background/50">Email</div>
                <a
                  href="mailto:contact@renderproservices.com.au"
                  className="mt-2 block text-background link-underline break-all"
                >
                  contact@renderproservices.com.au
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-background/50">Services</div>
            <ul className="mt-6 space-y-3 text-background/75">
              <li><Link to="/services/$slug" params={{ slug: "acrylic-rendering" }} className="link-underline">Acrylic Rendering</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "cement-rendering" }} className="link-underline">Cement Rendering</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "texture-coating" }} className="link-underline">Texture Finishes</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "blue-board-rendering" }} className="link-underline">Blue Board Rendering</Link></li>
              <li><Link to="/services" className="link-underline">All services</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-background/50">Studio</div>
            <ul className="mt-6 space-y-3 text-background/75">
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/projects" className="link-underline">Projects</Link></li>
              <li><Link to="/gallery" className="link-underline">Gallery</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-background/50">Head office</div>
            <address className="mt-6 not-italic text-background/75 leading-relaxed">
              Gold Coast<br />
              QLD 4215, Australia
            </address>
            <div className="mt-6 eyebrow text-background/50">Follow</div>
            <div className="mt-3 flex gap-4 text-background/75 text-sm">
              <a href="https://www.facebook.com/renderproservices" target="_blank" rel="noreferrer" className="link-underline">Facebook</a>
              <a href="https://www.instagram.com/renderproservices" target="_blank" rel="noreferrer" className="link-underline">Instagram</a>
              <a href="https://www.linkedin.com/company/render-pro-services-pty-ltd/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-background/50">
          <span>© {new Date().getFullYear()} Render Pro Service Pty Ltd</span>
          <span>QBCC Status: Under Process</span>
        </div>
      </div>
    </footer>
  );
}
