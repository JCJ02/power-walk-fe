type pictureProps = {
  source: string;
  className?: string;
};

const Picture = ({ source, className }: pictureProps) => {
  return <img className={className} src={source} />;
};

export default Picture;
