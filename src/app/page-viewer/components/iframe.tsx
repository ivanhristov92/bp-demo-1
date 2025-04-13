export const IFrame = ({ children, style = {}, ...props }: any) => {
  return (
    <iframe
      {...props}
      width="100%"
      height="100%"
      style={{ overflow: "scroll", ...style }}
    ></iframe>
  );
};
