interface JobProps {
  company: string
  title: string
  startDate: string
  endDate: string
  skills: string[]
}

export const Job = ({
  company,
  title,
  startDate,
  endDate,
  skills,
}: JobProps) => (
  <>
    <div className="flex w-full flex-col justify-between border border-white-a08 rounded-xl py-6 px-8 my-3 md:flex-row md:items-center md:py-2">
      <div className="text-start mb-2 md:my-4">
        <h3 className="text-lg mb-2">
          {title} <br className="md:hidden" />
          <span className="text-grey text-sm"> {company}</span>
        </h3>
        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
          {skills.map((skill) => (
            <div className="border border-white-a08 px-3 py-1 rounded-full bg-primary text-xs md:text-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="text-md text-start md:text-end">
        <p>
          {startDate} &#8212; {endDate}
        </p>
      </div>
    </div>
  </>
)
