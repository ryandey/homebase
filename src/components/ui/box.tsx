interface BoxProps {
  children: React.ReactNode
}

export const Box = ({ children }: BoxProps) => (
  <>
    <div className="flex justify-between flex-wrap border border-white-a08 rounded-xl p-4 gap-2">
      {children}
    </div>
  </>
)
