import { Link } from "react-router-dom";

const CustomLink = ({ to, ...props }: { to: string } & React.ComponentProps<typeof Link>) => {
  const basename = "/mon-portfolio";
  const normalizedTo = `${basename}${to}`.replace(/\/+/g, '/');
  return <Link to={normalizedTo} {...props} />;
};
export default CustomLink