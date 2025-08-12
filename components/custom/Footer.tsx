import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
];

const quickLinks = [
  { href: "/provinces", label: "Provinces" },
  { href: "/attractions", label: "Attractions" },
  { href: "/culture", label: "Culture" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Philippines Logo"
                width={32}
                height={32}
                className="w-8 h-8 brightness-0 invert"
              />
              <span className="text-xl font-bold text-yellow-400">
                Philippines
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Discover the beauty of the Philippines - a paradise of 7,641
              islands offering diverse cultures, pristine beaches, and
              unforgettable adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                <FaPhone className="text-yellow-400" />
                <span>+63 2 8459-5200</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="text-yellow-400" />
                <span>info@tourism.gov.ph</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>Davao City, Philippines</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={24}
                    className="group-hover:text-gray-900"
                  />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Stay updated with the latest travel news and promotions
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Philippines Travel Guide. All
              rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-yellow-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-yellow-400"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
