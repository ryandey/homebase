export const About = () => {
  return (
    <section className="my-10 py-5" id="about-me">
      <h2 className="text-3xl mb-6">About Me</h2>
      <p className="text-muted-foreground mb-4">
        I discovered my passion for web development through my early experiences
        with HTML and CSS. My background in freelance graphic design has
        instilled in me a deep appreciation for exceptional design. With a focus
        on collaboration and innovation, I strive to create optimized web
        solutions that meet clients’ needs.
      </p>

      {/* Skills */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Primary skills */}
        <div className="bg-muted border rounded-lg px-5 py-4 shadow-xl">
          <h4 className="mb-2 capitalize">Specialized Skills</h4>
          <ul className="text-muted-foreground">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
        </div>

        {/* Secondary skills */}
        <div className="bg-muted border border-muted rounded-lg px-5 py-4 shadow-xl">
          <h4 className="mb-2 capitalize">Additional Skills</h4>
          <ul className="text-muted-foreground">
            <li>TypeScript</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
