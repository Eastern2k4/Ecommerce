export function Badge({ children, ...props }) {
    return <span {...props}>{children ?? "Badge"}</span>;
  }
  