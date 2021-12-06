export const SocialIcon = ({ label, image }) => {
  return (
    <div className="social-icon-container">
      <img src={image} className="social-icon" />
      <p className="social-icon-label">{label}</p>
    </div>
  );
};
