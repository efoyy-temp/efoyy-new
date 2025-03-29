import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background mt-20 flex flex-col items-center ">
      <div className="container pt-16 px-8 max-w-7xl">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="space-y-4 min-w-28">
            <h3 className="text- font-bold mb-6">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4 min-w-28">
            <h3 className="text- font-bold mb-6">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="space-y-4 min-w-28">
            <h3 className="text- font-bold mb-6">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  Be a passenger
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  be a rider
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  partner with us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 mb-8 text-center">
          <p className="text-primary font-semibold text-xs leading-relaxed">
            ©{new Date().getFullYear()} EFOYY. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      <div className="w-full relative overflow-hidden">
        <h1 className="tracking flex justify-center w-full text-foreground text-[30vw] text-center font-bold leading-[0.8] mb-[-6vw]">
          EFOYY
        </h1>
      </div>
    </footer>
  );
}
