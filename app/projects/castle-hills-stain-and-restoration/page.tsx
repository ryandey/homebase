import Hero from "@/components/projects/hero";
import React from "react";

export default function Page() {
  return (
    <div className="mt-14">
      <Hero
        heading="Castle Hills Stain & Restoration"
        subtitle="Completed: September 2024"
      />

      {/* Page content */}
      <section className="flex flex-col justify-center items-center p-16 h-190">
        <p className="font-instrumentSerif text-4xl">
          Project details coming soon.
        </p>
      </section>

      {/* <section className="flex flex-col items-center p-16">
        <div className="w-full max-w-7xl space-y-12">
          <section>
            <p className="text-muted-foreground">
              In today's digital age, a strong online presence is
              non-negotiable, especially for local businesses thriving on visual
              appeal and trust. Recently, I had the pleasure of partnering with
              Castle Hills Stain & Restoration, a premier fence and gate
              contractor serving the Dallas-Fort Worth (DFW) Metroplex. Their
              craft is stunning – transforming weathered fences and gates into
              beautifully restored assets – but their online marketing wasn't
              quite showcasing their artistry effectively. That's where I
              stepped in.
            </p>
            <p className="mt-4 text-muted-foreground">
              This project wasn't just about building a website; it was about
              crafting a digital storefront that would efficiently market their
              specialized services, vividly display their expertise through
              before-and-after transformations, and ultimately drive more
              business in the competitive DFW market. Let's dive into how we
              achieved this.
            </p>
          </section>

          <section>
            <h2 className="text-4xl md:text-6xl mb-4">Purpose</h2>
            <p className="text-muted-foreground">
              Castle Hills Stain & Restoration are masters at breathing new life
              into fences and gates. From pressure washing and staining to
              intricate repairs and full restoration, they provide a
              high-quality service that significantly enhances curb appeal.
              However, their previous online presence was minimal and didn't
              effectively capture the transformative nature of their work.
            </p>
            <p className="mt-4 text-muted-foreground">
              The primary goal was to develop a website that acts as a powerful
              marketing tool, specifically designed to:
            </p>
            <ul className="ml-12 list-disc text-muted-foreground">
              <li>
                <strong>Visually showcase their expertise:</strong> Utilize
                before-and-after images to demonstrate the dramatic impact of
                their services.
              </li>
              <li>
                <strong>Clearly communicate their service offerings:</strong>{" "}
                Make it easy for potential clients to understand the range of
                services they provide.
              </li>
              <li>
                <strong>Generate leads and inquiries:</strong> Provide clear
                calls to action and contact information to facilitate customer
                engagement.
              </li>
              <li>
                <strong>Establish credibility and trust:</strong> Present a
                professional and modern online image that reflects their
                high-quality workmanship.
              </li>
              <li>
                <strong>Improve local SEO:</strong> Target DFW Metroplex clients
                seeking fence and gate restoration services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-4xl md:text-6xl mb-4">
              Features & Functionality
            </h2>
            <p className="text-muted-foreground">
              To achieve these goals, we implemented a range of features focused
              on visual storytelling and user-friendly navigation:
            </p>

            <ul className="ml-12 text-muted-foreground list-disc">
              <li>
                <strong>Dynamic Before & After Galleries:</strong> This is the
                heart of the website. Each service page features dedicated
                galleries showcasing compelling before-and-after images. This
                allows potential clients to instantly grasp the value and
                transformative power of Castle Hills Stain & Restoration's work.
                We ensured these galleries were:
                <ul className="ml-8 list-disc">
                  <li>
                    <strong>Visually prominent:</strong> Placed strategically on
                    relevant service pages.
                  </li>
                  <li>
                    <strong>Easy to navigate:</strong> Utilizing intuitive image
                    carousels and lightbox functionality.
                  </li>
                  <li>
                    <strong>Optimized for performance:</strong> Images are
                    compressed and lazy-loaded to maintain fast page load times,
                    crucial for both user experience and SEO.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Detailed Service Pages:</strong> Each core service
                (Fence Staining, Fence Restoration, Gate Staining, Gate
                Restoration, Pressure Washing) has its own dedicated page. These
                pages provide:
                <ul className="ml-8 list-disc">
                  <li>
                    <strong>In-depth descriptions:</strong> Explaining the
                    process and benefits of each service.
                  </li>
                  <li>
                    <strong>Targeted before & after galleries:</strong>{" "}
                    Specifically showcasing that service's results.
                  </li>
                  <li>
                    <strong>Clear calls to action:</strong> Encouraging users to
                    "Request a Quote" or "Contact Us" directly from the service
                    page.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Clean and Intuitive Contact Form:</strong> A simple and
                accessible contact form is strategically placed throughout the
                website and on a dedicated "Contact Us" page, making it easy for
                potential clients to reach out.
              </li>
              <li>
                <strong>Mobile-First Responsive Design:</strong> Understanding
                that many users, especially local clients, would be searching on
                mobile devices, a mobile-first approach was paramount. The
                website is fully responsive and provides a seamless experience
                across all devices, from smartphones to desktops.
              </li>
              <li>
                <strong>SEO Optimization from the Ground Up:</strong> SEO best
                practices were integrated throughout the development process.
                This included:
                <ul className="ml-8 list-disc">
                  <li>
                    <strong>Clean and semantic HTML:</strong> For optimal search
                    engine crawlability.
                  </li>
                  <li>
                    <strong>
                      Optimized page titles and meta descriptions:
                    </strong>{" "}
                    Targeting relevant keywords for DFW fence and gate services.
                  </li>
                  <li>
                    <strong>Fast page load speeds:</strong> Achieved through
                    optimized code, image compression, and efficient framework
                    usage.
                  </li>
                  <li>
                    <strong>Structured data markup (Schema.org):</strong> To
                    enhance search engine understanding and potential rich
                    snippets.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-4xl md:text-6xl mb-4">Tech Stack</h2>

            <p>
              To build a performant, scalable, and maintainable website, we
              leveraged a modern and efficient tech stack:
            </p>

            <ul>
              <li>
                <strong>Frontend Framework: Next.js:</strong> Chosen for its
                server-side rendering (SSR) capabilities, excellent SEO
                performance, routing flexibility, and vibrant developer
                community. Next.js allowed us to create a fast and dynamic user
                experience.
              </li>
              <li>
                <strong>Language: TypeScript:</strong> Utilizing TypeScript
                provided type safety and improved code maintainability, crucial
                for a project that may evolve over time.
              </li>
              <li>
                <strong>UI Components: Shadcn-UI:</strong> This component
                library provided beautifully designed, accessible, and
                customizable UI components based on Radix UI and styled with
                Tailwind CSS. It accelerated development and ensured a
                consistent and professional visual aesthetic.
              </li>
              <li>
                <strong>Styling: Tailwind CSS:</strong> Tailwind CSS allowed for
                rapid and consistent styling, enabling us to quickly implement
                the desired design while maintaining a clean and maintainable
                CSS codebase.
              </li>
              <li>
                <strong>
                  Deployment: Vercel (or Netlify - depending on your actual
                  deployment):
                </strong>{" "}
                Utilizing Vercel (or your chosen platform) ensures fast and
                reliable deployment and hosting, perfectly complementing the
                Next.js framework.
              </li>
            </ul>

            <p>
              This stack allowed for a rapid development cycle while
              prioritizing performance, SEO, and a great user experience.
            </p>
          </section>
        </div>
      </section> */}
    </div>
  );
}
