import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
       
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shopify</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/investors">Investors</FooterLink>
              <FooterLink href="/press">Press and Media</FooterLink>
              <FooterLink href="/partners">Partners</FooterLink>
              <FooterLink href="/affiliates">Affiliates</FooterLink>
            </ul>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="/support">Merchant Support</FooterLink>
              <FooterLink href="/help">Shopify Help Center</FooterLink>
              <FooterLink href="/hire">Hire a Partner</FooterLink>
              <FooterLink href="/academy">Shopify Academy</FooterLink>
              <FooterLink href="/community">Shopify Community</FooterLink>
            </ul>
          </div>

      
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Developers</h3>
            <ul className="space-y-2">
              <FooterLink href="/dev">Shopify.dev</FooterLink>
              <FooterLink href="/api">API Documentation</FooterLink>
              <FooterLink href="/degree">Dev Degree</FooterLink>
              <FooterLink href="/fulfillment">Shopify Fulfillment Network</FooterLink>
              <FooterLink href="/enterprise">Shopify for Enterprise</FooterLink>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul className="space-y-2">
              <FooterLink href="/shop">Shop</FooterLink>
              <FooterLink href="/shoppay">Shop Pay</FooterLink>
              <FooterLink href="/plus">Shopify Plus</FooterLink>
              <FooterLink href="/solutions">Solutions</FooterLink>
              <FooterLink href="/builder">Online Store Builder</FooterLink>
              <FooterLink href="/website">Website Builder</FooterLink>
              <FooterLink href="/ecommerce">Ecommerce Website</FooterLink>
            </ul>
          </div>

        
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Global</h3>
            <ul className="space-y-2">
              <FooterLink href="/impact">Global Impact</FooterLink>
              <FooterLink href="/sustainability">Sustainability</FooterLink>
              <FooterLink href="/black">Build Black</FooterLink>
              <FooterLink href="/research">Research</FooterLink>
            </ul>
          </div>

        
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/terms">Terms of service</FooterLink>
              <FooterLink href="/privacy">Privacy policy</FooterLink>
              <FooterLink href="/sitemap">Sitemap</FooterLink>
              <FooterLink href="/privacy-choices">Privacy Choices</FooterLink>
              <FooterLink href="/status">Service status</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} Shopify</span>
            <span className="hidden md:inline">|</span>
            <span>USA</span>
            <select className="bg-transparent text-gray-700 border-none focus:ring-0">
              <option>English</option>
              <option>Français</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}


function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm hover:text-gray-900 transition-colors">
        {children}
      </Link>
    </li>
  );
}