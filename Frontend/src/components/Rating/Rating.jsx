export function Rating({ numberOfStars = 5, ...props }) {
    const n = typeof numberOfStars === "number" ? numberOfStars : 5;
    return <span {...props}>{"★".repeat(n)}</span>;
  }
  