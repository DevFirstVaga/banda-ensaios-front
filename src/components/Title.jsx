function Title({
  children,
  color,
  fontSize,
}) {
  return (
    <h1
      style={{
        color,
        fontSize,
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </h1>
  )
}


export default Title;