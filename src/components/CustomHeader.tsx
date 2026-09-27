import type { Props } from "../interfaces/custom-header";

export const CustomHeader = ({ title }: Props) => (
  <div className="header">
    <h1>
      <span className="check-icon">☑</span> {title}
    </h1>
  </div>
);