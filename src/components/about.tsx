import { SocialGrid } from "./ui/social-grid";

export const About = () => {
  return (
    <section className="py-5 mx-6 mb-5" id="aboutSection">
      <h2 className="text-3xl mb-3">About Me</h2>
      <p className="text-muted-foreground">
        I learned how to use HTML and CSS in my third grade technology class.
        From there, I fell in love with building websites that emphasize being a
        pleasure to use. My experience with freelance graphic design from high
        school showed me the importance of good design, which has been my
        driving philosophy since.
      </p>

      <SocialGrid />
    </section>
  );
};
